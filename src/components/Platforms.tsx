const contents = [
    {
      id: "upwork",
      logo: '/platform/upwork.webp',
      link: 'https://www.upwork.com/'
    },
    {
      id: "bossjobs",
      logo: '/platform/bossjobs.webp',
      link: 'https://bossjob.ph/'
    },
    {
      id: "freelancer",
      logo: '/platform/freelancer.webp',
      link: 'https://www.freelancer.com/'
    },
    {
      id: "onlinejobsph",
      logo: '/platform/onlinejobsph.webp',
      link: 'https://www.onlinejobs.ph/'
    },
    {
      id: "VirtualCoworker",
      logo: '/platform/VirtualCoworker.webp',
      link: 'https://virtualcoworker.com.ph/'
    },
  ];

const style = "flex justify-center items-center";
const Platforms = () => {
  return (
    <section className={`${style} my-4`}>
      <div className={`${style} flex-wrap container px-4 mx-auto`}>
        {contents.map((content) => (
          <div key={content.id} className={`flex-1 ${style} sm:min-w-[192px] min-w-[120px]`}>
            <a href={content.link} target="_blank" title={`Explore virtual assistant solutions at ${content.id}`}>
              <img
                src={content.logo}
                alt='content'
                className='sm:w-[192px] w-[100px] object-contain transition duration-300 ease-in-out hover:scale-110'
              />
            </a>
                       
          </div>
        ))}
      </div>
    </section>
  )
}

export default Platforms
