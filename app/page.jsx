import Link from "next/link";

export default function Home() {
  return (
    <main className="about-me">
      <div className="details">
        <h2>
          I&apos;m{" "}
          <span className="bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text">
            Muhammad Rizqi Az,
          </span>{" "}
        </h2>
        <h2>Frontend Engineer</h2>
        <p className="mt-5">
          Enjoy writing a few lines of code and enthusiastic about technology.
        </p>
        <div className="socials flex gap-3 mt-6">
          <img src="/linkedin.webp" alt="" />
          <img src="/github.png" alt="" />
          <Link href="/portfolio">See More</Link>
        </div>
      </div>
    </main>
  );
}
