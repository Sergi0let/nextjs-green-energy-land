import { Container, Heading, SectionBlock, SubTitle } from "@/components";
import { getBlogPage } from "@/sanity/queries/page";
import { BlogPostType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {
  const data = await getBlogPage();

  return (
    <SectionBlock className="bg-secondary-950">
      <Container>
        <SubTitle subTitle="Our blog" />
        <div className="text-white">
          <Heading as="h1" className="leadingnone text-hero">
            Our Latest Posts
          </Heading>
          <p className="mt-24 max-w-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae odit qui explicabo voluptates, dignissimos, voluptatibus
            id, itaque adipisci iure praesentium incidunt cum nobis.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 space-y-4 md:mt-12 md:grid-cols-2">
          {data.map((post: BlogPostType, index: number) => {
            console.log(post);
            return (
              <div
                key={index}
                className="group flex cursor-pointer flex-col gap-8"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="aspect-video h-[360px] overflow-hidden rounded-3xl"
                >
                  <Image
                    src={post.mainImage ?? ""}
                    height={360}
                    width={360}
                    alt="Blog 1"
                    className="h-full w-full object-cover duration-300 ease-in-out group-hover:scale-110"
                  />
                </Link>
                <div className="flex flex-col justify-between">
                  <Link href={`/blog/${post.slug}`}>
                    <Heading
                      as="h3"
                      className="mb-4 text-sub-title leading-none text-white"
                    >
                      {post?.title}
                    </Heading>
                  </Link>
                  <p className="line-clamp-2 text-base text-neutral-400">
                    {post?.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src={post.authorImage ?? ""}
                      height={40}
                      width={40}
                      alt="Avatar Author"
                      className="h-[40px] rounded-full object-cover"
                    />
                    <span className="text-white">{post.name}</span>
                  </div>
                  <div className="text-white">{post.timeRead} min read</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"></div>
      </Container>
    </SectionBlock>
  );
}
