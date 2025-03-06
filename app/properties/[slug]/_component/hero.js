

import HeroImg from "../../../../assets/images/details.png";


export default function Hero() {
  return (
    <div>
      <div
        className="min-h-[70vh] md:min-h-[70vh] bg-center bg-[#FFF0E9] flex items-center justify-start p-4 sm:p-6 md:p-8 lg:p-12"
        style={{
          backgroundImage: `url(${HeroImg.src})`,
          backgroundSize: "cover",
        }}
      >
        
      </div>
    </div>
  );
}
