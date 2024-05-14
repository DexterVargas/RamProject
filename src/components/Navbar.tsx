import { useState, useEffect } from 'react'
import { logo } from '../assets/index'
import { navLinks } from '../constants/index'


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

    const [activeName, setActiveName] = useState(activeLocation.substring(1));
    const [toggle, setToggle] = useState<boolean>(false)

    const [dimensions, setDimensions] = useState({
        height: typeof window !== "undefined" ? window.innerHeight : 0,
        width: typeof window !== "undefined" ? window.innerWidth : 0,
    });

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

    // **Render
    return (
        <nav>
            <div className="py-7 text-lg">
                <div className="container px-4 mx-auto">
                    <div className="flex justify-between items-center">
                        <img src={logo} alt='hoobank' className='w-[124px] h-[32px] block'/>
                        <div className="hidden lg:block text-center">
                            <ul className='flex space-x-7'>
                                {navLinks.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className={`relative group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-indigo-600 ${ activeName === item.id ? 'text-indigo-600': ''}`}
                                        onClick={()=>{setActiveName(item.id)}}
                                    >
                                        <span className="">{item.title}</span>
                                        <span className={`absolute bottom-0 left-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all group-hover:ease-in-out ${ activeName === item.id ? 'w-full ease-in-out transition-all': 'w-0'}`}></span>
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
                    <div className="h-screen w-screen z-[999] top-0 fixed bg-black/50" onClick={()=>setToggle(!toggle)}></div>
                    <div className="bg-white w-[380px] top-0 right-0 z-[999] h-screen fixed animate-slide-in-right">
                        <div className="h-14 px-10 border-b flex items-center">
                            <button className="flex items-center space-x-1" onClick={()=>setToggle(!toggle)}>
                                <XMarkIcon />
                                <span>Close</span>
                            </button>
                        </div>
                        <div className="h-full py-3 pb-20 overflow-y-scroll scroll-smooth">
                            <ul className="py-2 mb-7">
                                {navLinks.map((item) => (
                                    <li key={item.title} className={`px-10 hover:bg-indigo-50 hover:text-indigo-600 ${ activeName === item.id ? 'bg-indigo-50 text-indigo-600': ''}`}>
                                        <a 
                                            href={`#${item.id}`} 
                                            className="flex items-center px-4 py-2"
                                            onClick={()=>{setActiveName(item.id)}}>

                                            <span>{item.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        
            {/* <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img
                src={toggle ? close : menu}
                alt='menu'
                className='w-[28px] h-[28px] object-contain'
                onClick={() => setToggle((previous) => !previous)}
                />
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, i) => (
                        <li 
                            key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
                        >
                            <a href={`#${nav.id}`}>
                            {nav.title} 
                            </a>
                        </li>        
                        ))}
                    </ul>
                </div>
            </div> */}
        </nav>
    )
}

export default Navbar
