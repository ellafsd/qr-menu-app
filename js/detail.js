// In multi-page applications, if a page is shared by multiple elements, that page is rendered dynamically.
// To do this, a parameter is first passed in the URL. Then, this parameter is retrieved from the URL and used to render the page content.

import fetchMenu from "./api.js";
import { elements, renderDetailPage, renderNotFoundPage } from "./ui.js";

// Thanks to JavaScript's URLSearchParams class, we can access and use the search parameters in the URL.
const params = new URLSearchParams(window.location.search);

// Access the 'id' value from the URL using URLSearchParams
// If you add '+' before String, you will convert it into Number 
const id = +params.get("id");   //parseInt(params.get("id"));

console.log(id);

document.addEventListener("DOMContentLoaded", async () => {
  // Get menu items from the API
  const data = await fetchMenu();

  // Find the product to render on the detail page
  const product = data.find((item) => item.id === id);

  // If the product exists, run the renderDetailPage function, otherwise run renderNotFoundPage
  if (!product) {
    renderNotFoundPage(elements.detailPage);
  } else {
    renderDetailPage(product, elements.detailPage);
  }
});
