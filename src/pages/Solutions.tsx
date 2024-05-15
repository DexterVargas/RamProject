import Heading from "../components/Heading";

const content = {
    text: {
        subTitle: "Our Solutions",
        title: "What We Can Do For You",
        desc: "Take care of tedious tasks for yourself or your business with these professional virtual assistants. We provides a multitude of online services to businesses and entrepreneurs from a remote location.",
    },
    solutions: [
        {
            icon:'/solution/socialmedia.webp',
            service:'Social Media Management',
            desc:'Administrative tasks to run your business efficiently including documentation, research, email and calendar management, MS Office ...'
        },
        {
            icon:'/solution/digitalmarketing.webp',
            service:'Digital Marketing',
            desc:'Administrative tasks to run your business efficiently including documentation, research, email and calendar management, MS Office ...'
        },
        {
            icon:'/solution/graphicdesign.webp',
            service:'Graphic Design',
            desc:'Administrative tasks to run your business efficiently including documentation, research, email and calendar management, MS Office ...'
        },
        {
            icon:'/solution/dataentry.webp',
            service:'Data Entry',
            desc:'Administrative tasks to run your business efficiently including documentation, research, email and calendar management, MS Office ...'
        },
        {
            icon:'/solution/creativewriting.webp',
            service:'Creative Writing',
            desc:'Administrative tasks to run your business efficiently including documentation, research, email and calendar management, MS Office ...'
        },
        {
            icon:'/solution/admin.webp',
            service:'Admin/ Management',
            desc:'Administrative tasks to run your business efficiently including documentation, research, email and calendar management, MS Office ...'
        },
        {
            icon:'/solution/developer.webp',
            service:'Developer',
            desc:'Administrative tasks to run your business efficiently including documentation, research, email and calendar management, MS Office ...'
        },
        {
            icon:'/solution/bookkeeping.webp',
            service:'Bookkeeping',
            desc:'Administrative tasks to run your business efficiently including documentation, research, email and calendar management, MS Office ...'
        },
    ],
};

const Solutions = () => {
    return (
        <section className="py-32 bg-light overflow-x-hidden">
            <div className="container px-4 mx-auto">
                {/* <div className="lg:flex space-x-2 justify-between">
                    <div className="lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:content-[''] before:absolute before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:-top-20 before:bg-white before:-bottom-20">
                        <div className="flex gap-2">
                            <div className="flex flex-col space-y-2">
                                <div>
                                    <img
                                        src={content.images.img1}
                                        alt="img1"
                                        width={626}
                                        height={640}
                                        className="object-cover h-full w-full rounded-lg"
                                    />
                                </div>

                                <div className="flex justify-end gap-2">
                                    <div className="w-6/12 flex">
                                        <div className="ml-auto">
                                            <div className="bg-greenLight w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px] aos-init aos-animate" />
                                        </div>
                                    </div>
                                    <div className="w-6/12">
                                        <img
                                            src={content.images.img2}
                                            alt="img2"
                                            width={626}
                                            height={640}
                                            className="object-cover h-full w-full rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto">
                                <div className="flex flex-col gap-2">
                                    <div>
                                        <div className="bg-purpleLight w-10 h-10 lg:w-20 lg:h-20 rounded-2xl rounded-tr-[200px] aos-init aos-animate"></div>
                                    </div>
                                    <div>
                                        <img
                                            src={content.images.img3}
                                            alt="img3"
                                            width={626}
                                            height={640}
                                            className="object-cover h-full w-full rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <div className="p-4 lg:p-10 shadow-2xl rounded-lg bg-white w-full leading-5">
                                            <strong className="block font-bold text-primary text-xl lg:text-5xl">{content.experience.year}</strong>
                                            <span>{content.experience.label}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-4/12 relative z-10">
                        <Heading text={content.text.subTitle} />
                        <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">{content.text.title}</h2>
                        <p className="text-body text-relaxed mb-10">{content.text.desc}</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 md:gap-5 mb-10">
                            {content.features.map((feature, idx) => (
                                <li key={idx} className="flex flex-grow items-center space-x-5">
                                    <span className="items-center w-7 h-7 rounded-full bg-primary flex items-cetner justify-center text-white">
                                        <CheckIcon />
                                    </span>
                                    <span className="text-body">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-3 aos-init aos-animate">
                            <Button text="Get Started" variant="primary" />
                            <Button text="Learn more" variant="secondary" />
                        </div>
                    </div>
                </div> */}







                <div className="text-center">
                    <Heading text={content.text.subTitle} />
                    <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">{content.text.title}</h2>
                    <p className="max-w-xl mx-auto mt-2 text-body">{content.text.desc}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 mt-10">
                { content.solutions.map((solution) => (

                
                    <div className="flex gap-4 items-start">
                        <span className="bg-indigo-100 p-3 rounded-full drop-shadow-md">
                            <img src={solution.icon} alt={solution.service} className="w-16"/>
                        </span>
                        <div>
                            <h3 className="font-semibold text-xl text-primary">{solution.service}</h3>
                            <p className="mt-1 text-body"> {solution.desc}</p>
                        </div>
                    </div>
                ))}

                </div>
            </div>
            
        </section>
    );
}

export default Solutions