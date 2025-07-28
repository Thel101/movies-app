import { useState, useEffect } from 'react'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)

    console.log('ScrollToTop component rendered')

    useEffect(() => {
        console.log('useEffect called')

        const toggleVisibility = () => {
            // Try multiple ways to get scroll position
            const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
            const scrollX = window.scrollX || window.pageXOffset || document.documentElement.scrollLeft

            console.log('Scroll detected! Y:', scrollY, 'X:', scrollX)
            setScrollPosition(scrollY)

            if (scrollY > 300) {
                console.log('Should show button')
                setIsVisible(true)
            } else {
                console.log('Should hide button')
                setIsVisible(false)
                console.log('Scrolled up, hiding button')
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
            document.removeEventListener('scroll', toggleVisibility)
            document.body.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    const scrollToTop = () => {
        console.log('Scroll to top clicked')
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            {/* Debug info - always visible */}
            <div style={{
                position: 'fixed',
                top: '10px',
                left: '10px',
                background: 'yellow',
                padding: '10px',
                zIndex: 9999,
                fontSize: '12px'
            }}>
                Scroll: {scrollPosition}px<br />
                Visible: {isVisible.toString()}
            </div>

            {/* Always visible button for testing */}
            <button
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    backgroundColor: isVisible ? 'rgb(5, 206, 206)' : 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    zIndex: 1000,
                    transition: 'all 0.3s ease'
                }}
            >
                ↑
            </button>
        </div>
    )
}