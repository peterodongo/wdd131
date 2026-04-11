const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const mainElement = document.querySelector("main");


hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
    hamburger.textContent = menu.classList.contains("show") ? "X" : "☰";
});


const airlines = [
  {
    airlineName: "Kenya Airways",
    location: "Nairobi, Kenya",
    hub: "Jomo Kenyatta International Airport",
    price: 715,
    imageUrl:
    "kenya-airways.jpg"
  },
  {
    airlineName: " Ethiopian Airlines",
    location: "Addis Ababa, Ethiopia",
    hub: "Bole International Airport",
    price: 895,
    imageUrl:
    "ethiopian-airlines.jpg"
  },
  {
    airlineName: "RwandAir",
    location: "kigali, Rwanda",
    hub: "Kigali International Airport",
    price: 1200,
    imageUrl:
    "rwandair.jpg"
  },
  {
    airlineName: "South African Airways",
    location: "Johannesburg, South Africa",
    hub: "OR Tambo International Airport",
    price: 1500,
    imageUrl:
    "south-Airways.jpg"
  },
  {
    airlineName: "EgyptAir",
    location: "Cairo, Egypt",
    hub: "Cairo International Airport",
    price: 1000,
    imageUrl:
    "egyptair.jpg"
  },
  {
    airlineName: "Qatar Airways",
    location: "Doha, Qatar",
    hub: "Hamad International Airport",
    price: 1200,
    imageUrl:
    "qatar-airways.jpg                            "
  },
  
];



// HOME PAGE
function displayHome() {
  mainElement.innerHTML = `
    <div class="large">
      <img src="tripsa (1).jpg" alt="large">
    </div>

    <div class="small">
      <img src="mexa.jpg" alt="small">
    </div>
  `;
}

// FLIGHTS PAGE
function displayAirlines(list) {
  mainElement.innerHTML = "";

  list.forEach(airline => {
    const card = document.createElement("section");
    card.classList.add("airline-card");

    card.innerHTML = `
      <h3>${airline.airlineName}</h3>
      <p>Location: ${airline.location}</p>
      <p>Price: ${airline.price}</p>
      <p>Hub: ${airline.hub}</p>
      <img src="${airline.imageUrl}">
    `;

    mainElement.appendChild(card);
  });
}

// SUPPORT PAGE
function displaySupportTeam() {
  mainElement.innerHTML = `
    <section class="support_team-card">
      <h3>Support Team</h3>
      <textarea placeholder="Write your issue..."></textarea>
      <button>Submit</button>
      <p>Contact address: airlines.com@flights.com</p>
      <p>hotline : +254 700 000 999</p>
    </section>
  `;
}

// NAVIGATION EVENTS
document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  displayHome();
});

document.querySelector("#flights").addEventListener("click", (e) => {
  e.preventDefault();
  displayAirlines(airlines);
});

document.querySelector("#cheap_price").addEventListener("click", (e) => {
  e.preventDefault();
  displayAirlines(airlines.filter(a => a.price < 800));
});

document.querySelector("#support_team").addEventListener("click", (e) => {
  e.preventDefault();
  displaySupportTeam();
});

// LOAD HOME FIRST
displayHome();


function support_team(support_team) {
  
  mainElement.innerHTML = "";

 {
   
    let card = document.createElement("section");
    card.classList.add("support_team-card");

    
    card.innerHTML = `
    <section class="support_team-card">
      <h3>{ssupport_team}</h3>
      <textarea placeholder="Write a comment..." </textarea>
      <button class="comment-btn">Post</button>
      <p>Contact Information: support@flights.com</p>
    </section>
    `;


    mainElement.appendChild(card);
  };
}

