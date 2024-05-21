import Heading from "../components/Heading"

const content = {
    text: {
        subTitle: "Careers",
        title: 'Featured Jobs',
        desc: `What makes this role stand out?
        Is it the cutting-edge technology, a chance to work with a renowned team, or a fast-paced, growth-oriented environment? Make it clear why top talent should be excited about this opportunity.`,
    },
}
const hiring = [
    {
        category:'Finance & Accounting',
        position: 'Bookkeepers Admin',
        type: 'Full-time',
        loc:'NCR, Manila',
        color:'bg-purple-100 text-purple-700'
    },
    {
        category:'Finance & Accounting',
        position: 'Bookkeepers',
        type: 'Contractual',
        loc:'NCR, Manila',
        color:'bg-amber-100 text-amber-700'
    },
    {
        category:'Sales & Marketing',
        position: 'CSR Representative',
        type: 'Part-time',
        loc:'NCR, Manila',
        color:'bg-teal-100 text-teal-700'
    },
    {
        category:'Admin & Customer Support',
        position: 'SEO Expert',
        type: 'Full-time',
        loc:'NCR, Manila',
        color:'bg-purple-100 text-purple-700'
    },
    {
        category:'Admin & Customer Support',
        position: 'Data Entry Specialist',
        type: 'Remote',
        loc:'NCR, Manila',
        color:'bg-amber-100 text-amber-700'
    },
    {
        category:'Writing & Translation',
        position: 'Content Writer',
        type: 'Part-time',
        loc:'NCR, Manila',
        color:'bg-teal-100 text-teal-700'
    },
    {
        category:'Writing & Translation',
        position: 'Copywriter',
        type: 'Full-time',
        loc:'NCR, Manila',
        color:'bg-purple-100 text-purple-700'
    },
    {
        category:'Writing & Translation',
        position: 'Video Editors',
        type: 'Part-time',
        loc:'NCR, Manila',
        color:'bg-teal-100 text-teal-700'
    },
]

const Careers = () => {
    return (
        
        <section data-section className="scroll-mt-[76px] px-4 py-16" id="careers">
            <div className="bg-white container mx-auto rounded-lg shadow">
                <div className="p-6 border-b border-gray-300 text-center">
                    <Heading text={content.text.subTitle} />
                    <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">{content.text.title}</h2>
                    <div className="flex">
                        <div className="bg-greenLight rounded-full w-12 h-12 flex-none" />
                      <p className="max-w-xl mx-auto mt-2 text-body text-base leading-relaxed grow">{content.text.desc}</p>  
                      <div className="bg-yellowLight rounded-2xl rounded-tl-[200px] w-20 h-20 flex-none" />
                    </div>
                    
                </div>
                <div className="flex gap-8 p-6">

                    <div className="flex flex-col jus items-center justify-start overflow-hidden w-full bg-gray-50 p-6 sm:py-12 gap-5">
                        {hiring.map((career, i) => (
                        <div key={i} className="bg-white shadow-xl shadow-gray-100 w-full max-w-6xl flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md">
                            <div>
                                <span className={`text-gray-400 text-sm`}>{career.category}</span>
                                <h3 className="font-bold mt-px">{career.position}</h3>
                                <div className="flex items-center gap-3 mt-2">
                                    <span className={`${career.color} rounded-full px-3 py-1 text-sm`}>{career.type}</span>
                                    <span className="text-body text-sm flex gap-1 items-center"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg> 
                                        { career.loc }
                                    </span>
                                </div>
                            </div>
                            <div>
                                <button>
                                    <a
                                        href='#'
                                        className="group flex items-center py-2 duration-300 transition-all ease-in-out text-primary"
                                    >
                                        <span className="group-hover:text-secondary">Apply now</span>
                                        <span className="left-0 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                </button>
                            </div>
                        </div>    
                        ))}
                        
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Careers