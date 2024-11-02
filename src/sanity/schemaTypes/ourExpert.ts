import { defineField, defineType } from "sanity";

export const ourExpertType = defineType({
  name: "ourExpert",
  type: "object",
  title: "Our Expert",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "string",
    }),
    defineField({
      name: "excerpt",
      type: "text",
    }),
    defineField({
      name: "tagline",
      type: "string",
    }),
    defineField({
      name: "cta",
      type: "promotion",
    }),
    defineField({
      name: "ourExperts",
      type: "array",
      of: [
        defineField({
          name: "Expert",
          type: "textWithIllustration",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "heading",
      image: "image",
    },
    prepare({ title }: { title?: string }) {
      return {
        title: title || "Untitled",
        subtitle: "Our Expert",
      };
    },
  },
});
