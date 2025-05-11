import "./styles/globals.css";

export const metadata = {
  title: {
    default: "Muhammad Rizqi Az Zayyad",
    template: "Muhammad Rizqi Az Zayyad - %s",
  },
  description: "Main Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
