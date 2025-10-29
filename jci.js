// fetch('clubs.json')
// .then(resp => resp.json())
// .then( clubs =>console.log(clubs))

// console.log(resp)

async function fetchClubs() {
  try {
    let clubs = await fetch("clubs.json");
    clubs = await clubs.json(); // This 

    const urlParams = new URLSearchParams(window.location.search);
    const clubId = urlParams.get("club");

    const clubToShow = clubs.find((club) => club.id === clubId);

    if (clubToShow) {
      document.getElementById("container").innerHTML = `
    <main>
        <section class="relative text-maroon py-24 md:py-32 px-6 text-center overflow-hidden">
            <div class="absolute inset-0 "></div>
            <div class="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            <div class="relative z-10 max-w-4xl mx-auto">
                <h1 class="text-4xl md:text-6xl font-extrabold mb-4 text-shadow-lg">${clubToShow.name}</h1>
                <p class="text-lg md:text-2xl font-light opacity-90 max-w-2xl mx-auto">Empowering the next generation of
                    young leaders to create positive and lasting change in our community.</p>
            </div>
        </section>

        <section class="py-20 md:py-24 px-6 lg:px-16 bg-white">
            <div class="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 md:gap-16">
                <div class="relative">
                    <div class="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full bg-off-white rounded-3xl transform -rotate-3"></div>
                    <img src="${clubToShow.image}" alt="${clubToShow.name}" class="relative rounded-3xl shadow-2xl w-full h-full md:h-fit lg:h-[600px] " />
                </div>
                <div class="space-y-6 text-center lg:text-left">
                    <h2 class="text-3xl md:text-4xl font-bold text-maroon">About ${clubToShow.name}</h2>
                    <p class="text-base md:text-lg leading-relaxed text-gray-600">
                        ${clubToShow.about}
                    </p>
                    <p class="text-base md:text-lg leading-relaxed text-gray-600">
                        Through impactful projects, workshops, and collaborations, our members learn to become
                        changemakers. As part of the global JCI network, we offer unmatched opportunities for networking
                        and personal growth.
                    </p>
                    <a href="/clubs.html" class="inline-flex items-center mt-4 bg-maroon text-white px-8 py-3 rounded-full font-semibold hover:bg-maroon-dark shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        &larr; Back to Clubs
                    </a>
                </div>
            </div>
        </section>

        <section class="py-20 md:py-24 bg-off-white text-center px-6">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold text-maroon mb-4">What We Do</h2>
                <p class="text-base md:text-lg text-gray-600 mb-12 md:mb-16 max-w-2xl mx-auto">${clubToShow.description}</p>

                <div class="grid md:grid-cols-3 gap-8">
                    <div class="group p-8 bg-white rounded-2xl shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-maroon/10 border border-gray-100 transform hover:-translate-y-2 transition-all duration-300">
                        <div class="bg-maroon/10 text-maroon rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-maroon group-hover:text-white transition-colors duration-300">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl md:text-2xl font-semibold text-gold mb-3">${clubToShow.activities[0].title}</h3>
                        <p class="text-gray-600">${clubToShow.activities[0].description}</p>
                    </div>

                    <div class="group p-8 bg-white rounded-2xl shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-maroon/10 border border-gray-100 transform hover:-translate-y-2 transition-all duration-300">
                        <div class="bg-maroon/10 text-maroon rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-maroon group-hover:text-white transition-colors duration-300">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl md:text-2xl font-semibold text-gold mb-3">${clubToShow.activities[1].title}</h3>
                        <p class="text-gray-600">${clubToShow.activities[1].description}</p>
                    </div>

                    <div class="group p-8 bg-white rounded-2xl shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-maroon/10 border border-gray-100 transform hover:-translate-y-2 transition-all duration-300">
                        <div class="bg-maroon/10 text-maroon rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-maroon group-hover:text-white transition-colors duration-300">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293a1 1 0 010 1.414L5.414 8l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L18.586 8l-2.293-2.293a1 1 0 010-1.414z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl md:text-2xl font-semibold text-gold mb-3">${clubToShow.activities[2].title}</h3>
                        <p class="text-gray-600">${clubToShow.activities[2].description}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-maroon text-white text-center">
            <div class="max-w-4xl mx-auto px-6">
                <h2 class="text-3xl md:text-4xl font-bold mb-8">Connect With ${clubToShow.name}</h2>
                <div class="flex flex-wrap justify-center gap-4 md:gap-6">
                    <a href="${clubToShow.socials.instagram}" target="_blank" class="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                        <span class="font-semibold">Instagram</span>
                    </a>
                    <a href="https://twitter.com/jcinlautech" target="_blank" class="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><g fill="none"><g clip-path="url(#SVGG1Ot4cAD)"><path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"/></g><defs><clipPath id="SVGG1Ot4cAD"><path fill="#fff" d="M0 0h14v14H0z"/></clipPath></defs></g></svg>
                        <span class="font-semibold">Twitter</span>
                    </a>
                    <a href="https://linkedin.com/company/jcin-lautech" target="_blank" class="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
                        <span class="font-semibold">LinkedIn</span>
                    </a>

                    <a href="https://linkedin.com/company/jcin-lautech" target="_blank" class="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg>
                        <span class="font-semibold">LinkedIn</span>
                    </a>
                </div>
            </div>
        </section>

        <footer class="bg-[#2d0509] text-white py-10 px-6">
            <div class="max-w-7xl mx-auto text-center md:flex md:justify-between md:items-center">
                <div class="mb-4 md:mb-0">
                    <p class="text-sm opacity-80">&copy; 2025 LAUConnect — Connecting Students, Inspiring Change.</p>
                </div>
                <ul class="flex justify-center gap-6 text-sm">
                    <li><a href="/" class="opacity-80 hover:opacity-100 transition">Home</a></li>
                    <li><a href="/clubs.html" class="opacity-80 hover:opacity-100 transition">Clubs</a></li>
                    <li><a href="/about.html" class="opacity-80 hover:opacity-100 transition">About</a></li>
                </ul>
            </div>
        </footer>
    `;
    }
  } catch (err) {
    console.log(err);
  }
  // console.log(clubToShow);
}

fetchClubs();
