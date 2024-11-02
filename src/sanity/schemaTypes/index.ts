import { type SchemaTypeDefinition } from "sanity";
import { aboutUsType } from "./aboutUs";
import { authorType } from "./authorType";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { heroType } from "./hero";
import imageGallaryType from "./imageGallary";
import { jobType } from "./job";
import { jobInfoType } from "./jobInfo";
import { metricsType } from "./metrics";
import { ourExpertType } from "./ourExpert";
import { ourPhilosophyType } from "./ourPhilosophy";
import pageType from "./page";
import { postType } from "./postType";
import priceType from "./price";
import priceInfoType from "./priceInfo";
import { promotion } from "./promotion";
import { solutionsType } from "./solutions";
import { testimonialsType } from "./testimonials";
import textWithIllustration from "./textWithIllustration";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    authorType,
    blockContentType,
    categoryType,
    heroType,
    imageGallaryType,
    pageType,
    postType,
    promotion,
    textWithIllustration,
    metricsType,
    solutionsType,
    aboutUsType,
    testimonialsType,
    ourExpertType,
    ourPhilosophyType,
    jobType,
    jobInfoType,
    priceInfoType,
    priceType,
  ],
};
