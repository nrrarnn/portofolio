// Navbar fixed

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger

const menu = document.querySelector("#menu");
const navMenu = document.querySelector("#nav-menu");
menu.addEventListener("click", function () {
  menu.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//klik window
window.addEventListener("click", function (e) {
  if (e.target != menu && e.target != navMenu) {
    menu.classList.remove("hamburger-active");
    navMenu.classList.add("hidden ");
  }
});

//DarkMode

const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

//contact form

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxwvez0OVWPekivcPbbldUMcLo8Pm8F5r2G1SoomyzMxquQ5Vm8A2yPd-nV08s7iNCW/exec';
  const form = document.forms['submit-to-google-sheet'];
  const btnKirim = document.querySelector('.my-button');
  const btnLoading = document.querySelector('.btn-loading');
  const myAlert = document.querySelector('.alert');

  form.addEventListener('submit', e => {
    e.preventDefault()
    // ketika tombol submit diklik

    // tampilkan tombol loading, hilangkan tombol kirim

    btnLoading.classList.toggle('hidden');
    btnKirim.classList.toggle('hidden');

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then((response )=> {
        
        btnLoading.classList.toggle('hidden');
        btnKirim.classList.toggle('hidden');
        
        myAlert.classList.toggle('hidden');

        form.reset();
        console.log('Success!', response)
    })
      .catch(error => console.error('Error!', error.message))
  });

  //alert

  alert = document.querySelector('#alert');
	button = document.querySelector('#button');

	button.addEventListener("click", function(){
  alert.classList.toggle('hidden');
  });


  //gsap

