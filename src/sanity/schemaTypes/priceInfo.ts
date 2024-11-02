import { defineField, defineType } from "sanity";

const priceInfoType = defineType({
  name: "priceInfo",
  title: "Price Info",
  type: "object",
  fields: [
    defineField({
      name: "price",
      type: "string",
    }),
    defineField({
      name: "plan",
      type: "string",
    }),
    defineField({
      name: "recommended",
      type: "boolean",
    }),
    defineField({
      name: "time",
      type: "string",
    }),
    defineField({
      name: "desc",
      type: "string",
    }),
    defineField({
      name: "cta",
      type: "promotion",
    }),
    defineField({
      name: "benefits",
      type: "array",
      of: [
        defineField({
          name: "benefit",
          type: "string",
        }),
      ],
    }),
  ],
});

export default priceInfoType;
