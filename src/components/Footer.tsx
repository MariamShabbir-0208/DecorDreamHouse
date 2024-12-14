    export default function Footer() {
    return (
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-gray-800">Furniro.</h3>
              <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
              <p>© 2023 Furniro. All rights reserved.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Links</h3>
              <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Help</h3>
              <ul>
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Newsletter</h3>
              <input
                type="email"
                placeholder="Enter your email address"
                className="border border-gray-300 p-2 rounded w-full"
              />
              <button className="bg-yellow-600 text-white px-4 py-2 mt-2 rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  