# 🔒 Next.js + Sanity.io + Web3Forms Security Scanner

A comprehensive DevSecOps tool built with Streamlit for auditing modern JAMstack applications built with Next.js, Sanity.io CMS, and Web3Forms.

## 🎯 Features

### 🔍 **Reconnaissance & Asset Detection**
- **Next.js Framework Detection**: Identifies Next.js applications via `__NEXT_DATA__`, `_next/static` paths, and framework headers
- **Sanity Configuration Extraction**: Discovers Sanity project IDs, datasets, and API configurations from client-side code
- **Build Information**: Extracts build IDs and static asset paths

### 🛡️ **Security Vulnerability Modules**

#### **Sanity.io Security Audit**
- **Public Dataset Detection**: Tests if Sanity Content Lake allows unauthorized public access
- **GROQ Query Testing**: Attempts system queries to verify access controls
- **Permission Validation**: Checks for overly permissive dataset configurations

#### **Web3Forms Rate Limiting Test**
- **Async Stress Testing**: Sends 10 concurrent requests to test rate limiting
- **Response Analysis**: Monitors for 429 (Too Many Requests) status codes
- **Honeypot Detection**: Verifies spam protection mechanisms

#### **Next.js Security Headers**
- **Critical Header Audit**: Checks for essential security headers:
  - `X-Content-Type-Options: nosniff`
  - `Strict-Transport-Security` (HSTS)
  - `Content-Security-Policy` (CSP)
  - `X-Frame-Options`
  - `Referrer-Policy`
- **Information Disclosure**: Detects exposed `X-Powered-By: Next.js` headers

#### **Client-Side Security**
- **Source Map Detection**: Scans for exposed `.map` files in `_next/static/`
- **Environment File Exposure**: Tests for accessible `.env`, `package.json`, and config files
- **Sensitive Data Patterns**: Searches for API keys, secrets, and database URLs

### 📊 **Risk Assessment**
- **Automated Risk Scoring**: Calculates security scores based on finding severity
- **Severity Classification**: HIGH, MEDIUM, LOW, INFO categorization
- **Comprehensive Reporting**: Detailed findings with remediation recommendations

## 🚀 Installation & Setup

### Prerequisites
- Python 3.10 or higher
- pip package manager

### Installation Steps

1. **Clone or download the scanner files**
```bash
# Download the scanner files to your local machine
```

2. **Install dependencies**
```bash
pip install -r requirements.txt
```

3. **Run the scanner**
```bash
streamlit run scanner_app.py
```

4. **Access the dashboard**
- Open your browser to `http://localhost:8501`
- The Streamlit dashboard will load automatically

## 🎮 Usage Guide

### 1. **Initial Setup**
- Launch the scanner with `streamlit run scanner_app.py`
- Read and acknowledge the security disclaimer
- Enter your target URL in the sidebar

### 2. **Configure Scan Modules**
Select which security modules to run:
- ✅ **Next.js Detection** - Framework identification
- ✅ **Sanity.io Audit** - CMS security testing
- ✅ **Form Rate Limiting** - Web3Forms protection testing
- ✅ **Security Headers** - HTTP header analysis
- ✅ **Source Map Detection** - Development file exposure
- ✅ **Environment Exposure** - Sensitive file access

### 3. **Custom Configuration**
- **Custom Form Endpoint**: Specify alternative form URLs for testing
- **Selective Scanning**: Enable/disable specific modules based on your needs

### 4. **Execute Security Scan**
- Click "🚀 Start Security Scan"
- Monitor real-time progress indicators
- Wait for comprehensive analysis completion

### 5. **Review Results**
Navigate through organized result tabs:

#### **📊 Overview Tab**
- Risk level assessment with color-coded indicators
- Framework detection confirmation
- Critical findings summary
- Security metrics dashboard

#### **🔍 Sanity Audit Tab**
- Discovered Sanity configuration details
- Dataset access control test results
- GROQ query accessibility analysis
- Public/private dataset status

#### **📝 Form Security Tab**
- Rate limiting effectiveness analysis
- Response time and status code breakdown
- Spam protection verification
- Web3Forms endpoint security

#### **🛡️ Header Analysis Tab**
- Security header coverage percentage
- Present vs. missing header comparison
- Source map exposure detection
- Environment file accessibility check

#### **📋 Detailed Findings Tab**
- Severity-grouped security issues
- Comprehensive remediation guidance
- Technical implementation details
- Category-based finding organization

## ⚠️ Security & Legal Considerations

### **CRITICAL DISCLAIMER**
This tool is designed **EXCLUSIVELY** for authorized security testing of your own infrastructure.

#### ❌ **PROHIBITED USES**
- Testing websites you do not own
- Scanning without explicit written permission
- Unauthorized penetration testing
- Violating terms of service

#### ✅ **AUTHORIZED USES**
- Your own websites and applications
- Client websites with written authorization
- Legitimate penetration testing engagements
- Security research with proper scope

#### **Legal Compliance**
Unauthorized use may violate:
- Computer Fraud and Abuse Act (CFAA)
- Digital Millennium Copyright Act (DMCA)
- International cybersecurity regulations
- Local computer crime statutes

## 🔧 Technical Architecture

### **Core Components**
- **Streamlit Frontend**: Interactive web-based dashboard
- **Async HTTP Client**: aiohttp for concurrent request testing
- **HTML Parser**: BeautifulSoup4 for DOM analysis
- **Pattern Matching**: Regex-based configuration extraction

### **Security Testing Methodology**
1. **Passive Reconnaissance**: Non-intrusive information gathering
2. **Configuration Analysis**: Client-side code examination
3. **Permission Testing**: Controlled access verification
4. **Rate Limit Validation**: Concurrent request analysis
5. **Header Inspection**: Security configuration audit

### **Risk Scoring Algorithm**
```python
Severity Weights:
- HIGH: 10 points
- MEDIUM: 5 points  
- LOW: 2 points
- INFO: 0 points

Risk Levels:
- MINIMAL: 0-4 points
- LOW: 5-9 points
- MEDIUM: 10-19 points
- HIGH: 20+ points
```

## 🛠️ Customization & Extension

### **Adding Custom Checks**
Extend the `NextJSSecurityScanner` class with additional security modules:

```python
def custom_security_check(self) -> Dict[str, any]:
    """Add your custom security validation logic"""
    # Implementation here
    pass
```

### **Modifying Risk Scoring**
Adjust severity weights in the `calculate_risk_score()` method:

```python
severity_weights = {
    'CRITICAL': 15,  # Add new severity level
    'HIGH': 10,
    'MEDIUM': 5,
    'LOW': 2,
    'INFO': 0
}
```

### **Custom Report Formats**
Extend the `display_results()` function to add new visualization tabs or export formats.

## 📈 Performance Considerations

### **Scan Optimization**
- **Concurrent Requests**: Async operations for faster scanning
- **Request Limiting**: Built-in delays to avoid overwhelming targets
- **Selective Modules**: Enable only necessary scan components
- **Timeout Management**: Configurable request timeouts

### **Resource Usage**
- **Memory Efficient**: Streaming response processing
- **CPU Optimized**: Minimal computational overhead
- **Network Friendly**: Respectful request patterns

## 🤝 Contributing

### **Development Setup**
1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-security-check`
3. Implement changes with proper testing
4. Submit pull request with detailed description

### **Security Module Guidelines**
- Follow existing code patterns and structure
- Include comprehensive error handling
- Add appropriate security findings classification
- Document new functionality thoroughly

## 📞 Support & Issues

### **Common Issues**
- **Connection Timeouts**: Increase timeout values for slow targets
- **Rate Limiting**: Reduce concurrent request counts
- **SSL Errors**: Verify target certificate validity

### **Reporting Bugs**
Include the following information:
- Target URL (if safe to share)
- Error messages and stack traces
- Python version and dependency versions
- Operating system details

## 📄 License

This security scanner is provided for educational and authorized testing purposes. Users are responsible for ensuring compliance with all applicable laws and regulations.

---

**Built with ❤️ for the DevSecOps community**

*Secure your JAMstack applications with confidence*