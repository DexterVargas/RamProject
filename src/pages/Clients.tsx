import Heading from "../components/Heading"
import Testimonials from "../components/Testimonials";

const content = {
    text: {
        subTitle: "Our Awesome Clients",
        title: "We Built Best Solutions For Your Company",
        desc: "Our clients trust us to transform their knowledge and insight into solutions that engage, expand, and educate their audiences. From startups to high-growth firms, small to big enterprise companies, we’ve worked with them all.",
    },
    list: ['Trusted by teams around the world', 'Collaborate with like-minded individuals', 'Seamless collaboration and communication', 'Transform your visions into reality'],
    clients: [
        {
            id: "logo",
            logo: '/client/logo/logo(1).png',
        },
        {
            id: "logo",
            logo: '/client/logo/logo(2).png',
        },
        {
            id: "logo",
            logo: '/client/logo/logo(3).png',
        },
        {
            id: "logo",
            logo: '/client/logo/logo(4).png',
        },
        {
            id: "logo",
            logo: '/client/logo/logo(5).png',
        },
        {
            id: "logo",
            logo: '/client/logo/logo(6).png',
        },
        {
            id: "logo",
            logo: '/client/logo/logo(7).png',
        },
        {
            id: "logo",
            logo: '/client/logo/logo(8).png',
        },
        {
            id: "logo",
            logo: '/client/logo/logo(9).png',
        },
        {
            id: "logo",
            logo: '/client/logo/logo(10).png',
        },
        {
            id: "logo",
            logo: '/client/logo/logo(11).png',
        },
        {
            id: "logo",
            logo: '/client/logo/logo(12).png',
        },
        {
            id: "logo",
            logo: '/client/logo/logo(13).png',
        },
        {
            id: "logo",
            logo: '/client/logo/logo(14).png',
        },
        {
            id: "logo",
            logo: '/client/logo/logo(15).png',
        },
        {
            id: "logo",
            logo: '/client/logo/logo(16).png',
        },
        {
            id: "logo",
            logo: 'https://readymadeui.com/pinterest-logo.svg',
        },
        {
            id: "logo",
            logo: 'https://readymadeui.com/facebook-logo.svg',
        },
      ]
}

const style = "flex justify-center items-center";

const Clients = () => {
  return (
    <>
    <section className="py-6 bg-light overflow-x-hidden px-4" id="client">
        <div className="container max-md:max-w-md mx-auto ">    
            <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
                <div className="max-md:order-1 max-md:text-center">
                    <Heading text={content.text.subTitle} />
                    <h2 className="max-w-lg text-heading text-2xl lg:text-4xl font-bold mb-5">{content.text.title}</h2>
                    <p className="mt-2 text-body text-base leading-relaxed">{content.text.desc}</p>
                    <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-6 mt-12">
                        { content.list.map((item,i) => (
                            <div className="flex items-center" key={`item${i}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                </svg>
                                <h6 className="line-clamp-1 sm:line-clamp-none ml-4 text-primary text-left">
                                    { item }
                                </h6>
                            </div> 
                        )) }
                        
                    </div>
                </div>
                <div className="">
                        <div className="md:flex w-full space-x-0 md:space-x-6 items-end">
                            <div className="md:w-6/12 mb-6 md:mb-0 space-y-6">

                                <img src="/client/image-1.webp" className="rounded-2xl drop-shadow-[0_5px_5px_rgba(93,96,127,0.2)] object-cover w-full mb-6" alt="google-logo" />    

                                <img src="/client/image1.png" className="rounded-2xl drop-shadow-[0_5px_5px_rgba(93,96,127,0.2)] object-cover w-0 md:w-full" alt="google-logo" />   

                            </div>
                            <div className="md:w-6/12">
                                <div>
                                    <div
                                        className="w-16 h-16 hidden md:block bg-greenLight rounded-full mb-6" 
                                    />
                                        
                                        <img src="/client/image4.png" className="rounded-2xl drop-shadow-[0_5px_5px_rgba(93,96,127,0.2)] object-cover w-0 md:w-full mb-6" alt="google-logo" />
                                        
                                    <div className="bg-purpleLight hidden md:inline-block w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]" />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={`${style} flex-wrap w-full`}>
                {content.clients.map((client, i) => (
                <div key={`${client.id}-${i}`} className={`flex-1 ${style} sm:min-w-[182px] min-w-[110px]`}>
                    <img
                    src={client.logo}
                    alt='client'
                    className='w-14 sm:w-24 object-contain'
                    />           
                </div>
                ))}
            </div>
        </div>
        <Testimonials/>
    </section>
    </>
  )
}

export default Clients