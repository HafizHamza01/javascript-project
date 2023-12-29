// import Area.
const toogle = document.getElementById("dark_mood");
const body = document.querySelector("body");
const country_list = document.getElementById("country_list");
const select_background = document.getElementById("select");
const searchbar = document.getElementById("search_bar");

// Dark mood Area.
toogle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "black";
  } else {
    body.style.background = "grey";
    body.style.color = "white";
  }
});

// Array of objects.
const data = [
  {
    image:
      "https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg",
    country: "Pakistan",
    population: 238300000,
    region: "Asia",
    capital: "Islambad",
  },
  {
    image: "https://www.flagpictures.com/static/flags/vector/tr.svg",
    country: "Turkey",
    population: 355000000,
    region: "Asia",
    capital: "Istanbol",
  },
  {
    image:
      "https://cdn.britannica.com/82/65482-050-E43AB312/Flag-detail-Germany-crest.jpg",
    country: "Germany",
    population: 575000000,
    region: "Europe",
    capital: "Berlin",
  },
  {
    image: "https://cdn.britannica.com/47/6847-004-7D668BB0/Flag-Brazil.jpg",
    country: "Brazil",
    population: 103670000,
    region: "Europe",
    capital: "Brasilia",
  },
  {
    image:
      "https://www.nicepng.com/png/full/118-1182907_iceland-iceland-flag-png.png",
    country: "Iceland",
    population: 103670000,
    region: "Oceania",
    capital: "Reykjeyvik",
  },
  {
    image:
      "https://cdn.britannica.com/40/5340-004-B25ED5CF/Flag-Afghanistan.jpg",
    country: "Afghanistan",
    population: 103670000,
    region: "Asia",
    capital: "Kabul",
  },
  {
    image: "https://cdn.britannica.com/88/3588-004-E0E45339/Flag-Portugal.jpg",
    country: "Purtagal",
    population: 103670000,
    region: "Africa",
    capital: "Lisban",
  },
  {
    image:
      "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg",
    country: "United State",
    population: 93670000,
    region: "Americas",
    capital: "Washington",
  },
];

// map function
function display() {
  data.map((data) => {
    country_list.innerHTML += `<div class="card">
                 <img src=${data.image}  alt="please wait...">
              <div class="card-body">
              <h3 class="country_name">${data.country}</h3>
              <div class="card-text">
                <p class="card_population">Population:${data.population}</p>
                <p class="card_rigion">Region:${data.region}</p>
                <p class="card_capital">Capital:${data.capital}</p>
                </div>
              </div>
            </div>
      `;
  });
}
display();

// Search bar Area
searchbar.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();
  const filteredArray = data.filter(
    (item) => item.country.toLowerCase().search(value) != -1
  );
  let filteredSearch = filteredArray.map((data) => {
    return `<div class="card">
           <img src=${data.image}  alt="please wait...">
        <div class="card-body">
        <h3 class="country_name">${data.country}</h3>
        <div class="card-text">
          <p class="card_population">Population:${data.population}</p>
          <p class="card_rigion">Region:${data.region}</p>
          <p class="card_capital">Capital:${data.capital}</p>
          </div>
        </div>
      </div>
`;
  });
  country_list.innerHTML = filteredSearch;
});

// Select/option Area.
function handle_select_value() {
  const selected_region = document.getElementById("select").value; 
    const filter_region = data.filter((item) => selected_region === "Filter_by_region"? item : item.region === selected_region );
    console.log(filter_region);
    const update_region = filter_region.map((data) => {
      return `<div class="card">
    <img src=${data.image}  alt="please wait...">
 <div class="card-body">
 <h3 class="country_name">${data.country}</h3>
 <div class="card-text">
   <p class="card_population">Population:${data.population}</p>
   <p class="card_rigion">Region:${data.region}</p>
   <p class="card_capital">Capital:${data.capital}</p>
   </div>
 </div>
</div>
`;
    });
    country_list.innerHTML = update_region;
  }
