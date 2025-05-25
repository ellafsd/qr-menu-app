import fetchMenu from "./api.js";
import { elements, renderCard } from "./ui.js";

// When page loads, send a Req to API and assign the received data to 'data'
document.addEventListener("DOMContentLoaded", async () => {
  
  // Get data from the API
  const data = await fetchMenu();

  // Dynamically render the UI using the data received from the API
  renderCard(data);

  // Add an event listener to each input, access the selected input's category, and render only the products that belong to that category
  elements.inputs.forEach((input) => {

    // Since the result of querySelectorAll is an HTMLCollection, we cant directly use addEventListener on it.That's why we loop through each input element
    input.addEventListener("change", () => {

      // Get the id of the selected input
      const selected = input.id;

      console.log(selected);

      // If the selected category is "all", render all products; otherwise, render only the products that belong to the selected category
      if (selected === "all") {
        renderCard(data);
      } else {
        // Loop through the menu items and filter those that match the selected category
        const filtred = data.filter((item) => item.category == selected);


        // Render the filtered items
        renderCard(filtred);
      }
    });
  });
});
