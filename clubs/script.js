// mobile menu
document.getElementById("mobile").addEventListener("click", () => {
  // document.getElementById("sidebar").classList.toggle("left-[100%]");
  console.log("done");
  requestAnimationFrame(() => {
    document.getElementById("sidebar").classList.toggle("left-0");
    document.getElementById("sidebar").classList.toggle("left-[-100%]");
  });

  let topx = document.getElementById("topx");

  topx.classList.toggle("absolute");
  topx.classList.toggle("transition-all");
  topx.classList.toggle("rotate-45");
  topx.classList.toggle("origin-center");

  let bottomx = document.getElementById("bottomx");
  bottomx.classList.toggle("absolute");
  bottomx.classList.toggle("transition-all");
  bottomx.classList.toggle("-rotate-45");
  bottomx.classList.toggle("origin-center");

  document.getElementById("disappear").classList.toggle("hidden");
  // document.getElementById("sidebar").classList.add("right-[0]");
});

let emailSubmit = document.getElementById("emailSubmit");
// document.getElementById('sucess-message').style.display = 'none'
function submitEmail() {
  if (emailSubmit.value.trim() === '') {
    document.getElementById("sucess-message").innerHTML =
      "Please enter a valid email";
      setTimeout(() => {
        document.getElementById("sucess-message").style.display = "none";
      }, 5000);
  }else{
    if(emailSubmit.value.trim().includes("@") && emailSubmit.value.length > 7){
      document.getElementById("sucess-message").innerHTML = "You are subscribed";
      setTimeout(() => {
        document.getElementById("sucess-message").style.display = "none";
      }, 5000);
    }else{
      document.getElementById("sucess-message").innerHTML =
              "Enter a Valid email"; 
          setTimeout( () => {
            document.getElementById("sucess-message").style.display ="none"
          } , 5000)
    }
  }
}



