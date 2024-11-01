import { defineField, defineType } from "sanity";

export const promotion = defineType({
  name: "promotion",
  title: "Promotion",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "link",
      type: "url",
    }),
  ],
});
