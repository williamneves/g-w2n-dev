import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET! || "production",
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! || "82wdqgun",
	apiVersion: '2021-10-21',
	// useCdn: process.env.NEXT_PUBLIC_SANITY_DATASET === 'production',
	// token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
};

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
