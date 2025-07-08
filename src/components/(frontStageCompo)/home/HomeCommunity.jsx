import Image from "next/image";

const parallexData = [
  {
    title: 'Community',
    subtitle: 'find your comfort zone',
    image: '/chatting.jpg',
    parallaxClass: 'home_community_parallax1'
  },
  {
    title: 'Partner',
    subtitle: 'with us',
    image: '/parallex2.jpg',
    parallaxClass: 'home_community_parallax2'
  },
  {
    title: 'Share',
    subtitle: 'your story',
    image: '/parallex3.jpg',
    parallaxClass: 'home_community_parallax3'
  },
];

const HomeCommunity = () => {
  return (
    <>
      {/* <div className="banner">
        <Image src="/chatting.jpg" alt="People Chatting" fill />
      </div> */}
      
      {parallexData.map((item, idx) => (
        <div
          key={idx}
          className={`parallax_container parallax_position ${item.parallaxClass}
            after:content-['']
            after:absolute
            after:top-20
            after:left-0
            after:w-full
            after:h-[calc(100vh-160px)]
            after:bg-black/50
            after:z-5`}
        >
          <div 
            className={`parallax_position ${item.parallaxClass}
              w-full
              h-[80px]
              absolute
              top-0
              left-0
              z-100
              after:content-['']
              after:absolute
              after:top-0
              after:left-0
              after:w-full
              after:h-full
              after:bg-black/50
              after:z-100`}
          />
          <h2 className="parallax_title">
            {item.title}
            <span>{item.subtitle}</span>
          </h2>
          <div 
            className={`parallax_position ${item.parallaxClass}
              w-full
              h-[80px]
              absolute
              bottom-0
              left-0
              z-100
              after:content-['']
              after:absolute
              after:top-0
              after:left-0
              after:w-full
              after:h-full
              after:bg-black/50
              after:z-100`}
          />
        </div>
      ))}
    </>
  )
}

export default HomeCommunity;