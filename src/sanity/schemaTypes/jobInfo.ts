import { defineField, defineType } from "sanity";

export const jobInfoType = defineType({
  name: "jobInfo",
  type: "object",
  title: "Job Information",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Job Title",
    }),
    defineField({
      name: "type",
      type: "string",
      title: "Job Type",
    }),
    defineField({
      name: "location",
      type: "string",
      title: "Job Location",
    }),
    defineField({
      name: "link",
      type: "url",
      title: "Job Link",
    }),
  ],
});
