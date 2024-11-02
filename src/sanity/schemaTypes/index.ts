import { type SchemaTypeDefinition } from "sanity";
import { aboutUsType } from "./aboutUs";
import { authorType } from "./authorType";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { heroType } from "./hero";
import imageGallaryType from "./imageGallary";
import { metricsType } from "./metrics";
import { ourExpertType } from "./ourExpert";
import pageType from "./page";
import { postType } from "./postType";
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
  ],
};
