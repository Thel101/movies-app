import { useState, useEffect } from 'react'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    console.log('ScrollToTop component rendered')

    useEffect(() => {
        console.log('useEffect called')

        const toggleVisibility = () => {


            if (window.scrollY > 400) {
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


            {isVisible && <button
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    backgroundColor: 'rgb(5, 206, 206)',
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
            }
        </div>
    )
}