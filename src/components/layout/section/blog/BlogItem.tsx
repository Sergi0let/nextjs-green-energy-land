import { Heading } from "@/components/elements";
import { BlogPostType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export type BlogItemProps = {
  post: BlogPostType;
};

function BlogItem({ post }: BlogItemProps) {
  const { authorImage, desc, mainImage, name, slug, timeRead, title } = post;

  return (
    <div className="group flex cursor-pointer flex-col gap-8">
      <Link
        href={`/blog/${slug}`}
        className="aspect-video h-[360px] overflow-hidden rounded-3xl"
      >
        <Image
          src={mainImage ?? ""}
          height={360}
          width={360}
          alt="Blog 1"
          className="h-full w-full object-cover duration-300 ease-in-out group-hover:scale-110"
        />
      </Link>
      <div className="flex flex-col justify-between">
        <Link href={`/blog/${slug}`}>
          <Heading
            as="h3"
            className="mb-4 text-sub-title leading-none text-white"
          >
            {title}
          </Heading>
        </Link>
        <p className="line-clamp-2 text-base text-neutral-400">{desc}</p>
      </div>
      <div className="mt-6 flex items-center gap-6">
        <div className="flex items-center gap-3">
          <Image
            src={authorImage ?? ""}
            height={40}
            width={40}
            alt="Avatar Author"
            className="h-[40px] rounded-full object-cover"
          />
          <span className="text-white">{name}</span>
        </div>
        <div className="text-white">{timeRead} min read</div>
      </div>
    </div>
  );
}

export { BlogItem };
