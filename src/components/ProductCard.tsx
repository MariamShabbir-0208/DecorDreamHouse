import Image from 'next/image';
import syltherine from "@/../public/images/syltherine.png";
import leviosa from "@/../public/images/leviosa.png";
import loltio from "@/../public/images/lolito.png";
import respira from "@/../public/images/respira.png";
import grifo from "@/../public/images/grifo.png";
import muggo from "@/../public/images/muggo.png";
import pingky from "@/../public/images/Asgaardsofa 3.png";
import asgaardsofa from "@/../public/images/Asgaardsofa 3.png";
import drawingroom from "@/../public/images/drawingroom.png";
import laung from "@/../public/images/laung.png";
import pctable from "@/../public/images/pctable.png"
import tableset from "@/../public/images/tableset.png";
import shielf from "@/../public/images/shielf.png";
import diningtable from "@/../public/images/diningtable.png"
import bedset from "@/../public/images/bedset.png";
export default function ProductCard() {
  return (
    <div className="py-12 bg-gray-50">
      {/* Section Heading */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={syltherine}
                alt="Syltherine"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Syltherine</h3>
              <p className="text-gray-600">$2500</p>
              <span className="text-sm font-medium text-green-600">30% OFF</span>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={leviosa}
                alt="Leviosa"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Loitto</h3>
              <p className="text-gray-600">$1000</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={loltio}
                alt="loltio"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Respiro</h3>
              <p className="text-gray-600">$7000</p>
              <span className="text-sm font-medium text-green-600">NEW</span>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={respira}
                alt="respira"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Pingky</h3>
              <p className="text-gray-600">$27000</p>
            </div>
          </div>

          {/* Product 5 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={grifo}
                alt="grifo"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Respiro</h3>
              <p className="text-gray-600">$2000</p>
              <span className="text-sm font-medium text-green-600">NEW</span>
            </div>
          </div>


            {/* Product 6*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={muggo}
                alt="muggo"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Muggo</h3>
              <p className="text-gray-600">$8000</p>
              <span className="text-sm font-medium text-green-600">NEW</span>
            </div>
          </div>


           {/* Product 7 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={pingky}
                alt="pingky"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Grifo</h3>
              <p className="text-gray-600">$7000</p>
              <span className="text-sm font-medium text-green-600">NEW</span>
            </div>
          </div>


             {/* Product 8 */}
           <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={asgaardsofa}
                alt="Asgaard sofa"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Muggo</h3>
              <p className="text-gray-600">$35000</p>
              <span className="text-sm font-medium text-green-600">NEW</span>
            </div>
          </div>

           {/* Product 9 */}
           <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={drawingroom}
                alt="drawingroom"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Respiro</h3>
              <p className="text-gray-600">$22000</p>
              <span className="text-sm font-medium text-green-600">NEW</span>
            </div>
          </div>


            {/* Product 10*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={laung}
                alt="muggo"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Muggo</h3>
              <p className="text-gray-600">$47000</p>
              <span className="text-sm font-medium text-green-600">NEW</span>
            </div>
          </div>

           {/* Product 11 */}
           <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={pctable}
                alt="grifo"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Respiro</h3>
              <p className="text-gray-600">$2000</p>
              <span className="text-sm font-medium text-green-600">NEW</span>
            </div>
          </div>


            {/* Product 12*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={muggo}
                alt="muggo"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Muggo</h3>
              <p className="text-gray-600">$4000</p>
              <span className="text-sm font-medium text-green-600">NEW</span>
            </div>
          </div>

           {/* Product 13*/}
           <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={bedset}
                alt="grifo"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Respiro</h3>
              <p className="text-gray-600">$77000</p>
              <span className="text-sm font-medium text-green-600">NEW</span>
            </div>
          </div>


            {/* Product 14*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={diningtable}
                alt="muggo"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Muggo</h3>
              <p className="text-gray-600">$47000</p>
              <span className="text-sm font-medium text-green-600">NEW</span>
            </div>
          </div>

           {/* Product 15 */}
           <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={tableset}
                alt="grifo"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Respiro</h3>
              <p className="text-gray-600">$37000</p>
              <span className="text-sm font-medium text-green-600">NEW</span>
            </div>
          </div>


            {/* Product 16*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={shielf}
                alt="muggo"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Muggo</h3>
              <p className="text-gray-600">$5000</p>
              <span className="text-sm font-medium text-green-600">NEW</span>
            </div>
          </div>
          <div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 text">
            Shop Now
          </button>
          </div>

 







        </div>
      </div>
    </div>
  );
}
