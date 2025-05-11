import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="bg-navy h-dvh w-screen flex items-center justify-center">
      <div className="text-center grid gap-2">
        <p className="font-bold text-beige text-2xl">Page Not Found</p>
        <button type="button" className="py-2 shadow-md text-beige rounded-sm">
          <Link href="/">Go Home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
