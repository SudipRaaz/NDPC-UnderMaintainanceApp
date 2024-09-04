import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <head>
        <title>Nepal Digital Payments Company</title>
      </head>

      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-700">
        <div className="w-72 h-72 mb-8">
          {/* Replace the src with your SVG/GIF URL */}
          <Image
            src="underMaintaince.svg"
            alt="Under Maintenance Animation"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>

        <div className="px-3">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
            We&apos;re Under Maintenance
          </h1>
          <p className="text-lg mb-6">
            Our website is currently undergoing scheduled maintenance. Please
            check back later.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Link
              href="https://www.namastepay.com/"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-gray-600"
            >
              Visit Namastepay Website
            </Link>
            <a
              href="mailto:support@namastepay.com"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-gray-600"
            >
              Contact Support
            </a>
          </div>

          <div className="flex gap-3 items-center justify-center mt-3">
            <a
              href="tel:16600150500"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Call Us (NTC)
            </a>
            <a
              href="tel:16600150500"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Call Us (NCELL)
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
