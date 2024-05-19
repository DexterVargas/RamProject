import { useState, useEffect } from 'react'
import { navLinks, pageTitle } from '../constants/index'


const BurgerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const XMarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Navbar = () => {

    const activeLocation = location.hash;

    // const sectionRef = useRef<HTMLDivElement | null>(null);

    const [activeName, setActiveName] = useState(activeLocation.substring(1));
    const [toggle, setToggle] = useState<boolean>(false)

    const [dimensions, setDimensions] = useState({
        height: typeof window !== "undefined" ? window.innerHeight : 0,
        width: typeof window !== "undefined" ? window.innerWidth : 0,
    });

    const handleToggleSelection = (id:string) => {
        setActiveName(id);
        setToggle(!toggle);
    }

    const handleResize = () => {
        if (typeof window !== "undefined") {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        }
    };

    // * effects
    useEffect(() => {
        if (dimensions.width > 1024 && toggle) setToggle(false);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            
        };
    }, [dimensions.width, toggle]);


    //BACK TO BUTTON
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        //Show/hide BackToTop button
        if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
            setShowButton(true);
        } else {
            setShowButton(false); 
        }

        // Highligh active in hamburger button
        function isElementInViewport(el: HTMLElement) {
            const rect = el.getBoundingClientRect()
            const offsetTop = el.offsetTop;
            const offsetBottom = offsetTop + rect.height;
            const scrollPosition = window.scrollY;
            return (
                scrollPosition > offsetTop &&
                scrollPosition < offsetBottom
            )
          }

        const sections = document.querySelectorAll('[data-section]')
        sections.forEach(section => {
          if (isElementInViewport(section as HTMLElement)) {
            setActiveName(() => section.id)
          }
        })
    };

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    // **Render
    return (
        // sticky top-0 backdrop-blur-md bg-opacity-70 z-50
        <header id='home' className='bg-white bg-opacity-90 z-50'>
            <nav id='/' className=''>
                <div className={`py-4 text-lg w-full z-50 ${showButton ? 'shadow-md':''}`}>
                    <div className="container px-4 mx-auto z-9999">
                        <div className="flex justify-between items-center">
                        <div className="flex items-center flex-shrink-0 text-primary mr-6">
                            <a href="/" title={`Welcome to ${pageTitle.subTitle}`} className='inline-flex'>
                            <img src='ram.svg' alt={pageTitle.title} className='h-8'/>
                                <span className="font-bold text-2xl tracking-tight font-['Caveat']">{pageTitle.title}</span>  
                            </a>
                            
                        </div>
                            
                            <div className="hidden lg:block text-center">
                                <ul className='flex space-x-7 cursor-pointer' onClick={(event: React.SyntheticEvent) => {
                                    event.preventDefault();
                                    const target = event.target as HTMLSpanElement;
                                    const id = target.getAttribute('href-data')?.replace('#', '');
                                    const element = document.getElementById(String(id));
                                    element?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                    });
                                }}>
                                    {navLinks.map((item) => (
                                    <li key={item.id}>
                                        <a  href-data={`#${item.id}`}
                                            className={`relative group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-indigo-600 ${ activeName === item.id ? 'text-indigo-600': ''}`}
                                            
                                        >
                                            <span href-data={`#${item.id}`} className="">{item.title}</span>
                                            <span href-data={`#${item.id}`} className={`absolute bottom-0 left-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all group-hover:ease-in-out ${ activeName === item.id ? 'w-full ease-in-out transition-all': 'w-0'}`}></span>
                                        </a>
                                    </li>        
                                    ))}
                                </ul>    
                            </div>
                            <button className="lg:hidden" onClick={()=>setToggle(!toggle)}>
                                <BurgerIcon />
                            </button>
                        </div>
                    </div>
                </div>
                
                {/*  Mobile menu */}
                {!!toggle && (
                    <div className="">
                        <div className="h-screen w-screen z-[999] top-0 fixed bg-black/50" onClick={()=>setToggle(!toggle)}>
                        </div>
                        <div className="bg-white w-[380px] top-0 right-0 z-[999] h-screen fixed animate-slide-in-right">
                            <div className="h-14 px-10 border-b flex items-center">
                                <button className="flex items-center space-x-1" onClick={()=>setToggle(!toggle)}>
                                    <XMarkIcon />
                                    <span>Close</span>
                                </button>
                            </div>
                            <div className="h-full py-3 pb-20 overflow-y-scroll scroll-smooth">
                                <ul className="py-2 mb-7" onClick={(event: React.SyntheticEvent) => {
                                    event.preventDefault();
                                    const target = event.target as HTMLSpanElement;
                                    const id = target.getAttribute('href-data')?.replace('#', '');
                                    const element = document.getElementById(String(id));
                                    element?.scrollIntoView({
                                    behavior: 'smooth'
                                    });
                                }}>
                                    {navLinks.map((item) => (
                                        <li key={item.title} className={`px-10 hover:bg-indigo-50 hover:text-indigo-600 ${ activeName === item.id ? 'bg-indigo-50 text-indigo-600': ''}`}>
                                            <a 
                                                href-data={`#${item.id}`} 
                                                className="flex items-center px-4 py-2"
                                                onClick={()=>{handleToggleSelection(item.id)}}>

                                                <span href-data={`#${item.id}`}>{item.title}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                
            </nav>
            {/* <!-- Back to top button backToTop--> */}
            {showButton && (
            <div className="bg-light">
                <button
                type="button"
                onClick={() => {
                    // Basic jumping to the top of the page
                    // Note: the x value is 0 here
                    // window.scroll(0, 0);
          
                    // Jumping to the top of the page with smooth scrolling
                    window.scroll({
                      top: 0,
                      behavior: 'smooth'
                    });

                    // Set URL to orig
                    setActiveName('/');
                    // Remove hash(#...) if currert url have
                    if(location.hash) {
                        window.history.replaceState("", document.title, location.pathname);
                    }
                  }}
                className={` ${
                    showButton ? `inline-block` : `hidden`
                } fixed bottom-[40px] right-[40px] p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out z-50`}
                >
                    <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    className="w-4 h-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    >
                        <path
                        fill="currentColor"
                        d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                        ></path>
                    </svg>
                </button>
            </div>)}
        </header>
    )
}

export default Navbar
