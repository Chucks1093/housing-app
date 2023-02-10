import randomHomeIndex from "./randomHomeIndex";

function populateNearCards(info){
     const nearByCards = document.querySelectorAll('#nearby-card');
     let called = [];
     nearByCards.forEach((card,index)=>{
          let i = randomHomeIndex(5);
          called.includes(i)? i= randomHomeIndex(5) : i;
          called.push(i)
          const z = randomHomeIndex(3);
          const cardImage = card.querySelector('#house-image');
          const cardName = card.querySelector('#house_name');
          const cardAgent = card.querySelector('#house_agent');
          const cardLocation = card.querySelector('#house_location');
          const cardBtn = card.querySelector('#enter');
          cardImage.setAttribute("src", `${info[i].agent_listings[z].house_image}.jpg`);
          cardName.textContent = info[i].agent_listings[z].house_name;
          cardAgent.textContent = info[i].agent_name;
          cardLocation.textContent = info[i].agent_listings[z].house_location;
          cardBtn.addEventListener("click", ()=>{
               localStorage.setItem("home-data", JSON.stringify({cardIndex:i,cardInfoNo: z }))
          })
     })
}

export default populateNearCards;