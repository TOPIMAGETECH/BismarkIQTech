function hamburg(){
  const navbar = document.querySelector(".dropdown")
  navbar.style.transform = "translateY(0px)"
}

function cancel(){
  const navbar = document.querySelector(".dropdown")
  navbar.style.transform = "translateY(-500px)"
}

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
