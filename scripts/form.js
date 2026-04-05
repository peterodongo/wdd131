const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];



const productSelect = document.getElementById("products");

if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");
        
        // Instruction: array's 'id' is used for the value field
        option.value = product.id; 
        
        // Instruction: array's 'name' field is used for the display
        option.textContent = product.name; 
        
        productSelect.appendChild(option);
    });
}

if (window.location.pathname.includes("review.html")) {
    let reviewCount = Number(window.localStorage.getItem("reviewCount-ls")) || 0;
    reviewCount++;
    localStorage.setItem("reviewCount-ls", reviewCount);
    
    // Optional: Display the count on the review page if there's an element for it
    const countDisplay = document.querySelector("#review-count");
    if (countDisplay) {
        countDisplay.textContent = reviewCount;
    }
}

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;

