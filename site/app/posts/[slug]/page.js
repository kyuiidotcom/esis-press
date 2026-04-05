import { getAllPosts } from "../../../lib/posts";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default function PostPage({ params }) {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);

  return (
    <main style={{ padding: 40 }}>
      <h1>{post.slug}</h1>
      <div>{post.content}</div>
    </main>
  );
}
