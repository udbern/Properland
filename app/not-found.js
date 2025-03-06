import House from "../assets/images/tiny.png";
import Image from "next/image";
import HeroImg from "../public/notbg.png";
import Not from "../public/notfound.png";
import Link from "next/link";
import { ArrowRightCircleIcon} from "@heroicons/react/24/solid";

export default function NotFound() {
    return (
        <div>
            <div className="bg-center bg-gradient-to-r to-[#EEC1AC] from-[#FFF6F2] flex items-center p-4 sm:p-6 "
                style={{
                    backgroundImage: `url(${HeroImg.src})`,
                    backgroundSize: "cover",
                }}>
                <div className="flex min-h-screen sm:min-h-[90vh] md:min-h-[100vh] max-w-[609px] w-full mt-35 md:mt-17  mx-auto">
                    <div className="flex flex-col items-center mt-6 sm:mt-10 text-center w-full">
                        <div className="flex items-center border justify-center bg-gradient-to-r to-[#FFB28D]  px-4 from-[#F3D1C1]  ">
                            <div>
                            <Image
                                src={House}
                                alt="tiny-house"
                                width={50}
                                height={50}
                                className="object-contain sm:w-6 sm:h-6"
                            />
                            </div>
                            <span className="font-kufam h-full w-full  flex items-center justify-center  text-link uppercase text-sm sm:text-base md:text-lg lg:text-xl font-normal">
                                <p className="font-kufam text-3xl ">404</p>
                            </span>
                        </div>

                        <h1 className="text-primary font-kufam font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[6rem] leading-tight">
                            Error
                        </h1>
                        <Image
                            src={Not}
                            alt="404 error illustration"
                            width={300}
                            height={300}
                            className="object-cover my-4 sm:my-6 w-[250px] sm:w-[300px] md:w-[400px]"
                        />
                        <div className="max-w-lg mx-auto mb-6 sm:mb-8 px-4">
                            <p className="font-kufam text-link uppercase text-sm sm:text-base md:text-lg lg:text-xl font-normal mb-3 sm:mb-4">
                                Page Not Found
                            </p>
                            <p className="font-kufam text-link text-sm sm:text-base font-normal">
                                The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
                            </p>
                        </div>

                        <Link href="/" className="bg-white flex items-center text-primary font-kufam  capitalize px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-opacity-90 transition-all">
                            Go to home
                            <span className="ml-4">
                                <ArrowRightCircleIcon className="h-6 w-6 text-[#FFBB50]  " />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}