// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// ********** google maps ************ //

      // function initMap() {
      //     const karpos = { lat: 41.9954688, lng: 21.4368256 };
      //   // The map, centered at Uluru
      //   const map = new google.maps.Map(document.getElementById("map"), {
      //     zoom: 4,
      //     center: karpos,
      //   });
      //   // The marker, positioned at Uluru
      //   const marker = new google.maps.Marker({
      //     position: karpos,
      //     map: map,
      //   });
      // }
// ********** end of google maps ************ //