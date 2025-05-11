import BackButton from "../components/BackButton";
import "../styles/globals.css";

export const metadata = {
  title: "Notes",
  description: "Notes Page",
};

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center gap-2 bg-navy px-6 py-8 lg:px-32 lg:py-16">
        <BackButton />
        <h1 className="leading-none text-lg text-beige">How things work.</h1>
      </header>
      <main className="bg-beige px-6 py-8 lg:px-32 lg:py-16 h-full flex-grow">
        {children}
      </main>
    </div>
  );
}
