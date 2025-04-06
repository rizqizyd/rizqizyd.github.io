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
      <header className="bg-navy px-6 py-8 lg:px-32 lg:py-16">
        <h1 className="text-lg text-beige">How things work.</h1>
      </header>
      <main className="bg-beige px-6 py-8 lg:px-32 lg:py-16 h-full flex-grow">
        {children}
      </main>
    </div>
  );
}
