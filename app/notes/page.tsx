import Link from "next/link";
import { getAllPosts } from "../../utils/getPosts";

type Post = {
  slug: string;
  content: string;
};

type ParsedPost = {
  title: string;
  description: string;
  slug: string;
  content: string;
};

export default function Blog() {
  const posts: Post[] = getAllPosts();

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {posts.map(post => {
        const parsedPost = post as ParsedPost;
        return (
          <Link href={`/notes/${post.slug}`} key={post.slug}>
            <li className="border border-navy bg-navy py-5 px-6 rounded">
              <h2 className="text-base mb-2 text-beige">{parsedPost.title}</h2>
              <p className="text-sm text-beige-light">
                {parsedPost.description}
              </p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
