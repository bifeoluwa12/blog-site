export default function Footer() {
  return (
    <footer className="bg-blue-300 text-white text-center py-6">
      <h3 className="text-xl font-semibold">BlogSpot</h3>
      <p className="text-sm">
        © {new Date().getFullYear()} BlogSpot. All rights reserved.
      </p>
      <p>Made with ❤️ by Babawale Ifeoluwa David using React + Tailwind</p>
    </footer>
  );
}
