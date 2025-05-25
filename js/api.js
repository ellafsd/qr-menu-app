const fetchMenu = async () => {
  // Send a request to the API
  const res = await fetch("../db.json");

  // Convert the response from the API to JSON format
  const data = await res.json();

  // Return the 'menu' inside the data when this function is called
  return data.menu;
};

export default fetchMenu;
