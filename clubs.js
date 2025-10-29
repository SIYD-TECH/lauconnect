async function fetchClubs() {
  const response = await fetch('clubs.json')
  const clubs = await response.json() //fetch clubs and covert to array
   return clubs; 
} 

async function intializeApp() {
  const allClubs = await fetchClubs(); // call the function fetch clubs function and receive the output 
  // console.log(allClubs);

  const searchInput = document.getElementById('search');
  const container = document.getElementById('card-container');

  function displayClubs(clubs) {
    container.innerHTML = "";
    // this function receives a clubs parameter loops through the array and creates a div for each club
    if( clubs == ""){
      container.innerHTML = `<p style= "text-align:cente ; font-size: 40px; font-weight: bold;">NO CLUB FOUND</p>`
    }else{
      clubs.forEach(club => {
            container.innerHTML += `<div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-103">
            <img src="${club.image}" alt="${club.name} loading="lazy"
                class="w-full h-40 object-cover" />
            <div class="p-4 relative">
                <h3 class="text-xl font-semibold text-[#800000] mb-2">${club.name}</h3>
                <p class="text-gray-600 text-sm mb-4">${club.description}</p>
                <a href="jci.html?club=${club.id}">
                  <button
                      class="inline-block bg-[#800000] sticky bottom-0 text-white px-4 py-2 rounded-lg hover:bg-[#a64b4b] transition cursor-pointer">Learn More
                  </button>
                </a>
                
            </div>
        </div>`;
    });
    }
    
  }

  searchInput.addEventListener('input', () => {
    const search = searchInput.value.trim().toLowerCase() // accepts the input and converts to lowercase.
   const filterClubs =  allClubs.filter(club => {
      const nameMatches = club.name.toLowerCase().includes(search); // c

      return nameMatches;
    })
    displayClubs(filterClubs) // f
  })

  displayClubs(allClubs) // calls the function and accepts the parameter allclubs that was fetched
}

intializeApp()