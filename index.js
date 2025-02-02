document.addEventListener("DOMContentLoaded", () => {
  // Select the hamburger icon, the cancel icon, and the dropdown menu
  const hamburgIcon = document.querySelector('.hamburg');
  const dropdownMenu = document.querySelector('.dropdown');
  const cancelIcon = document.querySelector('.dropdown .cancel');

  // If the hamburger icon exists, attach a click event to show the menu
  if (hamburgIcon && dropdownMenu) {
    hamburgIcon.addEventListener('click', () => {
      dropdownMenu.style.display = 'block';
    });
  }

  // If the cancel icon exists, attach a click event to hide the menu
  if (cancelIcon && dropdownMenu) {
    cancelIcon.addEventListener('click', () => {
      dropdownMenu.style.display = 'none';
    });
  }

  // Optional: Hide the dropdown if clicking outside the menu area
  document.addEventListener('click', (e) => {
    if (
      dropdownMenu.style.display === 'block' &&
      !dropdownMenu.contains(e.target) &&
      !hamburgIcon.contains(e.target)
    ) {
      dropdownMenu.style.display = 'none';
    }
  });
});

// Typewriter Effect

const texts = [
  "DEVELOPER",
  "DESIGNER",
  "YOUTUBER"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
  if (charcterIndex < texts[textIndex].length){
      textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
      charcterIndex++;
      setTimeout(typeWriter, speed); 
  }
  else{
      setTimeout(eraseText, 1000)
  }
}

function eraseText(){
  if(textElements.innerHTML.length > 0){
      textElements.innerHTML = textElements.innerHTML.slice(0,-1);
      setTimeout(eraseText, 50)
  }
  else{
      textIndex = (textIndex + 1) % texts.length;
      charcterIndex = 0;
      setTimeout(typeWriter, 500)
  }
}

window.onload = typeWriter

// document.getElementById('Btn').addEventListener('click', function() {
//   // Redirect to another page
//   window.location.href = "index.html";
// });



// underline code for the activeness
// Get the current page's URL
const currentLocation = window.location.pathname;

// Select all menu links
const menuLinks = document.querySelectorAll('links a');

// Loop through each menu link
menuLinks.forEach(link => {
  // If the link's href matches the current URL, add 'active'
  if (link.getAttribute('href') === currentLocation.split('/').pop()) {
    link.classList.add('active'); // Add 'active' to the current link
  }
});


// search bar code 

// function performSearch(){
//   const query =document.getElementById("search").value.toLowerCase(); 
//   alert("Searching for: " + query);
// }


function performSearch() {

    const searchQuery = document.getElementById("search").value.toLowerCase();
    const paragraphs = document.querySelectorAll("body");
  
  

  // Remove previous highlights
  paragraphs.forEach(p => {
    p.innerHTML = p.innerHTML.replace(/<sp an class="highlight">(.*?)<\/span>/g, "$1");
  });

  if (searchQuery) {
    paragraphs.forEach(p => {
      const text = p.textContent.toLowerCase();
      if (text.includes(searchQuery)) {
        const regex = new RegExp(searchQuery, "gi");
        p.innerHTML = p.innerHTML.replace(regex, match => `<span class="highlight">${match}</span>`);
      }
    });
  }
}
