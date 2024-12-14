import PropTypes from "prop-types";
import Image from "next/image";
import abovefooter from "@/../public/images/abovefooter.png"

const FurnitureGallery = ({  }) => {
  return (
    <section className="py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-lg font-bold text-gray-500 uppercase tracking-wide">
          Share your setup with
        </h2>
        <h3 className="text-3xl font-extrabold text-gray-800">
          #FuniroFurniture
        </h3>
      </div>

      {/* Image Section */}
      <Image src={abovefooter} alt="furnitures" width={1799} height={721}/>



          </section>
  );
};



export default FurnitureGallery;