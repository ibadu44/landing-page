let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }

});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop:true,
  autoplay:{
    delay: 3000,
    disableOnInteraction:false,
  }
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop:true,
    spaceBetween: 10,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },    
    },
    autoplay:{
      delay: 5000,
      disableOnInteraction:false,
  }
});

// Your existing JavaScript code

// Add the following code for hover animation
document.querySelectorAll('.photosa img, .new-photos img').forEach(img => {
  img.addEventListener('mouseenter', () => {
      img.style.transform = 'rotate(360deg)'; // Rotate 360 degrees on hover
  });

  img.addEventListener('mouseleave', () => {
      img.style.transform = 'rotate(0deg)';
  });
});

document.querySelectorAll('.service .box-container .box').forEach(box => {
  box.addEventListener('mouseover', () => {
    box.classList.add('flip');
  });

  box.addEventListener('mouseout', () => {
    box.classList.remove('flip');
  });
});

document.querySelectorAll('.service .box-container .box').forEach(box => {
  box.addEventListener('mouseover', () => {
      box.querySelector('.box-content').classList.add('flip');
  });

  box.addEventListener('mouseout', () => {
      box.querySelector('.box-content').classList.remove('flip');
  });
});

document.querySelectorAll('.open-form-btn').forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        const form = btn.parentElement.querySelector('.event-form');
        
        // Toggle the visibility of the form
        form.style.display = form.style.display === 'none' || form.style.display === '' ? 'block' : 'none';

        // If the form is displayed, dynamically create RSVP fields
        if (form.style.display === 'block') {
            const rsvpNumber = form.querySelector('#rsvpNumber').value;
            const rsvpFieldsContainer = form.querySelector('#rsvpFields');
            rsvpFieldsContainer.innerHTML = '';

            for (let i = 0; i < rsvpNumber; i++) {
                const rsvpField = document.createElement('div');
                rsvpField.className = 'rsvp-field';
                rsvpField.innerHTML = `
                    <label for="rsvpName${i}">RSVP ${i + 1} Name:</label>
                    <input type="text" id="rsvpName${i}" name="rsvpName${i}" required>
                    <label for="rsvpPhone${i}">RSVP ${i + 1} Phone:</label>
                    <input type="tel" id="rsvpPhone${i}" name="rsvpPhone${i}" required>
                `;
                rsvpFieldsContainer.appendChild(rsvpField);
            }
        }
    });
});

// Add an event listener to update RSVP fields when the number of RSVPs changes
document.querySelectorAll('.event-form #rsvpNumber').forEach(input => {
    input.addEventListener('input', () => {
        const form = input.closest('.event-form');
        const rsvpFieldsContainer = form.querySelector('#rsvpFields');
        rsvpFieldsContainer.innerHTML = ''; // Clear existing fields

        const rsvpNumber = input.value;
        for (let i = 0; i < rsvpNumber; i++) {
            const rsvpField = document.createElement('div');
            rsvpField.className = 'rsvp-field';
            rsvpField.innerHTML = `
                <label for="rsvpName${i}">RSVP ${i + 1} Name:</label>
                <input type="text" id="rsvpName${i}" name="rsvpName${i}" required>
                <label for="rsvpPhone${i}">RSVP ${i + 1} Phone:</label>
                <input type="tel" id="rsvpPhone${i}" name="rsvpPhone${i}" required>
            `;
            rsvpFieldsContainer.appendChild(rsvpField);
        }
    });
});

// Event Selection Page
// Event Selection Page
// Event Selection Page
// Event Selection Page
// Event Selection Page
if (document.getElementById("eventPage")) {
  const progressEvent = document.getElementById("progressEvent");
  animateProgressBar(progressEvent, 0, 0); // Start and target levels set to 0
}

// Venue Selection Page
if (document.getElementById("venuePage")) {
  const progressVenue = document.getElementById("progressVenue");
  
  animateProgressBar(progressVenue, 1, 2); // Start at 1, target level set to 2
}

// Cuisine Selection Page
if (document.getElementById("cuisinePage")) {
  const progressCuisine = document.getElementById("progressCuisine");
  
  animateProgressBar(progressCuisine, 2, 3); // Start at 2, target level set to 3
}

// Common function to animate the progress bar
function animateProgressBar(progressElement, startLevel, targetLevel) {
  const levelWidth = 100 / 8; // Assuming 8 levels in total
  const targetWidth = targetLevel * levelWidth;
  const animationDuration = 1000;

  const startTime = performance.now();

  function updateWidth(timestamp) {
      const elapsed = timestamp - startTime;
      const progress = elapsed / animationDuration;
      const width = startLevel * levelWidth + progress * (targetWidth - startLevel * levelWidth);

      // Update the progress bar width
      progressElement.style.width = `${width}%`;

      if (progress < 1) {
          requestAnimationFrame(updateWidth);
      }
  }

  requestAnimationFrame(updateWidth);
}


document.addEventListener('DOMContentLoaded', function () {
  // Get the buttons and additional pictures container
  var seeMoreBtn = document.getElementById('seeMoreBtn');
  var confirmBtn = document.getElementById('confirmBtn');
  var confirmBtnAfterPictures = document.getElementById('confirmBtnAfterPictures');
  var additionalPictures = document.getElementById('additionalPictures');

  // Add click event listener for "See more pictures" button
  seeMoreBtn.addEventListener('click', function () {
      // Toggle the visibility of additional pictures
      additionalPictures.style.display = additionalPictures.style.display === 'none' ? 'block' : 'none';

      // Change button text based on visibility
      seeMoreBtn.innerText = additionalPictures.style.display === 'none' ? 'See more pictures' : 'Hide pictures';

      // Show the second "Confirm your venue" button when pictures are visible
      if (additionalPictures.style.display === 'block') {
          confirmBtnAfterPictures.style.display = 'inline-block';
      } else {
          confirmBtnAfterPictures.style.display = 'none';
      }
  });

  // Add click event listener for "Confirm your venue" button before pictures
  confirmBtn.addEventListener('click', confirmVenue);

  // Add click event listener for "Confirm your venue" button after pictures
  confirmBtnAfterPictures.addEventListener('click', confirmVenue);

  function confirmVenue() {
      // Add your confirmation logic here
      alert('Your venue is confirmed!');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var seeMoreBtn = document.getElementById('seeMoreBtn');
  var row1 = document.getElementById('row1');
  var row2 = document.getElementById('row2');
  
  seeMoreBtn.addEventListener('click', function () {
      // Toggle the visibility of the rows
      row1.style.display = row1.style.display === 'none' ? 'flex' : 'none';
      row2.style.display = row2.style.display === 'none' ? 'flex' : 'none';

      // Change button text based on visibility
      seeMoreBtn.innerText = row1.style.display === 'none' ? 'See more pictures' : 'Hide pictures';
  });
});



document.addEventListener('DOMContentLoaded', function () {
  var seeMoreBtn2 = document.getElementById('seeMoreBtn2');
  var confirmBtn2 = document.getElementById('confirmBtn2');
  var additionalPictures2 = document.getElementById('additionalPictures2');
  var confirmBtnAfterPictures2 = document.getElementById('confirmBtnAfterPictures2');

  // Hide pictures initially
  additionalPictures2.style.display = 'none';

  seeMoreBtn2.addEventListener('click', function () {
    // Toggle the visibility of additional pictures in the second box
    additionalPictures2.style.display = additionalPictures2.style.display === 'none' ? 'block' : 'none';

    // Change button text based on visibility
    seeMoreBtn2.innerText = additionalPictures2.style.display === 'none' ? 'See more pictures' : 'Hide pictures';

    // Show the second "Confirm your venue" button when pictures are visible
    confirmBtnAfterPictures2.style.display = additionalPictures2.style.display === 'block' ? 'inline-block' : 'none';
  });

  // Add click event listener for "Confirm your venue" button in the second box
  confirmBtn2.addEventListener('click', function () {
    confirmVenue();
  });

  // Add click event listener for "Confirm your venue" button after pictures in the second box
  confirmBtnAfterPictures2.addEventListener('click', function () {
    confirmVenue();
  });

  function confirmVenue() {
    // Add your confirmation logic here
    alert('Your venue is confirmed!');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var seeMoreBtn3 = document.getElementById('seeMoreBtn3');
  var confirmBtn3 = document.getElementById('confirmBtn3');
  var additionalPictures3 = document.getElementById('additionalPictures3');
  var confirmBtnAfterPictures3 = document.getElementById('confirmBtnAfterPictures3');

  // Hide pictures initially
  additionalPictures3.style.display = 'none';

  seeMoreBtn3.addEventListener('click', function () {
    // Toggle the visibility of additional pictures in the second box
    additionalPictures3.style.display = additionalPictures3.style.display === 'none' ? 'block' : 'none';

    // Change button text based on visibility
    seeMoreBtn3.innerText = additionalPictures3.style.display === 'none' ? 'See more pictures' : 'Hide pictures';

    // Show the second "Confirm your venue" button when pictures are visible
    confirmBtnAfterPictures3.style.display = additionalPictures3.style.display === 'block' ? 'inline-block' : 'none';
  });

  // Add click event listener for "Confirm your venue" button in the second box
  confirmBtn3.addEventListener('click', function () {
    confirmVenue();
  });

  // Add click event listener for "Confirm your venue" button after pictures in the second box
  confirmBtnAfterPictures3.addEventListener('click', function () {
    confirmVenue();
  });

  function confirmVenue() {
    // Add your confirmation logic here
    alert('Your venue is confirmed!');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var seeMoreBtn4 = document.getElementById('seeMoreBtn4');
  var confirmBtn4 = document.getElementById('confirmBtn4');
  var additionalPictures4 = document.getElementById('additionalPictures4');
  var confirmBtnAfterPictures4 = document.getElementById('confirmBtnAfterPictures4');

  // Hide pictures initially
  additionalPictures4.style.display = 'none';

  seeMoreBtn4.addEventListener('click', function () {
    // Toggle the visibility of additional pictures in the second box
    additionalPictures4.style.display = additionalPictures4.style.display === 'none' ? 'block' : 'none';

    // Change button text based on visibility
    seeMoreBtn4.innerText = additionalPictures4.style.display === 'none' ? 'See more pictures' : 'Hide pictures';

    // Show the second "Confirm your venue" button when pictures are visible
    confirmBtnAfterPictures4.style.display = additionalPictures4.style.display === 'block' ? 'inline-block' : 'none';
  });

  // Add click event listener for "Confirm your venue" button in the second box
  confirmBtn4.addEventListener('click', function () {
    confirmVenue();
  });

  // Add click event listener for "Confirm your venue" button after pictures in the second box
  confirmBtnAfterPictures4.addEventListener('click', function () {
    confirmVenue();
  });

  function confirmVenue() {
    // Add your confirmation logic here
    alert('Your venue is confirmed!');
  }
});


document.addEventListener('DOMContentLoaded', function () {
  var seeMoreBtn5 = document.getElementById('seeMoreBtn5');
  var confirmBtn5 = document.getElementById('confirmBtn5');
  var additionalPictures5 = document.getElementById('additionalPictures5');
  var confirmBtnAfterPictures5 = document.getElementById('confirmBtnAfterPictures5');

  // Hide pictures initially
  additionalPictures5.style.display = 'none';

  seeMoreBtn5.addEventListener('click', function () {
    // Toggle the visibility of additional pictures in the second box
    additionalPictures5.style.display = additionalPictures5.style.display === 'none' ? 'block' : 'none';

    // Change button text based on visibility
    seeMoreBtn5.innerText = additionalPictures5.style.display === 'none' ? 'See more pictures' : 'Hide pictures';

    // Show the second "Confirm your venue" button when pictures are visible
    confirmBtnAfterPictures5.style.display = additionalPictures5.style.display === 'block' ? 'inline-block' : 'none';
  });

  // Add click event listener for "Confirm your venue" button in the second box
  confirmBtn5.addEventListener('click', function () {
    confirmVenue();
  });

  // Add click event listener for "Confirm your venue" button after pictures in the second box
  confirmBtnAfterPictures5.addEventListener('click', function () {
    confirmVenue();
  });

  function confirmVenue() {
    // Add your confirmation logic here
    alert('Your venue is confirmed!');
  }
});


