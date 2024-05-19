import { pageTitle } from "../constants"


function AtSymbolIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-secondary"
        >
            <path
                strokeLinecap="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
            />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-secondary"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
        </svg>
    );
}

function MapPinIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-secondary"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
    );
}

const Footer = () => {
  return (
    
    <footer className="bg-primary p-10 tracking-wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <a href="/" title={`Welcome to ${pageTitle.subTitle}`} className='inline-flex items-center'>
                    <img src='ram.svg' alt={pageTitle.title} className='w-24'/>
                    <span className="font-bold text-3xl tracking-tight font-['Caveat']">{pageTitle.title}</span>  
                </a>
                
            </div>

            <div className="lg:flex lg:items-center">
            <ul className="flex space-x-6">
                <li>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
                    <path fillRule="evenodd"
                        d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                        />
                    </svg>
                </a>
                </li>
                <li>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
                    <path fillRule="evenodd"
                        d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                        />
                    </svg>
                </a>
                </li>
                <li>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-300 hover:fill-white w-7 h-7"
                    viewBox="0 0 24 24">
                    <path
                        d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                </a>
                </li>
            </ul>
            </div>

            <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3 mb-5">
                    <AtSymbolIcon/>
                    <div>
                        <span className="hover:text-white text-sm">myemailhere2024@solutions.com</span>
                    </div>
                </li>
                <li className="flex items-start space-x-3 mb-5">
                    <PhoneIcon/>
                    <div>
                        <span className="hover:text-white text-sm">+6301234567845</span>
                    </div>
                </li>
                <li className="flex items-start space-x-3 mb-5">
                    <MapPinIcon/>
                    <div>
                        <span className="hover:text-white text-sm">Taguig City, Manila PHL</span>
                    </div>
                    
                </li>
            </ul>
            </div>

            <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Information</h4>
            <ul className="space-y-4">
                <li>
                    
                <a href="#about" className="text-gray-300 hover:text-white text-sm">About Us</a>
                </li>
                <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm">Terms &amp; Conditions</a>
                </li>
                <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policy</a>
                </li>
            </ul>
            </div>
        </div>
        <p className="text-gray-300 text-sm mt-10">© {new Date().getFullYear()}<a href='#home' target='_blank'
            className="hover:underline mx-1">{pageTitle.title}</a>All Rights Reserved.
        </p>
    </footer>

  )
}

export default Footer