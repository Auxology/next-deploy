"use client";
{/*Simple scroll to top button, which is imported from react-scroll-to-top*/}
import ScrollToTop from "react-scroll-to-top";


const ScrollToTopButton = () => {
    return (
        <ScrollToTop 
                smooth 
                component={<span style={{ fontSize: '24px' }}>↑</span>}
                style={{
                    backgroundColor: '#3d680a',
                    color: 'white',
                    padding: '10px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.3s ease',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    borderRadius: '0%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                className="hover:bg-opacity-90 hover:-translate-y-1"
            />
    )
}

export default ScrollToTopButton;