import { defineField, defineType } from "sanity";

const textWithIllustration = defineType({
  name: "textWithIllustration",
  type: "object",
  title: "Text with Illustration",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "tagline",
      type: "string",
    }),
    defineField({
      name: "experts",
      type: "text",
    }),
    defineField({
      name: "icon",
      type: "string",
    }),
    defineField({
      name: "cta",
      type: "promotion",
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative Text",
        }),
      ],
    }),
  ],
});

export default textWithIllustration;
