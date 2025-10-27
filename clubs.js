async function loadClubs() {
  try {
    const response = await fetch("clubs.json");
    const clubs = await response.json();
    console.log(clubs);

    const container = document.querySelector('#card-container')

    clubs.forEach(club => {
       container.innerHTML += `<div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-103">
            <img src="${club.image}" alt="${club.name}"
                class="w-full h-40 object-cover" />
            <div class="p-4 relative">
                <h3 class="text-xl font-semibold text-[#800000] mb-2">${club.name}</h3>
                <p class="text-gray-600 text-sm mb-4">${club.description}</p>
                <a href="#"
                    class="inline-block bg-[#800000] sticky bottom-0 text-white px-4 py-2 rounded-lg hover:bg-[#a64b4b] transition cursor-pointer">Learn More</a>
            </div>
        </div>`;
    });
  } catch (error) {
    console.error(error)
  }
}


loadClubs()