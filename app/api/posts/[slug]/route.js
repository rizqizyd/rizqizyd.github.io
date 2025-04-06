// app/api/posts/[slug]/route.js

import { getPostBySlug } from "../../../../utils/getPosts";

export async function GET(request, { params }) {
  const { slug } = params;

  // Fetch the post by its slug
  const post = getPostBySlug(slug);

  if (post) {
    return new Response(JSON.stringify(post), { status: 200 });
  } else {
    return new Response(JSON.stringify({ message: "Post not found" }), {
      status: 404,
    });
  }
}
