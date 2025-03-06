import Image from 'next/image'
import IntroImg from "../../../assets/images/aboutintro.png"
import Vision from "../../../assets/images/icons/vision.png"
import Mission from "../../../assets/images/icons/mission.png"
import BackgroundImage from "../../../assets/images/aboutpattern.png"

export default function Intro() {
  return (
    <>
      <section
        className="bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 mt-14 mb-14">
          <div className="grid lg:grid-cols-2 items-center gap-8">
            <div className="max-h-[746px] max-w-[523px] mx-auto lg:mx-0 relative aspect-[523/746]">
              <Image
                src={IntroImg}
                alt="About Intro"
                fill
                className="object-cover object-center"
              />
            </div>
            <div>
              <div className="space-y-4 mb-8">
                <h2 className="font-sans3 text-primary leading-relaxed uppercase border-r-2 border-l-2 px-2 border-primary w-fit mx-0 font-normal text-lg md:text-xl">
                  <span className="text-secondary">0 1</span> PROPERLAND INTRO
                </h2>
                <h3 className="text-primary font-kufam text-3xl md:text-4xl font-bold">
                  Buying & Selling Property In An Easy Way
                </h3>
                <p className="text-link font-normal text-base md:text-xl">
                  Distinctively re-engineer revolutionary meta-services and
                  premium At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis praesentium voluptatum deleniti atque
                  corrupti quos dolores et quas molestias excepturi.
                </p>
              </div>
              <div className="bg-[#FFFFFF]  rounded-lg">
                <div className="flex flex-col md:flex-row items-start mb-6">
                  <div className="text-start">
                    <h2 className="text-xl text-primary font-kufam font-semibold mb-2">
                    Rewriting the Real Estate Rulebook
                    </h2>
                    <p className="font-sans3 text-base md:text-xl text-link font-normal">
                      Distinctively re-engineer revolutionary meta-services and
                      premium At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start">
                  <div className="text-start">
                    <h2 className="text-xl font-kufam text-primary font-semibold mb-2">
                    One Connected Community
                    </h2>
                    <p className="font-sans3 text-base md:text-xl text-link font-normal">
                      Distinctively re-engineer revolutionary meta-services and
                      premium At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="max-w-6xl mx-auto text-link" />
    </>
  )
}


