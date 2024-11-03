import {
  BlogItem,
  Container,
  Heading,
  SectionBlock,
  SubTitle,
} from "@/components";
import ShareSocialList from "@/components/elements/share/ShareSocial";
import { client } from "@/sanity/lib/client";
import { getBlogPage, getBlogPost } from "@/sanity/queries/page";
import { BlogPostType } from "@/types/types";
import { default as ImageUrlBuilder } from "@sanity/image-url";
import { PortableText, PortableTextComponents } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

const builder = ImageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="mb-6 text-5xl">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="mb-6 text-4xl leading-none">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="mb-6 text-3xl">{children}</h3>,
    h4: ({ children }) => <h4 className="mb-6 text-2xl">{children}</h4>,
    normal: ({ children }) => <p className="!mb-6">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="mb-6 w-full border-l-4 border-l-white border-opacity-60 bg-white/10 p-6">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="mb-6 aspect-auto h-[33vh] w-full sm:h-[45vh]">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || " "}
          width={320}
          height={450}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    ),
  },
  marks: {
    em: ({ children }) => (
      <em className="font-semibold text-gray-400">{children}</em>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          className="font-bold text-yellow-300 underline"
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-xl list-disc px-6">{children}</ul>
    ),
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,

    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};

export default async function SingleBlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const data = await getBlogPost(slug);
  const relatedPosts = await getBlogPage();

  return (
    <SectionBlock className="bg-secondary-950">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-8">
          <div className="col-span-2 flex flex-col items-start justify-between gap-4">
            <Link href="/blog" className="text-white">
              Back to blog
            </Link>
            <div className="flex flex-col">
              <span className="text-white">Author</span>
              <div className="mt-8">
                <Image
                  src={data.author.image ?? ""}
                  height={56}
                  width={56}
                  alt="Avatar 1"
                  className="h-[56px] rounded-full object-cover"
                />
                <div className="mt-4 text-white">{data.author.name}</div>
              </div>
              <div className="mt-2 text-white">{data.author.position}</div>
            </div>
          </div>
          <div className="col-span-4 my-8 flex flex-col items-center gap-8 md:items-center md:text-center">
            {data?.categories?.map((category: string, index: number) => (
              <span key={index} className="rounded-full bg-white px-2 py-1">
                {category}
              </span>
            ))}
            <Heading as="h1" className="text-section leading-none text-white">
              {data?.title}
            </Heading>
            <div className="flex gap-3 text-white">
              <span>{data?.timeRead} min read</span>
              <span>{data?.publishedAt}</span>
            </div>
          </div>
          <div className="col-span-2 flex flex-col justify-end md:items-end">
            <div className="mb-6 text-white">Share</div>
            <div className="flex gap-3 md:flex-col">
              <ShareSocialList url="" />
            </div>
          </div>
        </div>
        <div className="my-4 flex flex-col items-center md:my-8">
          <Image
            src={data?.mainImage}
            alt="Hero image 1"
            width={450}
            height={250}
            className="h-full w-full object-cover"
          />
          <div className="my-8 flex max-w-3xl flex-col text-white/80 md:my-16">
            <PortableText value={data?.content} components={components} />
          </div>
        </div>
        <div>
          <SubTitle className="" subTitle="More like this" />
          <div className="mt-12 grid grid-cols-1 gap-8 md:mt-24 md:grid-cols-3">
            {relatedPosts
              ?.filter((elem: { slug: string }) => elem.slug !== slug)
              ?.map((post: BlogPostType, index: number) => (
                <BlogItem key={index} post={post} />
              ))}
          </div>
        </div>
      </Container>
    </SectionBlock>
  );
}
