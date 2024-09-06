import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  const widthandheight = 400;
  return (
    <>
      <NavBar />

      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-700">
        {/* maintainance img */}
        <div className=" mb-8">
          {/* Replace the src with your SVG/GIF URL */}
          <Image
            src="underMaintaince.svg"
            width={widthandheight}
            height={widthandheight}
            alt="Under Maintenance Animation"
            className="object-contain animate-pulse"
          />
        </div>
        {/* we are under maintainance text */}
        <div className="px-3">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
            We&apos;re Under Maintenance
          </h1>
          <p className="text-lg mb-6">
            Our website is currently undergoing scheduled maintenance. Please
            check back later.
          </p>
          {/* divider */}

          <div className="divider"></div>
          {/*  Namaste Pay website*/}
          <h2>In the mean time, check our Product - Namaste Pay</h2>
          <div className="flex items-center justify-center space-x-4">
            <Link
              href="https://www.namastepay.com/"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-gray-600"
            >
              Visit Namastepay Website
            </Link>
            
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
