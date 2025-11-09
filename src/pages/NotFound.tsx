import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-medium">Page not found</h2>
      <p className="text-muted-foreground text-center max-w-md">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <button className="py-2 px-4 text-white bg-primary/90 rounded-xl hover:bg-primary active:scale-95">
        <Link to="/">Go back to home</Link>
      </button>
    </div>
  );
}
