import Button from '../common/button';
import Heading from '../components/Heading';
import { pageTitle } from '../constants';

const content = {
    text: {
            heading: `Welcome to ${pageTitle.subTitle}`,
            subHeading: {'text1': 'Finally a,', 'text2':'Virtual Assistant','text3':'You can trust!'},
            description:
                "We are a marketing agency that focuses on strategy and design. We've got the right solution for your organization. Delegate your tedious daily task & 10x your productivity with virtual assistant today!",
    },
    images: {
            img1: "image2.webp",
            img2: "image12.webp",
            img3: "image6.webp",
            img4: "image14.webp",
            img5: "image15.webp",
    },
};


const Home = () => {
  return (
    <section data-section className="pt-6 " id='home'>

        <div className="container px-4 mx-auto">

            <div className="lg:flex justify-between items-center">

                <div className="lg:w-5/12 mb-10 lg:mb-0">
                    
                    {content.text.heading && <Heading text={content.text.heading} />}

                    {content.text.subHeading && (
                        <>
                            <h1 className='flex-1 text-4xl lg:text-5xl font-bold text-heading'>

                                { content.text.subHeading.text1 } 
                                <br className='sm:block hidden'/> 
                                {" "}

                                <span className="bg-gradient-to-r from-indigo-500 via-blue-300 to-indigo-500 text-nowrap text-transparent bg-clip-text font-['Caveat'] px-2">
                                    { content.text.subHeading.text2 }
                                </span> 
                                {" "}
                                
                            </h1>
                            <h1 className='text-4xl lg:text-5xl font-bold text-heading w-full mb-7'>
                                { content.text.subHeading.text3 }
                            </h1>
                        </>
                    )}

                    { content.text.description && 
                        <p className="leading-relaxed text-body mb-10">
                            { content.text.description}
                        </p>
                    }

                    <div className="flex space-x-3">
                        <Button variant="primary" text="Get Started" link='about'/>
                        <Button variant="secondary" text="How it works ?" link='howitworks'/>
                    </div>

                </div>

                <div className="lg:w-6/12 space-y-2 scale-75">

                    <div className="flex space-x-2 items-stretch">

                        <div className="w-8/12">

                            { content.images.img1 && (
                                <img
                                    src={content.images.img1}
                                    alt="img1"
                                    width={397}
                                    height={406}
                                    className="object-cover h-full w-full rounded-2xl "
                                />
                            )}

                        </div>

                        <div className="w-4/12 self-end space-y-2">

                            <div className="grid grid-cols-2 gap-2">

                                { content.images.img2 && (
                                    <img
                                        src={content.images.img2}
                                        alt="img2"
                                        width={437}
                                        height={437}
                                        className="object-cover h-full w-full rounded-2xl"
                                    />
                                )}
                                <div className="bg-yellowLight rounded-2xl rounded-tr-[200px] " />
                            </div>

                            { content.images.img3 && (
                                <img
                                    src={content.images.img3}
                                    alt="img3"
                                    width={374}
                                    height={392}
                                    className="object-cover h-full w-full rounded-2xl"
                                />
                            )}

                        </div> 

                    </div>

                    <div className="flex space-x-2">

                        <div className="w-4/12">

                            <div className="grid grid-cols-2 gap-2">

                                <div className="bg-greenLight rounded-2xl rounded-bl-[200px]"/>
                                { content.images.img4 && (
                                    <img
                                        src={content.images.img4}
                                        alt="img4"
                                        width={394}
                                        height={394}
                                        className="object-cover h-full w-full rounded-2xl"
                                    />
                                )}

                            </div>

                        </div>

                        <div className="w-5/12">

                            { content.images.img5 && (
                                <img
                                    src={content.images.img5}
                                    alt="img5"
                                    width={397}
                                    height={406}
                                    className="object-cover h-full w-full rounded-2xl"
                                />
                            )}

                        </div>

                    </div>

                </div>

            </div>

        </div>
        
    </section>
  );
}

export default Home