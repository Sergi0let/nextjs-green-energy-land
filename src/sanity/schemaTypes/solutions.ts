import { defineField, defineType } from "sanity";

export const solutionsType = defineType({
  name: "solutions",
  type: "object",
  title: "Solutions",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "string",
    }),
    // defineField({
    //   name: "excerpt",
    //   type: "text",
    // }),
    defineField({
      name: "tagline",
      type: "string",
    }),
    defineField({
      name: "cta",
      type: "promotion",
    }),
    defineField({
      name: "solutions",
      type: "array",
      of: [
        defineField({
          name: "solution",
          type: "textWithIllustration",
        }),
      ],
    }),
    defineField({
      name: "imageGallary",
      type: "imageGallary",
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
        subtitle: "Solutions",
      };
    },
  },
});
