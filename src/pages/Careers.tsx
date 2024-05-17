import Heading from "../components/Heading"

const content = {
    text: {
        subTitle: "Careers",
        title: 'Featured Jobs',
        desc: `What makes this role stand out?
        Is it the cutting-edge technology, a chance to work with a renowned team, or a fast-paced, growth-oriented environment? Make it clear why top talent should be excited about this opportunity.`,
    },
}
const Careers = () => {
    return (
        
        <div className="px-4 py-16" id="careers">
            <div className="bg-white container mx-auto rounded-lg shadow">
                <div className="p-6 border-b border-gray-300 text-center">
                    <Heading text={content.text.subTitle} />
                    <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">{content.text.title}</h2>
                    <p className="max-w-xl mx-auto mt-2 text-body text-base leading-relaxed">{content.text.desc}</p>
                </div>
                <div className="flex gap-8 p-6">

                    <div className="relative flex flex-col jus items-center justify-start overflow-hidden w-full bg-gray-50 p-6 sm:py-12 gap-5">
                        {[1,2,3,4,5,6,7,8,9].map((x)=>(
                        <div key={x} className="bg-white shadow-xl shadow-gray-100 w-full max-w-6xl flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md">
                            <div>
                                <span className="text-purpleLight text-sm">Engineering</span>
                                <h3 className="font-bold mt-px">Senior Full Stack Backend Engineer</h3>
                                <div className="flex items-center gap-3 mt-2">
                                    <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">Full-time</span>
                                    <span className="text-slate-600 text-sm flex gap-1 items-center"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg> 
                                        Remote, UK
                                    </span>
                                </div>
                            </div>
                            <div>
                                <button className="bg-purpleLight hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">
                                    Apply Now 
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>    
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Careers