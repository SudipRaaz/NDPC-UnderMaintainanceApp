import Image from "next/image";
import React from "react";

const Card = () => {
  const heightandwidth = 100;
  return (
    <div className="card bg-primaryNdpc w-full shadow-2xl">
      <div className="card-body items-start ">
        <figure>
          <Image
            src="/whiteNdpc_logo.png"
            width={heightandwidth}
            height={heightandwidth}
            alt="NDPC logo"
            />
        </figure>
        <h2 className="card-title">Nepal Digital Payment Company</h2>

      </div>
    </div>
  );
};

export default Card;
