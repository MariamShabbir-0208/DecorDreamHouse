export default function FilterBar() {
    return (
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded mb-6">
        <button className="px-4 py-2 bg-white shadow rounded">Filter</button>
        <select className="border p-2 rounded">
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    );
  }
  