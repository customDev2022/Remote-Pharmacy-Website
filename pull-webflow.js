import fetch from "node-fetch";
import fs from "fs";

const WEBFLOW_SITE_ID = "the-site-id-remoteph";
const WEBFLOW_API_KEY = "the-api-key-remoteph";

const headers = {
  "accept-version": "1.0.0",
  Authorization: `Bearer ${WEBFLOW_API_KEY}`,
};

async function fetchCollections(siteId) {
  const url = `https://api.webflow.com/v2/sites/${WEBFLOW_SITE_ID}/collections`;
  const response = await fetch(url, { headers });
  const data = await response.json();
  fs.writeFileSync("collections.json", JSON.stringify(data, null, 2));
  console.log("collections synced from webflow");
}
