export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">BlogSpot</h1>
        <div className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Categories
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
