export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center px-4">
        <h1 className="text-7xl md:text-8xl font-light text-gray-900 mb-4">
          404
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-2">Page Not Found</p>
        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-md mx-auto">
          We couldn't find the page you're looking for. Let's get you back on
          track.
        </p>
        <a
          href="/"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium text-base md:text-lg"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
