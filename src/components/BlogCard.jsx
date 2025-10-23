export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-5">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-56 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
      <p className="text-sm text-gray-500 mb-3">{post.category} • {post.date}</p>
      <p className="text-gray-600 mb-4">
        {post.content.substring(0, 100)}...
      </p>
      <a href="#" className="text-blue-600 font-semibold hover:underline">
        Read More →
      </a>
    </div>
  );
}
