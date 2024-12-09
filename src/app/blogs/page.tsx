import { Card } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: 'Blog - Mahesh Reddy',
  description: 'Technical articles and tutorials on web development, MERN stack, and modern web technologies.',
};

export default function BlogPage() {
  const posts = [
    {
      title: "Building SEO-Optimized Next.js Applications",
      excerpt: "Learn how to implement SEO best practices in your Next.js projects",
      date: "2024-03-20",
      slug: "seo-optimization-nextjs"
    },
    {
      title: "State Management with Recoil in React",
      excerpt: "A comprehensive guide to using Recoil for state management",
      date: "2024-03-15",
      slug: "recoil-state-management"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <Card key={post.slug} className="p-6">
            <article>
              <time className="text-sm text-muted-foreground">{post.date}</time>
              <h2 className="text-2xl font-semibold mt-2 mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted-foreground">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block mt-4 text-primary hover:underline"
              >
                Read more →
              </Link>
            </article>
          </Card>
        ))}
      </div>
    </div>
  );
}