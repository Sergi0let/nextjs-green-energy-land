import { type SchemaTypeDefinition } from "sanity";
import { authorType } from "./authorType";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { heroType } from "./hero";
import imageGallaryType from "./imageGallary";
import pageType from "./page";
import { postType } from "./postType";
import { promotion } from "./promotion";
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
  ],
};
