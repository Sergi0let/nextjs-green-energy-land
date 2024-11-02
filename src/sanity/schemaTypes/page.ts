import { defineArrayMember, defineField, defineType } from "sanity";

const pageType = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      name: "slug",
      type: "string",
      title: "Slug",
    }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page Builder",
      of: [
        defineArrayMember({
          name: "hero",
          type: "hero",
        }),
        defineArrayMember({
          name: "promotion",
          type: "promotion",
        }),
        defineArrayMember({
          name: "textWithIllustration",
          type: "textWithIllustration",
        }),
        defineArrayMember({
          name: "imageGallary",
          type: "imageGallary",
        }),
        defineArrayMember({
          name: "solutions",
          type: "solutions",
        }),
        defineArrayMember({
          name: "aboutUs",
          type: "aboutUs",
        }),
        defineArrayMember({
          name: "metrics",
          type: "metrics",
        }),
        defineArrayMember({
          name: "testimonials",
          type: "testimonials",
        }),
        defineArrayMember({
          name: "ourExpert",
          type: "ourExpert",
        }),
        defineArrayMember({
          name: "ourPhilosophy",
          type: "ourPhilosophy",
        }),
        defineArrayMember({
          name: "job",
          type: "job",
        }),
      ],
    }),
  ],
});
export default pageType;
