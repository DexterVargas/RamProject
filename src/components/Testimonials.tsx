import Heading from './Heading'

const content = {
    text: {
        subTitle: "Testimonials",
        title: "What Our Happy Client Say",
        desc: "We place huge value on strong relationships and have seen the benefit they bring to our business. Customer feedback is vital in helping us to get it right.",
    },
    testimonials: [
        {
            img: "/image1.jpg",
            name: "Juan Luna",
            title: "Customer - Dallas, TX",
            testimony:
                "With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The system is user-friendly, and their customer support is fantastic!",
        },
        {
            img: "/image2.webp",
            name: "Diwata Pares",
            title: "Customer - Washington, DC",
            testimony:
                "With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The system is user-friendly, and their customer support is fantastic!",
        },
        {
            img: "/image8.webp",
            name: "Andres Bonifacio",
            title: "Customer - Manila, PH",
            testimony:
                "With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The system is user-friendly, and their customer support is fantastic!",
        },
    ]
}


function ChatBubbleIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
        </svg>
    );
}
const Testimonials = () => {
  return (
    <>
        <div className="py-16 text-body">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 items-center gap-8">
                    <div className="space-y-6 rounded-md p-6 max-w-xl max-md:mx-auto">
                    <div
                        className="w-16 h-16 hidden md:block bg-greenLight rounded-full"
                    />
                    { content.testimonials.map((testimonial, idx) => (

                        <div key={idx} className={`bg-white p-7 rounded-lg shadow-md w-full ${idx === 1 ? "p-6 relative lg:left-12" : ""}`}>
                            <div className="flex space-x-4 items-center mb-4">
                                <div className="relative">
                                    <img
                                        src={testimonial.img}
                                        alt={testimonial.name}
                                        width={100}
                                        height={100}
                                        className="object-cover h-14 w-14 rounded-full"
                                    />
                                    <span className="text-white absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                        <ChatBubbleIcon />
                                    </span>
                                </div>
                                <div className="leading-3">
                                    <strong className="block text-heading text-lg">{testimonial.name}</strong>
                                    <span className="text-sm">{testimonial.title}</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    &quot;
                                    {testimonial.testimony}
                                    &quot;
                                </p>
                            </div>
                        </div>

                    ))}
                    </div>
                    <div>
                        <Heading text={content.text.subTitle} />
                        <h2 className="max-w-lg text-heading text-2xl lg:text-4xl font-bold mb-5">{content.text.title}</h2>
                        <p className="mt-2 text-body text-base leading-relaxed">{content.text.desc}</p>
                        <div className="bg-yellowLight rounded-2xl rounded-br-[200px] w-52 h-32"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonials