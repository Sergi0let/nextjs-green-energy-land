import { defineField, defineType } from "sanity";

const imageGallaryType = defineType({
  name: "imageGallary",
  type: "object",
  title: "Gallery",
  fields: [
    defineField({
      name: "images",
      type: "array",
      of: [
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
      options: {
        layout: "grid",
      },
    }),
  ],
});

export default imageGallaryType;
