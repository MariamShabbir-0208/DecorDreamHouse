import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      
      <div className="bg-gray-100">
        {/* Header Section */}
        <div className="bg-white py-10">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Contact</h1>
            <p className="text-gray-500">
              <a href="/" className="text-gray-700">Home</a> &gt; Contact
            </p>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="container mx-auto py-10 px-4 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
            <p className="text-gray-500 mt-4">
              For more information about our services, please feel free to contact us.
              Our team will respond to you as soon as possible.
            </p>
          </div>

          <div className="flex flex-wrap -mx-4">
            {/* Left Section: Address, Phone, Working Time */}
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="bg-white shadow p-8">
                <h3 className="text-xl font-semibold mb-4">Address</h3>
                <p>123 Main Street, New York, NY 10001</p>
                <hr className="my-6" />

                <h3 className="text-xl font-semibold mb-4">Phone</h3>
                <p>Hotline: <a href="tel:+1-800-555-0199" className="text-blue-500">+1-800-555-0199</a></p>
                <p>Office: <a href="tel:+1-646-555-0199" className="text-blue-500">+1-646-555-0199</a></p>
                <hr className="my-6" />

                <h3 className="text-xl font-semibold mb-4">Working Time</h3>
                <p>Monday – Saturday: 9:00 AM – 5:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Right Section: Contact Form */}
            <div className="w-full lg:w-1/2 px-4">
              <form className="bg-white shadow p-8">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="example@example.com"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-3 rounded hover:bg-yellow-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
