import { defineField, defineType } from "sanity";

const priceType = defineType({
  name: "price",
  type: "object",
  title: "Price",
  fields: [
    defineField({
      name: "availablePlan",
      type: "array",
      of: [
        defineField({
          name: "priceInfo",
          type: "priceInfo",
        }),
      ],
    }),
  ],
});
export default priceType;
