import Image from 'next/image'
import B1 from "../../../assets/images/B1.png"
import B2 from "../../../assets/images/B2.png"
import B3 from "../../../assets/images/B3.png"

export default function Process() {
  const processData = [
    {
      image: B1,
      number: "01",
      title: "Planning stage",
      description:
        "High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive.",
    },
    {
      image: B2,
      number: "02",
      title: "Development",
      description:
        "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users.",
    },
    {
      image: B3,
      number: "03",
      title: "New way of living",
      description:
        "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables.",
    },
  ]

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-0 mt-14 mb-14">
        <div className="space-y-10 flex justify-center items-start md:items-center flex-col">
          <h2 className="font-sans3 text-primary leading-relaxed uppercase  border-r-2 border-l-2 px-2  text-start md:text-center border-primary mx-0 font-normal text-lg md:text-xl">
            <span className="text-secondary">0 2</span> Process
          </h2>
          <p className="text-primary text-left lg:text-center capitalize text-xl sm:text-2xl lg:text-3xl font-bold font-kufam">
            our main focus
          </p>
        </div>

        <div className="mt-8 sm:mt-10">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-left lg:text-center mb-6">
              Statistics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {processData.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#FFF0E900] rounded-[5px] flex flex-col items-start justify-start p-4 sm:p-6 relative min-h-[300px]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-[5px] -z-10"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 md:h-[103px] md:w-[103px] rounded-full bg-[#FFBB50]">
                    <h1 className="font-kufam text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFFFFF]">
                      {item.number}
                    </h1>
                  </div>
                  <div className="mt-4">
                    <p className="text-lg sm:text-xl md:text-2xl capitalize font-kufam font-semibold text-primary">
                      {item.title}
                    </p>
                    <p className="text-sm sm:text-base md:text-xl font-sans3 font-normal text-link mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}