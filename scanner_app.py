#!/usr/bin/env python3
"""
Next.js + Sanity.io + Web3Forms Security Scanner Dashboard
DevSecOps Tool for Auditing Modern JAMstack Applications

Author: DevSecOps Engineer
Version: 1.0.0
Python: 3.10+

DISCLAIMER: This tool is designed for authorized security testing of your own infrastructure only.
Unauthorized use against third-party websites is prohibited and may violate applicable laws.
"""

import streamlit as st
import requests
import asyncio
import aiohttp
import re
import json
import time
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
from typing import Dict, List, Tuple, Optional
import concurrent.futures
from dataclasses import dataclass
from datetime import datetime

# Configure Streamlit page
st.set_page_config(
    page_title="Next.js Security Scanner",
    page_icon="🔒",
    layout="wide",
    initial_sidebar_state="expanded"
)

@dataclass
class SecurityFinding:
    """Data class for security findings"""
    severity: str  # HIGH, MEDIUM, LOW, INFO
    category: str
    title: str
    description: str
    recommendation: str
    technical_details: Optional[str] = None

class NextJSSecurityScanner:
    """Main security scanner class for Next.js applications"""
    
    def __init__(self, target_url: str):
        self.target_url = target_url.rstrip('/')
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'NextJS-Security-Scanner/1.0 (Authorized Testing)'
        })
        self.findings: List[SecurityFinding] = []
        self.sanity_config = {}
        
    def add_finding(self, severity: str, category: str, title: str, 
                   description: str, recommendation: str, technical_details: str = None):
        """Add a security finding to the results"""
        finding = SecurityFinding(
            severity=severity,
            category=category,
            title=title,
            description=description,
            recommendation=recommendation,
            technical_details=technical_details
        )
        self.findings.append(finding)
    
    def detect_nextjs(self) -> Dict[str, any]:
        """Detect Next.js framework and version"""
        try:
            response = self.session.get(self.target_url, timeout=10)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            results = {
                'is_nextjs': False,
                'version': None,
                'indicators': [],
                'build_id': None,
                'static_paths': []
            }
            
            # Check for Next.js indicators
            indicators = []
            
            # 1. Check for __NEXT_DATA__ script
            next_data_script = soup.find('script', {'id': '__NEXT_DATA__'})
            if next_data_script:
                indicators.append('__NEXT_DATA__ script found')
                results['is_nextjs'] = True
                
                # Try to extract build ID
                try:
                    next_data = json.loads(next_data_script.string)
                    if 'buildId' in next_data:
                        results['build_id'] = next_data['buildId']
                        indicators.append(f'Build ID: {results["build_id"]}')
                except:
                    pass
            
            # 2. Check for _next/static paths
            static_links = soup.find_all('link', href=re.compile(r'/_next/static/'))
            static_scripts = soup.find_all('script', src=re.compile(r'/_next/static/'))
            
            if static_links or static_scripts:
                indicators.append('_next/static paths detected')
                results['is_nextjs'] = True
                results['static_paths'] = [
                    link.get('href', link.get('src', '')) 
                    for link in static_links + static_scripts
                ]
            
            # 3. Check X-Powered-By header
            if 'X-Powered-By' in response.headers:
                powered_by = response.headers['X-Powered-By']
                if 'Next.js' in powered_by:
                    indicators.append(f'X-Powered-By: {powered_by}')
                    results['is_nextjs'] = True
                    
                    # This is a security issue
                    self.add_finding(
                        'MEDIUM',
                        'Information Disclosure',
                        'X-Powered-By Header Exposed',
                        'The X-Powered-By header reveals Next.js framework information',
                        'Remove X-Powered-By header in production by setting "poweredByHeader: false" in next.config.js',
                        f'Header value: {powered_by}'
                    )
            
            # 4. Check for Next.js specific meta tags
            next_meta = soup.find('meta', {'name': 'next-head-count'})
            if next_meta:
                indicators.append('next-head-count meta tag found')
                results['is_nextjs'] = True
            
            results['indicators'] = indicators
            
            if results['is_nextjs']:
                st.success("✅ Next.js application detected!")
            else:
                st.warning("⚠️ Next.js indicators not found - may not be a Next.js app")
                
            return results
            
        except Exception as e:
            st.error(f"Error detecting Next.js: {str(e)}")
            return {'is_nextjs': False, 'error': str(e)}
    
    def extract_sanity_config(self) -> Dict[str, any]:
        """Extract Sanity.io configuration from client-side code"""
        try:
            response = self.session.get(self.target_url, timeout=10)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            results = {
                'project_id': None,
                'dataset': None,
                'api_version': None,
                'use_cdn': None,
                'found_in': []
            }
            
            # Check in inline scripts
            scripts = soup.find_all('script')
            for script in scripts:
                if script.string:
                    content = script.string
                    
                    # Look for Sanity project ID patterns
                    project_id_match = re.search(r'projectId["\']?\s*:\s*["\']([a-z0-9]+)["\']', content)
                    if project_id_match:
                        results['project_id'] = project_id_match.group(1)
                        results['found_in'].append('inline script')
                    
                    # Look for dataset
                    dataset_match = re.search(r'dataset["\']?\s*:\s*["\'](\w+)["\']', content)
                    if dataset_match:
                        results['dataset'] = dataset_match.group(1)
                    
                    # Look for API version
                    api_version_match = re.search(r'apiVersion["\']?\s*:\s*["\']([0-9-]+)["\']', content)
                    if api_version_match:
                        results['api_version'] = api_version_match.group(1)
            
            # Check in external JS files
            js_files = soup.find_all('script', src=True)
            for js_file in js_files[:5]:  # Limit to first 5 JS files
                try:
                    js_url = urljoin(self.target_url, js_file['src'])
                    js_response = self.session.get(js_url, timeout=5)
                    
                    project_id_match = re.search(r'projectId["\']?\s*:\s*["\']([a-z0-9]+)["\']', js_response.text)
                    if project_id_match and not results['project_id']:
                        results['project_id'] = project_id_match.group(1)
                        results['found_in'].append(f'external JS: {js_file["src"]}')
                        
                except:
                    continue
            
            self.sanity_config = results
            return results
            
        except Exception as e:
            st.error(f"Error extracting Sanity config: {str(e)}")
            return {'error': str(e)}
    
    def test_sanity_permissions(self) -> Dict[str, any]:
        """Test Sanity.io dataset permissions and query access"""
        if not self.sanity_config.get('project_id'):
            return {'error': 'No Sanity project ID found'}
        
        project_id = self.sanity_config['project_id']
        dataset = self.sanity_config.get('dataset', 'production')
        
        results = {
            'project_id': project_id,
            'dataset': dataset,
            'public_access': False,
            'queries_tested': [],
            'accessible_types': []
        }
        
        # Test queries to check permissions
        test_queries = [
            '*[_type == "system.group"]',  # System query
            '*[0..2]',  # Basic document query
            '*[_type match "*"]',  # Type discovery
            'count(*)'  # Count query
        ]
        
        sanity_url = f"https://{project_id}.api.sanity.io/v2021-06-07/data/query/{dataset}"
        
        for query in test_queries:
            try:
                params = {'query': query}
                response = self.session.get(sanity_url, params=params, timeout=10)
                
                query_result = {
                    'query': query,
                    'status_code': response.status_code,
                    'accessible': response.status_code == 200
                }
                
                if response.status_code == 200:
                    results['public_access'] = True
                    try:
                        data = response.json()
                        if 'result' in data and data['result']:
                            query_result['result_count'] = len(data['result']) if isinstance(data['result'], list) else 1
                    except:
                        pass
                
                results['queries_tested'].append(query_result)
                
            except Exception as e:
                results['queries_tested'].append({
                    'query': query,
                    'error': str(e),
                    'accessible': False
                })
        
        # Add security findings
        if results['public_access']:
            self.add_finding(
                'HIGH',
                'Data Exposure',
                'Sanity Dataset Publicly Accessible',
                f'The Sanity dataset "{dataset}" allows public read access without authentication',
                'Configure proper access controls in Sanity Studio. Set dataset to private and implement proper authentication.',
                f'Project ID: {project_id}, Dataset: {dataset}'
            )
        else:
            self.add_finding(
                'INFO',
                'Access Control',
                'Sanity Dataset Properly Protected',
                'Sanity dataset requires authentication for access',
                'Continue monitoring access controls regularly',
                f'Project ID: {project_id}, Dataset: {dataset}'
            )
        
        return results
    
    async def test_rate_limiting(self, form_endpoint: str = None) -> Dict[str, any]:
        """Asynchronously test rate limiting on forms"""
        if not form_endpoint:
            # Try to find Web3Forms endpoint
            try:
                response = self.session.get(self.target_url, timeout=10)
                soup = BeautifulSoup(response.text, 'html.parser')
                
                # Look for Web3Forms action
                forms = soup.find_all('form')
                for form in forms:
                    action = form.get('action', '')
                    if 'web3forms.com' in action:
                        form_endpoint = action
                        break
                
                if not form_endpoint:
                    # Look in JavaScript for Web3Forms API calls
                    scripts = soup.find_all('script')
                    for script in scripts:
                        if script.string and 'web3forms.com' in script.string:
                            match = re.search(r'https://api\.web3forms\.com/submit', script.string)
                            if match:
                                form_endpoint = 'https://api.web3forms.com/submit'
                                break
                
            except:
                pass
        
        if not form_endpoint:
            return {'error': 'No form endpoint found for testing'}
        
        results = {
            'endpoint': form_endpoint,
            'total_requests': 10,
            'successful_requests': 0,
            'blocked_requests': 0,
            'rate_limited': False,
            'response_times': [],
            'status_codes': []
        }
        
        # Prepare test data
        test_data = {
            'access_key': 'test-key-security-scan',
            'name': 'Security Test',
            'email': 'security-test@example.com',
            'message': 'Authorized security testing - rate limit check'
        }
        
        async def make_request(session, url, data):
            try:
                start_time = time.time()
                async with session.post(url, data=data) as response:
                    end_time = time.time()
                    return {
                        'status_code': response.status,
                        'response_time': end_time - start_time,
                        'headers': dict(response.headers)
                    }
            except Exception as e:
                return {'error': str(e), 'status_code': 0}
        
        # Perform async rate limit test
        async with aiohttp.ClientSession() as session:
            tasks = []
            for i in range(10):
                task = make_request(session, form_endpoint, test_data)
                tasks.append(task)
            
            responses = await asyncio.gather(*tasks, return_exceptions=True)
        
        # Analyze results
        for response in responses:
            if isinstance(response, dict) and 'status_code' in response:
                status_code = response['status_code']
                results['status_codes'].append(status_code)
                
                if 'response_time' in response:
                    results['response_times'].append(response['response_time'])
                
                if status_code == 429:  # Too Many Requests
                    results['blocked_requests'] += 1
                    results['rate_limited'] = True
                elif status_code in [200, 400, 422]:  # Successful or expected errors
                    results['successful_requests'] += 1
        
        # Add security findings
        if not results['rate_limited'] and results['successful_requests'] > 5:
            self.add_finding(
                'MEDIUM',
                'Rate Limiting',
                'Insufficient Rate Limiting on Forms',
                f'Form endpoint accepted {results["successful_requests"]}/10 rapid requests without rate limiting',
                'Implement proper rate limiting (e.g., 3-5 requests per hour per IP)',
                f'Endpoint: {form_endpoint}'
            )
        elif results['rate_limited']:
            self.add_finding(
                'INFO',
                'Rate Limiting',
                'Rate Limiting Working Correctly',
                f'Form endpoint properly blocked {results["blocked_requests"]} requests',
                'Continue monitoring rate limiting effectiveness',
                f'Endpoint: {form_endpoint}'
            )
        
        return results
    
    def check_security_headers(self) -> Dict[str, any]:
        """Check for critical security headers"""
        try:
            response = self.session.get(self.target_url, timeout=10)
            headers = response.headers
            
            # Define required security headers
            security_headers = {
                'X-Content-Type-Options': {
                    'expected': 'nosniff',
                    'severity': 'MEDIUM',
                    'description': 'Prevents MIME type sniffing attacks'
                },
                'Strict-Transport-Security': {
                    'expected': None,  # Any value is good
                    'severity': 'HIGH',
                    'description': 'Enforces HTTPS connections'
                },
                'X-Frame-Options': {
                    'expected': ['DENY', 'SAMEORIGIN'],
                    'severity': 'MEDIUM',
                    'description': 'Prevents clickjacking attacks'
                },
                'Content-Security-Policy': {
                    'expected': None,
                    'severity': 'HIGH',
                    'description': 'Prevents XSS and injection attacks'
                },
                'X-XSS-Protection': {
                    'expected': '1; mode=block',
                    'severity': 'LOW',
                    'description': 'Legacy XSS protection (mostly deprecated)'
                },
                'Referrer-Policy': {
                    'expected': None,
                    'severity': 'LOW',
                    'description': 'Controls referrer information'
                }
            }
            
            results = {
                'headers_found': {},
                'missing_headers': [],
                'security_score': 0
            }
            
            total_headers = len(security_headers)
            found_headers = 0
            
            for header_name, config in security_headers.items():
                if header_name in headers:
                    header_value = headers[header_name]
                    results['headers_found'][header_name] = header_value
                    found_headers += 1
                    
                    # Validate header value if expected value is specified
                    if config['expected']:
                        if isinstance(config['expected'], list):
                            if header_value not in config['expected']:
                                self.add_finding(
                                    config['severity'],
                                    'Security Headers',
                                    f'Weak {header_name} Header',
                                    f'{config["description"]}. Current value may be insufficient.',
                                    f'Set {header_name} to one of: {", ".join(config["expected"])}',
                                    f'Current value: {header_value}'
                                )
                        elif config['expected'] != header_value:
                            self.add_finding(
                                config['severity'],
                                'Security Headers',
                                f'Weak {header_name} Header',
                                f'{config["description"]}. Current value is not optimal.',
                                f'Set {header_name} to: {config["expected"]}',
                                f'Current value: {header_value}'
                            )
                else:
                    results['missing_headers'].append(header_name)
                    self.add_finding(
                        config['severity'],
                        'Security Headers',
                        f'Missing {header_name} Header',
                        f'{config["description"]}. This header is not set.',
                        f'Add {header_name} header to your Next.js configuration',
                        f'Add to next.config.js headers configuration'
                    )
            
            results['security_score'] = (found_headers / total_headers) * 100
            
            return results
            
        except Exception as e:
            st.error(f"Error checking security headers: {str(e)}")
            return {'error': str(e)}
    
    def check_source_maps(self) -> Dict[str, any]:
        """Check for exposed source maps"""
        try:
            results = {
                'source_maps_found': [],
                'exposed_files': []
            }
            
            # Get the main page to find static assets
            response = self.session.get(self.target_url, timeout=10)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Find JavaScript files
            js_files = []
            scripts = soup.find_all('script', src=True)
            for script in scripts:
                src = script['src']
                if src.startswith('/_next/static/'):
                    js_files.append(urljoin(self.target_url, src))
            
            # Check for source maps
            for js_file in js_files[:10]:  # Limit to first 10 files
                try:
                    # Check if .map file exists
                    map_url = js_file + '.map'
                    map_response = self.session.head(map_url, timeout=5)
                    
                    if map_response.status_code == 200:
                        results['source_maps_found'].append(map_url)
                        
                        # Try to get the actual map content
                        map_content_response = self.session.get(map_url, timeout=5)
                        if map_content_response.status_code == 200:
                            try:
                                map_data = map_content_response.json()
                                if 'sources' in map_data:
                                    results['exposed_files'].extend(map_data['sources'])
                            except:
                                pass
                
                except:
                    continue
            
            # Add security findings
            if results['source_maps_found']:
                self.add_finding(
                    'MEDIUM',
                    'Information Disclosure',
                    'Source Maps Exposed in Production',
                    f'Found {len(results["source_maps_found"])} exposed source map files',
                    'Disable source maps in production by setting "productionBrowserSourceMaps: false" in next.config.js',
                    f'Exposed maps: {", ".join(results["source_maps_found"][:3])}{"..." if len(results["source_maps_found"]) > 3 else ""}'
                )
            
            return results
            
        except Exception as e:
            st.error(f"Error checking source maps: {str(e)}")
            return {'error': str(e)}
    
    def check_env_exposure(self) -> Dict[str, any]:
        """Check for exposed environment files"""
        try:
            results = {
                'exposed_files': [],
                'accessible_paths': []
            }
            
            # Common paths that might expose sensitive information
            test_paths = [
                '/.env',
                '/.env.local',
                '/.env.production',
                '/.env.development',
                '/api/auth/session',
                '/api/auth/providers',
                '/.next/server/pages-manifest.json',
                '/.next/build-manifest.json',
                '/package.json',
                '/next.config.js'
            ]
            
            for path in test_paths:
                try:
                    url = urljoin(self.target_url, path)
                    response = self.session.get(url, timeout=5)
                    
                    if response.status_code == 200:
                        results['accessible_paths'].append({
                            'path': path,
                            'status_code': response.status_code,
                            'content_type': response.headers.get('content-type', 'unknown'),
                            'size': len(response.content)
                        })
                        
                        # Check if it contains sensitive information
                        content = response.text.lower()
                        sensitive_patterns = [
                            'api_key', 'secret', 'password', 'token', 'private_key',
                            'database_url', 'mongodb', 'postgres', 'mysql'
                        ]
                        
                        for pattern in sensitive_patterns:
                            if pattern in content:
                                results['exposed_files'].append({
                                    'path': path,
                                    'pattern': pattern,
                                    'severity': 'HIGH'
                                })
                                break
                
                except:
                    continue
            
            # Add security findings
            for exposed_file in results['exposed_files']:
                self.add_finding(
                    'HIGH',
                    'Information Disclosure',
                    f'Sensitive File Exposed: {exposed_file["path"]}',
                    f'File contains sensitive information pattern: {exposed_file["pattern"]}',
                    'Ensure sensitive files are not accessible via web server. Use proper .gitignore and server configuration.',
                    f'Path: {exposed_file["path"]}'
                )
            
            for accessible_path in results['accessible_paths']:
                if accessible_path['path'] in ['/package.json', '/next.config.js']:
                    self.add_finding(
                        'MEDIUM',
                        'Information Disclosure',
                        f'Configuration File Accessible: {accessible_path["path"]}',
                        'Configuration files should not be publicly accessible',
                        'Configure web server to block access to configuration files',
                        f'Path: {accessible_path["path"]}, Size: {accessible_path["size"]} bytes'
                    )
            
            return results
            
        except Exception as e:
            st.error(f"Error checking environment exposure: {str(e)}")
            return {'error': str(e)}
    
    def calculate_risk_score(self) -> Dict[str, any]:
        """Calculate overall risk score based on findings"""
        severity_weights = {
            'HIGH': 10,
            'MEDIUM': 5,
            'LOW': 2,
            'INFO': 0
        }
        
        total_score = 0
        severity_counts = {'HIGH': 0, 'MEDIUM': 0, 'LOW': 0, 'INFO': 0}
        
        for finding in self.findings:
            severity_counts[finding.severity] += 1
            total_score += severity_weights[finding.severity]
        
        # Calculate risk level
        if total_score >= 20:
            risk_level = 'HIGH'
            risk_color = '🔴'
        elif total_score >= 10:
            risk_level = 'MEDIUM'
            risk_color = '🟡'
        elif total_score >= 5:
            risk_level = 'LOW'
            risk_color = '🟢'
        else:
            risk_level = 'MINIMAL'
            risk_color = '✅'
        
        return {
            'total_score': total_score,
            'risk_level': risk_level,
            'risk_color': risk_color,
            'severity_counts': severity_counts,
            'total_findings': len(self.findings)
        }

def main():
    """Main Streamlit application"""
    
    # Header
    st.title("🔒 Next.js + Sanity.io + Web3Forms Security Scanner")
    st.markdown("**DevSecOps Tool for JAMstack Security Auditing**")
    
    # Disclaimer
    with st.expander("⚠️ IMPORTANT DISCLAIMER - READ BEFORE USE"):
        st.error("""
        **AUTHORIZED TESTING ONLY**
        
        This security scanner is designed exclusively for authorized testing of your own infrastructure.
        
        ❌ **DO NOT USE** this tool against websites you do not own or have explicit permission to test.
        
        ❌ **UNAUTHORIZED SCANNING** may violate:
        - Computer Fraud and Abuse Act (CFAA)
        - Digital Millennium Copyright Act (DMCA)
        - Local and international cybersecurity laws
        
        ✅ **AUTHORIZED USE ONLY**:
        - Your own websites and applications
        - Client websites with written permission
        - Penetration testing engagements with proper scope
        
        By using this tool, you acknowledge that you have proper authorization and accept full responsibility for its use.
        """)
    
    # Sidebar configuration
    st.sidebar.header("🎯 Scan Configuration")
    
    target_url = st.sidebar.text_input(
        "Target URL",
        placeholder="https://your-nextjs-site.com",
        help="Enter the full URL of the Next.js application to scan"
    )
    
    # Scan options
    st.sidebar.subheader("Scan Modules")
    scan_nextjs = st.sidebar.checkbox("Next.js Detection", value=True)
    scan_sanity = st.sidebar.checkbox("Sanity.io Audit", value=True)
    scan_forms = st.sidebar.checkbox("Form Rate Limiting", value=True)
    scan_headers = st.sidebar.checkbox("Security Headers", value=True)
    scan_sourcemaps = st.sidebar.checkbox("Source Map Detection", value=True)
    scan_env = st.sidebar.checkbox("Environment Exposure", value=True)
    
    # Custom form endpoint
    custom_form_endpoint = st.sidebar.text_input(
        "Custom Form Endpoint (Optional)",
        placeholder="https://api.web3forms.com/submit",
        help="Specify a custom form endpoint for rate limiting tests"
    )
    
    if st.sidebar.button("🚀 Start Security Scan", type="primary"):
        if not target_url:
            st.error("Please enter a target URL")
            return
        
        # Validate URL
        try:
            parsed_url = urlparse(target_url)
            if not parsed_url.scheme or not parsed_url.netloc:
                st.error("Please enter a valid URL with protocol (http:// or https://)")
                return
        except:
            st.error("Invalid URL format")
            return
        
        # Initialize scanner
        scanner = NextJSSecurityScanner(target_url)
        
        # Progress tracking
        progress_bar = st.progress(0)
        status_text = st.empty()
        
        # Results storage
        scan_results = {}
        
        total_scans = sum([scan_nextjs, scan_sanity, scan_forms, scan_headers, scan_sourcemaps, scan_env])
        current_scan = 0
        
        # Run scans
        if scan_nextjs:
            status_text.text("🔍 Detecting Next.js framework...")
            scan_results['nextjs'] = scanner.detect_nextjs()
            current_scan += 1
            progress_bar.progress(current_scan / total_scans)
        
        if scan_sanity:
            status_text.text("🔍 Extracting Sanity.io configuration...")
            scan_results['sanity_config'] = scanner.extract_sanity_config()
            
            status_text.text("🔍 Testing Sanity.io permissions...")
            scan_results['sanity_permissions'] = scanner.test_sanity_permissions()
            current_scan += 1
            progress_bar.progress(current_scan / total_scans)
        
        if scan_forms:
            status_text.text("🔍 Testing form rate limiting...")
            form_endpoint = custom_form_endpoint if custom_form_endpoint else None
            scan_results['rate_limiting'] = asyncio.run(scanner.test_rate_limiting(form_endpoint))
            current_scan += 1
            progress_bar.progress(current_scan / total_scans)
        
        if scan_headers:
            status_text.text("🔍 Checking security headers...")
            scan_results['security_headers'] = scanner.check_security_headers()
            current_scan += 1
            progress_bar.progress(current_scan / total_scans)
        
        if scan_sourcemaps:
            status_text.text("🔍 Checking for source maps...")
            scan_results['source_maps'] = scanner.check_source_maps()
            current_scan += 1
            progress_bar.progress(current_scan / total_scans)
        
        if scan_env:
            status_text.text("🔍 Checking environment exposure...")
            scan_results['env_exposure'] = scanner.check_env_exposure()
            current_scan += 1
            progress_bar.progress(current_scan / total_scans)
        
        # Calculate risk score
        status_text.text("📊 Calculating risk score...")
        risk_assessment = scanner.calculate_risk_score()
        
        progress_bar.progress(1.0)
        status_text.text("✅ Scan completed!")
        
        # Display results
        display_results(scanner, scan_results, risk_assessment)

def display_results(scanner: NextJSSecurityScanner, scan_results: Dict, risk_assessment: Dict):
    """Display scan results in organized tabs"""
    
    st.success("🎉 Security scan completed successfully!")
    
    # Overview tab
    tab1, tab2, tab3, tab4, tab5 = st.tabs(["📊 Overview", "🔍 Sanity Audit", "📝 Form Security", "🛡️ Header Analysis", "📋 Detailed Findings"])
    
    with tab1:
        st.header("Security Overview")
        
        # Risk score display
        col1, col2, col3 = st.columns(3)
        
        with col1:
            st.metric(
                "Risk Level",
                f"{risk_assessment['risk_color']} {risk_assessment['risk_level']}",
                f"Score: {risk_assessment['total_score']}"
            )
        
        with col2:
            st.metric(
                "Total Findings",
                risk_assessment['total_findings'],
                f"High: {risk_assessment['severity_counts']['HIGH']}"
            )
        
        with col3:
            if 'security_headers' in scan_results:
                st.metric(
                    "Security Headers",
                    f"{scan_results['security_headers'].get('security_score', 0):.0f}%",
                    "Coverage"
                )
        
        # Framework detection
        if 'nextjs' in scan_results:
            st.subheader("🚀 Framework Detection")
            nextjs_data = scan_results['nextjs']
            
            if nextjs_data.get('is_nextjs'):
                st.success("✅ Next.js application confirmed")
                
                if nextjs_data.get('build_id'):
                    st.info(f"Build ID: `{nextjs_data['build_id']}`")
                
                if nextjs_data.get('indicators'):
                    st.write("**Detection Indicators:**")
                    for indicator in nextjs_data['indicators']:
                        st.write(f"• {indicator}")
            else:
                st.warning("⚠️ Next.js not detected - results may be limited")
        
        # Quick findings summary
        st.subheader("🎯 Critical Findings Summary")
        
        high_findings = [f for f in scanner.findings if f.severity == 'HIGH']
        medium_findings = [f for f in scanner.findings if f.severity == 'MEDIUM']
        
        if high_findings:
            st.error(f"🔴 {len(high_findings)} HIGH severity issues found")
            for finding in high_findings[:3]:  # Show first 3
                st.write(f"• **{finding.title}**: {finding.description}")
        
        if medium_findings:
            st.warning(f"🟡 {len(medium_findings)} MEDIUM severity issues found")
            for finding in medium_findings[:3]:  # Show first 3
                st.write(f"• **{finding.title}**: {finding.description}")
        
        if not high_findings and not medium_findings:
            st.success("✅ No critical security issues detected!")
    
    with tab2:
        st.header("🔍 Sanity.io Security Audit")
        
        if 'sanity_config' in scan_results:
            config = scan_results['sanity_config']
            
            col1, col2 = st.columns(2)
            
            with col1:
                st.subheader("Configuration Detected")
                if config.get('project_id'):
                    st.success(f"✅ Project ID: `{config['project_id']}`")
                else:
                    st.warning("⚠️ No Sanity project ID found")
                
                if config.get('dataset'):
                    st.info(f"Dataset: `{config['dataset']}`")
                
                if config.get('found_in'):
                    st.write("**Found in:**")
                    for location in config['found_in']:
                        st.write(f"• {location}")
            
            with col2:
                if 'sanity_permissions' in scan_results:
                    perms = scan_results['sanity_permissions']
                    
                    st.subheader("Access Control Test")
                    
                    if perms.get('public_access'):
                        st.error("🔴 Dataset is publicly accessible!")
                        st.write("**Accessible queries:**")
                        for query in perms.get('queries_tested', []):
                            if query.get('accessible'):
                                st.write(f"• `{query['query']}` ✅")
                    else:
                        st.success("✅ Dataset properly protected")
                    
                    # Show all query results
                    with st.expander("View All Query Test Results"):
                        for query in perms.get('queries_tested', []):
                            status = "✅ Accessible" if query.get('accessible') else "❌ Blocked"
                            st.write(f"**{query['query']}**: {status}")
                            if 'result_count' in query:
                                st.write(f"  Results: {query['result_count']}")
    
    with tab3:
        st.header("📝 Form Security Analysis")
        
        if 'rate_limiting' in scan_results:
            rate_data = scan_results['rate_limiting']
            
            if 'error' in rate_data:
                st.warning(f"⚠️ {rate_data['error']}")
            else:
                col1, col2, col3 = st.columns(3)
                
                with col1:
                    st.metric("Endpoint", rate_data.get('endpoint', 'Unknown'))
                
                with col2:
                    st.metric("Successful Requests", f"{rate_data.get('successful_requests', 0)}/10")
                
                with col3:
                    st.metric("Blocked Requests", rate_data.get('blocked_requests', 0))
                
                # Rate limiting status
                if rate_data.get('rate_limited'):
                    st.success("✅ Rate limiting is working correctly")
                else:
                    st.error("🔴 Rate limiting may be insufficient")
                
                # Response analysis
                if rate_data.get('response_times'):
                    avg_response_time = sum(rate_data['response_times']) / len(rate_data['response_times'])
                    st.info(f"Average response time: {avg_response_time:.2f}s")
                
                # Status code breakdown
                if rate_data.get('status_codes'):
                    st.subheader("Response Status Codes")
                    status_counts = {}
                    for code in rate_data['status_codes']:
                        status_counts[code] = status_counts.get(code, 0) + 1
                    
                    for code, count in status_counts.items():
                        st.write(f"• HTTP {code}: {count} responses")
    
    with tab4:
        st.header("🛡️ Security Headers Analysis")
        
        if 'security_headers' in scan_results:
            headers_data = scan_results['security_headers']
            
            if 'error' in headers_data:
                st.error(f"Error: {headers_data['error']}")
            else:
                # Security score
                score = headers_data.get('security_score', 0)
                if score >= 80:
                    st.success(f"✅ Security Headers Score: {score:.0f}%")
                elif score >= 60:
                    st.warning(f"⚠️ Security Headers Score: {score:.0f}%")
                else:
                    st.error(f"🔴 Security Headers Score: {score:.0f}%")
                
                col1, col2 = st.columns(2)
                
                with col1:
                    st.subheader("✅ Headers Found")
                    found_headers = headers_data.get('headers_found', {})
                    if found_headers:
                        for header, value in found_headers.items():
                            st.write(f"**{header}**: `{value}`")
                    else:
                        st.write("No security headers found")
                
                with col2:
                    st.subheader("❌ Missing Headers")
                    missing_headers = headers_data.get('missing_headers', [])
                    if missing_headers:
                        for header in missing_headers:
                            st.write(f"• {header}")
                    else:
                        st.write("All headers present")
        
        # Source maps check
        if 'source_maps' in scan_results:
            st.subheader("🗺️ Source Map Exposure")
            source_data = scan_results['source_maps']
            
            if source_data.get('source_maps_found'):
                st.error(f"🔴 {len(source_data['source_maps_found'])} source maps exposed!")
                with st.expander("View Exposed Source Maps"):
                    for map_file in source_data['source_maps_found']:
                        st.write(f"• {map_file}")
            else:
                st.success("✅ No source maps exposed")
        
        # Environment exposure check
        if 'env_exposure' in scan_results:
            st.subheader("🔐 Environment File Exposure")
            env_data = scan_results['env_exposure']
            
            if env_data.get('exposed_files'):
                st.error(f"🔴 {len(env_data['exposed_files'])} sensitive files exposed!")
                for file_info in env_data['exposed_files']:
                    st.write(f"• **{file_info['path']}**: Contains `{file_info['pattern']}`")
            else:
                st.success("✅ No sensitive files exposed")
            
            if env_data.get('accessible_paths'):
                st.warning("⚠️ Accessible configuration files:")
                for path_info in env_data['accessible_paths']:
                    st.write(f"• {path_info['path']} ({path_info['size']} bytes)")
    
    with tab5:
        st.header("📋 Detailed Security Findings")
        
        if not scanner.findings:
            st.success("🎉 No security issues found!")
            return
        
        # Group findings by severity
        severity_order = ['HIGH', 'MEDIUM', 'LOW', 'INFO']
        
        for severity in severity_order:
            severity_findings = [f for f in scanner.findings if f.severity == severity]
            
            if not severity_findings:
                continue
            
            # Severity header with color coding
            severity_colors = {
                'HIGH': '🔴',
                'MEDIUM': '🟡',
                'LOW': '🟠',
                'INFO': '🔵'
            }
            
            st.subheader(f"{severity_colors[severity]} {severity} Severity ({len(severity_findings)} findings)")
            
            for i, finding in enumerate(severity_findings):
                with st.expander(f"{finding.title} - {finding.category}"):
                    st.write(f"**Description:** {finding.description}")
                    st.write(f"**Recommendation:** {finding.recommendation}")
                    
                    if finding.technical_details:
                        st.write(f"**Technical Details:** `{finding.technical_details}`")
                    
                    st.write(f"**Category:** {finding.category}")

if __name__ == "__main__":
    main()