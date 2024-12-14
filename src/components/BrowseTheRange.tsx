import Image from 'next/image';
import dining from "@/../public/images/dining.png"
import living from "@/../public/images/living.png"
import bedroom from "@/../public/images/bedroom.png"

export default function BrowseTheRange() {
  return (
    <div className="py-16 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Browse The Range</h2>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Image Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-20">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src={dining}
            alt="Dining"
            width={782.12}
            height={521}
            className="w-full h-auto object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="font-bold text-lg">Dining</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src={living} 
            alt="Living"
            width={782.12}
            height={521}
            className="w-full h-auto object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="font-bold text-lg">Living</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src={bedroom}
            alt="Bedroom"
            width={782.12}
            height={521}
            className="w-full h-auto object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="font-bold text-lg">Bedroom</h3>
          </div>
        </div>
      </div>
    </div>
  );
}