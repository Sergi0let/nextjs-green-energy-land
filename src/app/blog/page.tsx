import {
  BlogItem,
  Container,
  Heading,
  SectionBlock,
  SubTitle,
} from "@/components";
import { getBlogPage } from "@/sanity/queries/page";
import { BlogPostType } from "@/types/types";

export default async function BlogPage() {
  const data = await getBlogPage();

  return (
    <SectionBlock className="bg-secondary-950">
      <Container>
        <SubTitle subTitle="Our blog" />
        <div className="text-white">
          <Heading animate as="h1" className="leadingnone text-hero">
            Our Latest Posts
          </Heading>
          <p className="mt-24 max-w-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae odit qui explicabo voluptates, dignissimos, voluptatibus
            id, itaque adipisci iure praesentium incidunt cum nobis.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 space-y-4 md:mt-12 md:grid-cols-2">
          {data.map((post: BlogPostType, index: number) => (
            <BlogItem key={index} post={post} />
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"></div>
      </Container>
    </SectionBlock>
  );
}
