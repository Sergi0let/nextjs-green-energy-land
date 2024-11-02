import { defineField, defineType } from "sanity";

export const jobType = defineType({
  name: "job",
  type: "object",
  title: "Job Information",
  fields: [
    defineField({
      name: "department",
      type: "string",
      title: "Department",
    }),
    defineField({
      name: "available",
      type: "array",
      of: [
        defineField({
          name: "position",
          type: "jobInfo",
        }),
      ],
    }),
  ],
});
