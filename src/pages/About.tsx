import Heading from '../components/Heading'
import OurStories from '../components/OurStories'
import { pageTitle } from '../constants'
const content = {
    text: {
        subTitle: "About Us",
        title: {'text1': 'Smart', 'text2':'Business with','text3':'People', 'text4':'Ram Solutions'},
        desc: `, we're passionate about helping businesses unlock their full potential in the ever-evolving digital landscape. We're a team of experienced digital marketing specialists driven by a shared mission: to craft strategic campaigns that deliver real results.`,
    },
}
const About = () => {
  return (
    <section data-section className="text-body container max-md:max-w-md mx-auto px-4 py-6" id='about'>
        <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
            <div className="max-md:order-1 max-md:text-center z-50 relative">

                <Heading text={content.text.subTitle} />

                <h1 className='max-w-lg text-heading text-2xl lg:text-4xl font-bold mb-5'>
                    <span className="bg-gradient-to-r from-indigo-500 via-blue-300 to-indigo-500 text-nowrap text-transparent bg-clip-text font-['Caveat'] px-2 text-5xl">
                        {content.text.title.text1}
                    </span> {" "}
                        {content.text.title.text2}
                    <span className="bg-gradient-to-r from-indigo-500 via-blue-300 to-indigo-500 text-nowrap text-transparent bg-clip-text font-['Caveat'] px-2 text-5xl">
                        {content.text.title.text1}
                    </span> {" "}
                    {content.text.title.text3}
                </h1>

                <p className="mt-6 text-body leading-relaxed">At{' '} 
                    <span className="font-['Caveat'] text-primary text-2xl font-semibold">{pageTitle.title}</span>
                    {content.text.desc}
                </p>

                <div className="mt-10 text-body">
                    <div className="grid sm:grid-cols-3 gap-4 items-center">
                        <div className="flex flex-col items-center text-center">
                            <h5 className="font-bold text-xl mb-1">10+</h5>
                            <p>Years Experience</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <h5 className="font-bold text-xl mb-1">123</h5>
                            <p>Finished Projects</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <h5 className="font-bold text-xl mb-1">250</h5>
                            <p>Business Partners</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-row w-5/6'>
                <div className="relative sm:h-[400px] sm:w-[400px] max-md:before:hidden before:absolute before:bg-yellowLight before:h-[110%] before:w-[120%] before:right-0 before:z-0 before:shadow-md mx-auto">
                    
                    <img src="/image13.webp" className="rounded-3xl lg:w-4/5 z-10 relative" alt="about us" />
                    
                </div>
                <div className='flex flex-col justify-between'>
                   <div className="bg-greenLight rounded-2xl rounded-bl-[200px] w-16 h-16 hidden md:block mb-6" /> 
                   <div className="bg-purpleLight rounded-full w-16 h-16 hidden md:block mb-6" />
                </div>
                 
            </div>
        </div>

        
        <OurStories/>

    
    </section>
  )
}

export default About