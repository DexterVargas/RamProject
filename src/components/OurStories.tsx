import { pageTitle } from '../constants'
import Heading from './Heading'

const content = {
    text: {
        subTitle: "Our Story",
        title: `Grow with ${pageTitle.title}: Sustainable Solutions for your business.`,
        desc: `Your one-stop shop for virtual content creation assistants.
        Our team of skilled and experienced professionals is passionate about crafting compelling content that tells your brand story and achieves your marketing goals.`,
    },
    whatwedo: {
        desc: `We offer a comprehensive suite of digital marketing services designed to meet your unique business goals. From [list a few key services, e.g., SEO, social media marketing, pay-per-click advertising] to [mention broader services, e.g., content marketing, email marketing automation], we have the expertise to help you:`,
        data:[
            'Increase brand awareness and website traffic',
            'Generate qualified leads and convert them into customers',
            'Build stronger customer relationships and loyalty',
            'Drive measurable results and maximize your return on investment (ROI)',
        ]
    },
    whatset: {
        desc: `Our VAs are skilled in various content formats, from blog posts and website copy to social media content and even creative writing. We can adapt to your workload,
        providing ongoing content creation support or tackling specific projects.`,
        data:[
            `We take a data-driven approach, analyzing results to continuously optimize your campaigns.`,
            `Our team is comprised of passionate and creative individuals who stay ahead of the latest digital marketing trends.`,
            `We prioritize clear communication and collaboration, ensuring you're always in the loop.`,
            `We offer flexible, transparent pricing plans to suit your budget.`,
        ]
    },
    whatyoucangain: [
        'More time to focus on what matters most to you.',
        'A consistent flow of fresh, engaging content.',
        'A team of experts who understand content marketing.',
        'The freedom to scale your content creation efforts as needed.',
    ]
}

const OurStories = () => {
  return (
    

<div className="container mt-24 mx-auto md:px-6 rounded-lg border border-gray-200">

    <div className="flex w-full flex-col items-center justify-center border-b-2 border-gray-200 p-8 mb-6">    
        <div>      
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current text-primary" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M0 3.75A.75.75 0 01.75 3h7.497c1.566 0 2.945.8 3.751 2.014A4.496 4.496 0 0115.75 3h7.5a.75.75 0 01.75.75v15.063a.75.75 0 01-.755.75l-7.682-.052a3 3 0 00-2.142.878l-.89.891a.75.75 0 01-1.061 0l-.902-.901a3 3 0 00-2.121-.879H.75a.75.75 0 01-.75-.75v-15zm11.247 3.747a3 3 0 00-3-2.997H1.5V18h6.947a4.5 4.5 0 012.803.98l-.003-11.483zm1.503 11.485V7.5a3 3 0 013-3h6.75v13.558l-6.927-.047a4.5 4.5 0 00-2.823.971z"></path></svg>    
        </div>    
        <div className="mt-8 text-center">      
            <Heading text={content.text.subTitle} /> 
            <p className="text-2xl lg:text-4xl mx-auto lg:w-1/2 text-heading">
            {content.text.title}
            </p>    
            <p className="mt-2 text-body text-base leading-relaxed mx-auto lg:w-1/2">{content.text.desc}</p>
        </div>     
    </div>
  <section className="mb-6">

    <div className='flex w-full flex-col items-center justify-center mb-16'>      
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>
    </div>

    <div className="mb-16 flex flex-wrap px-4">
        <div className="mb-6 hidden sm:flex justify-center items-center lg:mb-0 lg:w-6/12 lg:pr-6 mx-auto">
            <img src="/image2.jpg" className="rounded-3xl object-contain z-50 shadow-md" alt="about us" />
        </div>

        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
            <Heading text='What We Do' />
            <p className="mb-6 text-body text-base leading-relaxed">
                {content.whatwedo.desc}
            </p>
            <ul className="mt-6 space-y-4">
                { content.whatwedo.data.map((list, i)=>(
                <li key={i} className="flex items-center text-base leading-relaxed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" className="shrink-0 mr-3 fill-green-500" viewBox="0 0 24 24">
                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    { list }
                </li> 
                )) }
            </ul>
        </div>
    </div>
    <div className="mb-16 flex flex-wrap px-4">
        
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
            <Heading text='What Sets Us Apart' />
            <p className="mb-6 text-body text-base leading-relaxed">
                {content.whatset.desc}
            </p>
            <ul className="mt-6 space-y-4">
                { content.whatset.data.map((list, i)=>(
                <li key={i} className="flex items-center text-base leading-relaxed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" className="shrink-0 mr-3 fill-green-500" viewBox="0 0 24 24">
                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    { list }
                </li> 
                )) }
            </ul>
        </div>
        <div className="mb-6 hidden sm:flex justify-center items-center lg:mb-0 lg:w-6/12 lg:pr-6 mx-auto">
            <img src="/image3.webp" className="rounded-3xl object-contain z-50 shadow-md" alt="about us" />
        </div>
    </div>
  </section>

  <div className="flex w-full flex-col items-center justify-center border-t-2 border-gray-200 p-8 mb-6">    
        <div>      
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
        </div>    
        <div className="mt-8 text-center">      
            <Heading text='How can this benefit you?' /> 
            <p className="mb-6 text-body text-base leading-relaxed">
                By partnering with {pageTitle.title}, you'll gain:
            </p>    
            <ul className="mt-6 space-y-4">
                { content.whatyoucangain.map((list, i)=>(
                <li key={i} className="flex items-center justify-center text-base leading-relaxed">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="shrink-0 w-8 h-8 mr-2 text-red-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    { list }
                </li> 
                )) }
            </ul>
        </div>     
    </div>

</div>

    
  )
}

export default OurStories