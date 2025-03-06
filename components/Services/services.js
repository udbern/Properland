
import Image from "next/image";
import M1 from "../../assets/images/icons/dollars.png";
import M2 from "../../assets/images/icons/handshake.png";
import M3 from "../../assets/images/icons/hand.png";
import M4 from "../../assets/images/icons/user.png";
import M5 from "../../assets/images/icons/call.png";

const serviceData = [
  {
    image: M1,
    title: "Rent a Home",
    description: "High level overviews. approaches overall value proposition. Organically grow the holistic world view of disruptive."
  },
  {
    image: M2,
    title: "Sale a Home",
    description: "Frameworks to provide a robust synopsis for high level overviews. approaches overall, Organically grow the holistic."
  },
  {
    image: M3,
    title: "Buy a Home",
    description: "Leverage agile frameworks to provide a robust synopsis for high level overviews. approaches overall value proposition."
  },
  {
    image: M4,
    title: "Experience Agent",
    description: "Leverage agile frameworks to provide a robust synopsis for high level overviews. approaches overall value proposition."
  },
  {
    image: M5,
    title: "Member Support",
    description: "Leverage agile frameworks to provide a robust synopsis for high level overviews. overall value proposition Organically grow holistic."
  }
];

export default function Services() {
  return (
    <section>
      <div className="max-w-6xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
        <div className="items-center mb-10">
          <h2 className="font-sans3 text-start md:text-center mb-5 uppercase text-primary leading-relaxed border-r-2 border-l-2 px-2 border-primary w-fit font-normal text-base sm:text-lg md:text-xl md:mx-auto">
            <span className="text-secondary">0 5</span> Services
          </h2>
          <p className="text-primary text-start md:text-center text-2xl sm:text-3xl lg:text-4xl font-bold font-kufam">
            See How We Can Help
          </p>

          <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
            {serviceData.map((items, index) => (
              <div key={index} className="w-full flex flex-col items-center justify-center p-4 sm:p-6">
                <div className="-mb-20">
                  <Image
                    src={items.image}
                    alt={items.title}
                    width={100}
                    height={100}
                    className=" object-contain object-center"
                  />
                </div>
                <div className="text-center ">
                  <h2 className="font-kufam text-primary text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                    {items.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-[#8D8D8D] font-normal font-sans3">
                    {items.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}