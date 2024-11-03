import { Heading, SubTitle } from "@/components";
import { getBlogPage } from "@/sanity/queries/page";
import { BlogPostType } from "@/types/types";
import Link from "next/link";
import { BlogItem } from "./BlogItem";

async function Blog() {
  const data = await getBlogPage();

  return (
    <section className="bg-secondary-950 py-48">
      <div className="container">
        <SubTitle subTitle="Blog" />

        <div>
          <div className="flex w-full items-center justify-between">
            <Heading
              as="h2"
              animate
              className="text-features leading-none text-white"
            >
              Blog
            </Heading>
            <Link
              href={"/blog"}
              className="rounded-full border px-6 py-3 text-white"
            >
              View All
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-24 md:grid-cols-2">
            {data.map((post: BlogPostType, index: number) => (
              <BlogItem key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export { Blog };
