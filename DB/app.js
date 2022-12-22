const bookingCont = document.querySelector(".theatre_location");
const workshopContainer = document.querySelector(".workshop");

async function getLiveEvents() {
  let url = "/DB/theatre.json";
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data)
  let theatre = data.theatres;
  let theatreTime = data.theatres.Time;
  //   console.log(theatreTime);
  let template = "";
  theatre.forEach((ele) => {
    let template2 = "";
    let timeslots = ele.Time;
    timeslots.forEach((ele) => {
      template2 += `
          <div class="timing">
              <span class="booking_timing">${ele}</span>
              <p class="booking_flexibility"><span> <i class="fa-solid fa-circle"></i></span>Cancellation Available</p>
          </div>
          `;
    });
    template += 
    `<div class="booking_location container">
    <div class="heart"><i class="fa-regular fa-heart"></i></div>
    <div>
      <p class="theatre_name">${ele.theatreName}</p>
      <div>
        <span class="mTicket" ><i class="fa-solid fa-mobile-retro"></i> M-Ticket</span>
        <span class="foodbevrages"><i class="fa-solid fa-burger"></i>Food And Beverages</span>
      </div>
      
    </div>

    <span class="info">
      <i class="fa-solid fa-circle-info"></i>
      <span>INFO</span>
    </span>
 
       <div class="movie_timing">
        ${template2}
       </div>
 
 
 
     </div>
      `;
  });
  // workshopContainer.innerHTML = template;
  bookingCont.innerHTML += template;
}
getLiveEvents();

let seat = document.getElementById("one");
const seats = document.querySelectorAll(".seats");
const vechile = document.getElementById("vechile");

let chooseseats = document.querySelector(".chooseseats");

chooseseats.addEventListener("mouseover", (e) => {
  if (e.target.innerText == "1") {
    vechile.src = "images/bycycle.png";
  } else if (e.target.innerText == "2") {
    vechile.src = "images/scooter.png";
  } else if (e.target.innerText == "3") {
    vechile.src = "images/auto.png";
  } else if (e.target.innerText == "4") {
    vechile.src = "images/minicar.png";
  } else if (e.target.innerText == "5") {
    vechile.src = "images/car.png";
  } else {
    vechile.src = "images/bus.png";
  }
});

const cut = document.getElementById("cut");
const termsandconditions = document.querySelector(".termsandconditions_body");
const cancelTermsAndConditions = document.querySelector(".cancel");
const accept = document.querySelector(".accept");
const chooseseatModal = document.querySelector(".chooseseats_body");
const time = document.querySelector(".movie_timing");
const theatrelocation = document.querySelector(".theatre_location");

cut.addEventListener("click", () => {
  termsandconditions.style.display = "none";
});

cancelTermsAndConditions.addEventListener("click", () => {
  termsandconditions.style.display = "none";
});

accept.addEventListener("click", () => {
  termsandconditions.style.display = "none";
  chooseseatModal.style.display = "block";
});

theatrelocation.addEventListener("click", (e) => {
  if (e.target.classList.contains("booking_timing")) {
    termsandconditions.style.display = "block";
  }
});





// async function getLiveEvents() {
//     let url = "theatre.json"
//     const res = await fetch(url)
//     const data = await res.json()
//     console.log(data)
//     let theatre = data.theatres
//     let theatreTime = data.theatres.Time;
//     console.log(theatreTime)
//     let template = ""
//     let template2= ""
//     theatre.forEach((ele) => {
//         let timeslots = ele.Time;
//         template += `
//   <div class = "workshop-events">
//    <h1>${ele.theatreName}</h1>
//   </div>
//       `
//       timeslots.forEach((ele)=>{
//         template +=`<p>${ele}</p>`
//     })
//     })
//     // workshopContainer.innerHTML = template;
//     workshopContainer.innerHTML += template
// }
// getLiveEvents()
