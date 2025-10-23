import BlogCard from "./BlogCard";
import { posts } from "../data/Posts";

export default function BlogList() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Latest Posts
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
