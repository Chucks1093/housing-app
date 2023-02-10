import gsap from "gsap";

function openProfile() {
     const profileCover = document.querySelector('#profile-cover');
     const profileDetails = document.querySelector('#profile-details');
     const profileBtn = document.querySelector('#profile-btn');
     const notification = profileBtn.querySelector('#notification');
     
     profileBtn.addEventListener("click", ()=>{
          profileCover.style.zIndex = "20";
          gsap.to(profileCover,{opacity: 1, duration:1})
          gsap.to(profileDetails, {yPercent:-100, opacity: 1, duration:.5, ease:"Expo.easeInOut"})
          notification.style.display = "none";
     })
     profileCover.addEventListener("click", ()=> {
          gsap.to(profileDetails, {yPercent:0, opacity: 0, duration:.5, ease:"none"})
          gsap.to(profileCover, {opacity:0, duration:.3})
          profileCover.style.zIndex = "-20";

     })
}

export default openProfile;