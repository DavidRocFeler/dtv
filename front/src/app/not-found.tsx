// app/not-found.tsx o app/404/page.tsx
export default function NotFound() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold">404</h1>
          <p className="text-xl mt-4">Page not found</p>
          <a href="/" className="mt-8 inline-block bg-blue-500 px-6 py-2 rounded-lg">
            Come back
          </a>
        </div>
      </div>
    );
  }