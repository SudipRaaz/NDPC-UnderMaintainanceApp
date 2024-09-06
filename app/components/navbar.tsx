import Image from "next/image";

const NavBar = () => {
  return (
    <div className="navbar bg-primaryNdpc">
        <Image
          src="/whiteNdpc_logo.png"
          alt="NDPC logo"
          width={80}
          height={20}
          className="w-auto h-auto ml-3"
        ></Image>
      <p className="flex-1 justify-center items-center">
        <label className="text-xl">Nepal Digital Payment Company Ltd</label>
      </p>
    </div>
  );
};

export default NavBar;
