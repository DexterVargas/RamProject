import Button from '../common/button';

const Cta = () => {
    return (
        <section className={`flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col rounded-[20px] box-shadow border shadow-md container mx-auto bg-gradient-to-r from-greenLight to-secondary`}>
            <div className='flex-1 flex flex-col'>
                <h2 className='font-semibold xs:text-[48px] text-[40px] text-heading xs:leading-[76.8px] leading-[66.8px] w-full'>Let's try our service now!</h2>
                <p className={`font-normal font-['Caveat'] text-primary text-[18px] leading-[30.8px] max-w-[600px] mt-5`}>
                    Amazing clients have allowed us to produce work we are proud of.
                </p>
            </div>
            <div className={`flex justify-center items-center sm:ml-10 ml-0`}>
                <Button variant="primary" text="Get Started" link='howitworks' />
            </div>

        </section>
    )
  }
  
export default Cta