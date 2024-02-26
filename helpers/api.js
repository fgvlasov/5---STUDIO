import qs from "qs";

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = "") {
	return `${
	  process.env.NEXT_ADMIN_LINK || "https://inv.ptzsite.ru"
	}${path}`;
  }

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);

  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;


  const response = await fetch(requestUrl, mergedOptions);
  // Handle response
  if (!response.ok) {
    const errorText = await response.text();

    console.error(errorText);
    throw new Error(`An error occurred. Please try again.`);
  }

  const contentType = response.headers.get("content-type");

  // if (contentType && contentType.indexOf("application/json") !== -1) {
  //   const json = await response.json();
  //   console.log("DATA", path, json.attributes);
  //   return json;
  // }

  const data = await response.json();

  return data;
}
