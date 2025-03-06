import Image from 'next/image'
import HeroImg from '../../../assets/images/servicebg.png'
import House from '../../../assets/images/tiny.png'

export default function Hero() {
  return (
    <div>
      <div 
        className="min-h-[70vh]  bg-center  bg-[#FFF0E9] flex items-center justify-start p-4 sm:p-6 md:p-8 lg:p-12 relative"
      >
        <Image
          src={HeroImg}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        
        <div className="max-w-[609px] w-full mx-auto md:mt-32 lg:ml-24 relative z-10">
          <div className="p-1 mb-5  px-5 bg-gradient-to-r w-fit   to-[#FFB28D] from-[#F3D1C1] ">
            <div className="flex items-center space-x-4">
              <Image
                src={House}
                alt="tiny-house"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="font-kufam text-link uppercase text-base sm:text-lg md:text-xl font-normal">
                services
              </span>
            </div>
          </div>
          
          <div className="text-center lg:text-left">
            <h3 className="text-primary font-kufam  capitalize font-[700] text-start text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight">
              we're leading land market
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

