import barba from '@barba/core';
import gsap from 'gsap';
import populateCard from './home/script_files/populateCards';
import showMore from './home/script_files/showMore';
import homes_categories from './home/script_files/homes_categories';
import populateNearCards from './home/script_files/populateNearCards';
import populateHomeInfo from './home/script_files/populateHomeInfo';
import populateAgentPage from './home/script_files/populateAgentPage';
import populateAgentListings from './home/script_files/populateAgentListings';
import openProfile from './home/script_files/openProfile';


function animationOnce(cover){
     const logo = cover.children[0].children[0];
     const word = cover.children[1];
     const image = cover
     const homeLogo = document.querySelector("#home-logo")
     const tl = gsap.timeline();

     tl
          .from(logo, {yPercent: 200, duration: 2.3, ease:"Expo.easeInOut" } )
          .from(word, {autoAlpha: 0, duration: 2.3}, "+=.2")
          .to(word, {autoAlpha:0, duration:1, delay:3})
          .to(cover, { clipPath: "inset(0 100% 0 0)" , duration:.7, ease:"power4.out"})
          .from(homeLogo, {yPercent:100, duration:1})
          
          .set(logo, {autoAlpha:0}, "+=1")
          .set(word, {autoAlpha: 0})
     return tl
}

function animationOnceImage(cover){
     const pageCover = cover.querySelector('#cover-page')
     const logo = pageCover.querySelector('#logo-cover');
     const word = pageCover.querySelector('#quote');
     const image = cover.querySelector('#house-img')
     
     const tl = gsap.timeline();
     tl
          .from(logo, {yPercent: 200, duration: 2.3, ease:"Expo.easeInOut" } )
          .from(word, {autoAlpha: 0, duration: 2.3}, "+=.2")
          .to(word, {autoAlpha:0, duration:1, delay:2})
          .to(pageCover, { clipPath: "inset(0 100% 0 0)" , duration:.7, ease:"power4.out"})
          .from(image, {scale:1.5, duration:1.8, ease: "power3.out"}, "-=0.8")
          .set(logo, {autoAlpha:0}, "+=1")
          .set(word, {autoAlpha: 0})
     return tl
}

function animationEnterImage(cover){
     const pageCover = cover.querySelector('#cover-page')
     const logo = pageCover.querySelector('#logo-cover');
     const word = pageCover.querySelector('#quote');
     const image = cover.querySelector('#house-img')
     
     const tl = gsap.timeline();
     tl
          .from(logo, {yPercent: 100, duration: 1.3, ease:"Expo.easeInOut" })
          .from(word, {autoAlpha: 0, duration: 1.3}, "+=.2")
          .to(word, {autoAlpha:0, duration:1, delay:2})
          .to(pageCover, { clipPath: "inset(0 0 0 100%)" , duration:.7, ease:"Expo.easeInOut"})
          .from(image, {scale:1.5, duration:1.8, ease: "power3.out"}, "-=0.8")
          .set(logo, {autoAlpha:0}, "+=1")
          .set(word, {autoAlpha: 0})
     return tl
}

function animationEnter(cover){
     const logo = cover.children[0].children[0];
     const word = cover.children[1];
     const tl = gsap.timeline();
     tl
          .from(logo, {yPercent: 100, duration: 1.3, ease:"Expo.easeInOut" } )
          .from(word, {autoAlpha: 0, duration: 1.3}, "+=.2")
          .to(word, {autoAlpha:0, duration:1, delay:2})
          .to(cover, { clipPath: "inset(0 0 0 100%)" , duration:.7, ease:"Expo.easeInOut"})
          .set(logo, {autoAlpha:0}, "+=1")
          .set(word, {autoAlpha: 0})
     return tl
}


function animationLeave(done){
     const cover = document.getElementById("cover-page")
     return gsap.to(cover, { clipPath: "inset(0 0% 0 0)" , duration:.7, ease:"Expo.easeInOut", onComplete:()=>done()})
}

barba.hooks.beforeEnter(() => {
     window.scrollTo(0,0)
})


barba.init({
     transitions: [
          {
               name : "home-page",
               to : {
                    namespace : ["home-page"]
               },
               once({next}){
                    animationOnce(next.container.children[0])
                    populateCard(homes_categories)
                    populateNearCards(homes_categories)
                    openProfile()
               },
               leave({current}){
                    gsap.set(current.container.children[0],{
                         clipPath : "inset(0 100% 0 0)"
                    })
                    console.log(current.container.children[0])
                    const done = this.async();
                    animationLeave(done);

               },
               enter({next}) {
                    animationEnter(next.container.children[0])
                    populateCard(homes_categories)
                    populateNearCards(homes_categories)
                    openProfile()
               }
          },
          {
               name : "home-info-page",
               to : {
                    namespace : ["home-info-page"]
               },
               once({next}){
                    animationOnceImage(next.container)
                    populateHomeInfo(homes_categories)
               
                    showMore()
               },
               leave({current}){
                    gsap.set(current.container.children[0],{
                         clipPath : "inset(0 100% 0 0)"
                    })
                    const done = this.async();
                    animationLeave(done)
               },
               enter({next}) {
                    animationEnterImage(next.container)
                    populateHomeInfo(homes_categories)
                    showMore()
               }
          },
          {
               name : "agent-page",
               to : {
                    namespace : ["agent-page"]
               },
               once({next}){
                    animationOnce(next.container.children[0])
                    populateAgentPage(homes_categories)
                    populateAgentListings(homes_categories)
               },
               leave({current}){
                    gsap.set(current.container.children[0],{
                         clipPath : "inset(0 100% 0 0)"
                    })
                    const done = this.async();
                    animationLeave(done)
               },
               enter({next}) {
                    animationEnter(next.container.children[0])
                    populateAgentPage(homes_categories)
                    populateAgentListings(homes_categories)
               }

          }
     ]
})