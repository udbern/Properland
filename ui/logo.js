import Logo from "../assets/images/logo/Logo.svg";
import Image from "next/image";

export default function logo() {
  return (
    <>
      <div className="h-6  md:h-10   ">
        <Image
          src={Logo}
          alt="logo.svg"
          className="object-cover object-center h-full w-full "
          width={100}
          height={100}
        />
      </div>
    </>
  );
}


