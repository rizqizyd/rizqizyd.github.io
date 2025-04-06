import "../app/styles/globals.css";

export const metadata = {
  title: "Muhammad Rizqi Az Zayyad",
  description: "Main Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
