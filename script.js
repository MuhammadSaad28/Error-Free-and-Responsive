// For the mobile navigation
window.addEventListener("resize", function(){
  addRequiredClasses();
  hamberger.textContent = '☰' ;
});
// window.addEventListener("load", function(){
//   addRequiredClasses();
// });

// Function to add required classes to the body
function addRequiredClasses()
{
  let mobileNav = document.querySelector('.nav-list');
  if(window.innerWidth < 900)
    {
      mobileNav.style.display = 'none';
      // document.body.classList.add('mobile');
    }
    else
    {
      mobileNav.style.display = 'flex';
      // document.body.classList.remove('mobile');
    }
  }
  // For the first time when the page loads
  addRequiredClasses();

// For the mobile navigation
let hamberger = document.querySelector('.hamberger');
let mobileNav = document.querySelector('.nav-list');

// Hamberger icon
hamberger.textContent = '☰' ;
hamberger.addEventListener('click', ()=>{
  // Navbar toggling
  mobileNav.style.display = mobileNav.style.display === 'none' ? 'block' : 'none';
  hamberger.textContent = hamberger.textContent === '☰' ? '✖' : '☰';
  
  // let isActive = false
    // let bars = document.querySelectorAll('.hamberger span');
  
  // if(!isActive)
  // {
  //   bars[0].style.transform = 'rotate(45deg)';
  //   bars[1].style.opacity = '0'
  //   bars[2].style.transform = 'rotate(-45deg)';
  //   isActive = true
  // }
  // else
  // {
  //   bars[0].style.transform = 'rotate(0deg)';
  //   bars[1].style.opacity = '1'
  //   bars[2].style.transform = 'rotate(0deg)';
  //   isActive = false
  // }
});
