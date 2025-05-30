// Manage the elements to be fetched from HTML using an object
const elements = {
  menuList: document.querySelector("#menu-list"),
  inputs: document.querySelectorAll("input"),
  detailPage: document.querySelector("#outlet"),
};

// Function to render menu cards to the UI
const renderCard = (data) => {
 
  // Loop through the data passed to the function and create HTML for each item
  const cardsHtml = data
    .map(
      (menu) => `    <a href='/detail.html?id=${
        menu.id
      } '  class="d-flex flex-column flex-md-row text-dark gap-3" id="card">
        <img
          class="rounded img-fluid shadow"
          src="${menu.img}"
          alt="card-image"
        />
        <div>
          <div class="d-flex justify-content-between">
            <h5>${menu.title}</h5>
            <p class="fw-bold text-success">$${(menu.price * 2).toFixed(2)}</p>

          </div>
          <p class="lead">
         ${menu.desc}
          </p>
        </div>
      </a>`
    )
    .join(" ");

   // Display the generated HTML in the UI
  elements.menuList.innerHTML = cardsHtml;
};

// Function to render the product detail page
const renderDetailPage = (product, outlet) => {
  console.log(product);

  // Generate the inner HTML content of the provided outlet
  outlet.innerHTML = ` 
      <div class="d-flex justify-content-between">
    
        <a href="/">
          <img src="./images/home.png" width="35px" alt="home-icon" />
        </a>

        <p>Homepage / ${product.category} / ${product.title}</p>

      </div>


      <h1 class="text-center">${product.title}</h1>


      <img
        src="${product.img} "
        style="max-height: 400px"
        class="rounded object-fit-cover shadow"
        alt="product-image"
      />

    <h4>Product Category: <span class="text-success">${product.category}</span></h4>
    <h4>Product Price: <span class="text-success">$${(product.price * 2).toFixed(2)}</span></h4>

      <p class="lead">
       ${product.desc}
      </p>`;
};


// Function to render the Not Found page
const renderNotFoundPage = (outlet) => {
  outlet.innerHTML = `

 <div class="main_wrapper">
  <div class="main">
    <div class="antenna">
      <div class="antenna_shadow"></div>
      <div class="a1"></div>
      <div class="a1d"></div>
      <div class="a2"></div>
      <div class="a2d"></div>
      <div class="a_base"></div>
    </div>
    <div class="tv">
      <div class="cruve">
        <svg
          class="curve_svg"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 189.929 189.929"
          xml:space="preserve"
        >
          <path
            d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
          ></path>
        </svg>
      </div>
      <div class="display_div">
        <div class="screen_out">
          <div class="screen_out1">
            <div class="screen">
              <span class="notfound_text"> NOT FOUND</span>
            </div>
            <div class="screenM">
              <span class="notfound_text"> NOT FOUND</span>
            </div>
          </div>
        </div>
      </div>
      <div class="lines">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <div class="buttons_div">
        <div class="b1"><div></div></div>
        <div class="b2"></div>
        <div class="speakers">
          <div class="g1">
            <div class="g11"></div>
            <div class="g12"></div>
            <div class="g13"></div>
          </div>
          <div class="g"></div>
          <div class="g"></div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="base1"></div>
      <div class="base2"></div>
      <div class="base3"></div>
    </div>
      <a href='/' class='not-founded-link'>Go to Homepage</a>
  </div>
  <div class="text_404">
    <div class="text_4041">4</div>
    <div class="text_4042">0</div>
    <div class="text_4043">4</div>
  </div>

</div>  
`;
};

export { elements, renderCard, renderDetailPage, renderNotFoundPage };
