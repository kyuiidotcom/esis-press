import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main style={{ padding: 40 }}>
      <h1>ESIS PRESS</h1>

      {posts.map((post) => (
        <div key={post.slug}>
          <Link href={`/posts/${post.slug}`}>
            <h2>{post.slug}</h2>
          </Link>
        </div>
      ))}
    </main>
  );
}
