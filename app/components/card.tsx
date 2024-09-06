import Image from "next/image";
import React from "react";

const Card = () => {
  const heightandwidth = 100;
  return (
    <div className="card bg-primaryNdpc w-full shadow-2xl">
      <div className="card-body">
        <h2 className="card-title">Product of</h2>

        <figure>
          <Image
            src="/whiteNdpc_logo.png"
            width={heightandwidth}
            height={heightandwidth}
            alt="NDPC logo"
          />
        </figure>
      </div>
    </div>
  );
};

export default Card;
