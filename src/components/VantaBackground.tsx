'use client'

import { useEffect, useRef, useState } from 'react'

interface VantaBackgroundProps {
    children?: React.ReactNode
    className?: string
}

export function VantaBackground({ children, className = '' }: VantaBackgroundProps) {
    const vantaRef = useRef<HTMLDivElement>(null)
    const [vantaEffect, setVantaEffect] = useState<any>(null)

    useEffect(() => {
        if (!vantaEffect && vantaRef.current) {
            // Dynamically import Vanta and Three.js to avoid SSR issues
            import('three').then((THREE) => {
                // @ts-ignore
                import('vanta/dist/vanta.waves.min').then((VANTA) => {
                    setVantaEffect(
                        VANTA.default({
                            el: vantaRef.current,
                            THREE: THREE,
                            mouseControls: true,
                            touchControls: true,
                            gyroControls: false,
                            minHeight: 200.00,
                            minWidth: 200.00,
                            scale: 1.00,
                            scaleMobile: 1.00,
                            color: 0x3f51b5, // Blue accent color for waves
                            shininess: 50.00,
                            waveHeight: 20.00,
                            waveSpeed: 1.0,
                            zoom: 0.65
                        })
                    )
                })
            })
        }

        return () => {
            if (vantaEffect) {
                vantaEffect.destroy()
            }
        }
    }, [vantaEffect])

    return (
        <div ref={vantaRef} className={`relative ${className}`}>
            {children}
        </div>
    )
}
