import Heading from "../components/Heading";

const content = {
    text: {
        subTitle: "Our Services",
        title: "What We Can Do For You",
        desc: "Take care of tedious tasks for yourself or your business with these professional virtual assistants. We provides a multitude of online services to businesses and entrepreneurs from a remote location.",
    },
    services: [
        {
            icon:'/service/socialmedia.webp',
            service:'Social Media Management',
            desc:'Administrative tasks to run your business efficiently including documentation, research, email and calendar management, MS Office ...'
        },
        {
            icon:'/service/digitalmarketing.webp',
            service:'Digital Marketing',
            desc:'Administrative tasks to run your business efficiently including documentation, research, email and calendar management, MS Office ...'
        },
        {
            icon:'/service/graphicdesign.webp',
            service:'Graphic Design',
            desc:'Administrative tasks to run your business efficiently including documentation, research, email and calendar management, MS Office ...'
        },
        {
            icon:'/service/dataentry.webp',
            service:'Data Entry',
            desc:'Administrative tasks to run your business efficiently including documentation, research, email and calendar management, MS Office ...'
        },
        {
            icon:'/service/creativewriting.webp',
            service:'Creative Writing',
            desc:'Administrative tasks to run your business efficiently including documentation, research, email and calendar management, MS Office ...'
        },
        {
            icon:'/service/admin.webp',
            service:'Admin/ Management',
            desc:'Administrative tasks to run your business efficiently including documentation, research, email and calendar management, MS Office ...'
        },
        {
            icon:'/service/developer.webp',
            service:'Developer',
            desc:'Administrative tasks to run your business efficiently including documentation, research, email and calendar management, MS Office ...'
        },
        {
            icon:'/service/bookkeeping.webp',
            service:'Bookkeeping',
            desc:'Administrative tasks to run your business efficiently including documentation, research, email and calendar management, MS Office ...'
        },
    ],
};

const Services = () => {
    return (
        <section className="py-6 bg-light overflow-x-hidden" id="services">

            <div className="container px-4 mx-auto">

                <div className="text-center">

                    <Heading text={content.text.subTitle} />
                    <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
                        {content.text.title}
                    </h2>
                    <p className="max-w-xl mx-auto mt-2 text-body text-base leading-relaxed">
                        {content.text.desc}
                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-10 mt-10">

                { content.services.map((serviceItem) => (
 
                    <div className="flex gap-4 items-center" key={serviceItem.service}>

                        <span className="bg-indigo-100 p-3 rounded-full drop-shadow-md">
                            <img src={serviceItem.icon} alt={serviceItem.service} className="w-16"/>
                        </span>

                        <div>
                            <h3 className="font-semibold text-xl text-primary">
                                {serviceItem.service}
                            </h3>
                            <p className="mt-1 text-body text-base leading-relaxed"> 
                                {serviceItem.desc}
                            </p>
                        </div>

                    </div>
                ))}
                </div>

            </div>
            
        </section>
    );
}

export default Services