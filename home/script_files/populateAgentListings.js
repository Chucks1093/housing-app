import getLocalStorage from "./getLocalStorage";

function populateAgentListings(info){
     const agentListings = document.querySelectorAll('#agent-profile-item');
     agentListings.forEach((listing,index) => {
          const listingImg = listing.querySelector('#agent-listing-image');
          const listingName = listing.querySelector('#agent-listing-house-name');
          const listingAgent = listing.querySelector('#agent-listing-name');
          const listingLocation = listing.querySelector('#agent-listing-location');
          const listingBtn = listing.querySelector('#agent-listing-btn');
          const indices = getLocalStorage();
          listingImg.setAttribute("src", `${info[indices.cardIndex].agent_listings[index].house_image}.jpg`);
          listingName.textContent = `${info[indices.cardIndex].agent_listings[index].house_name}.`;
          listingAgent.textContent = `${info[indices.cardIndex].agent_name}.`;
          listingLocation.textContent =`${info[indices.cardIndex].agent_listings[index].house_location}.`;
          listingBtn.addEventListener("click", ()=>{
               localStorage.setItem("home-data", JSON.stringify({cardIndex: indices.cardIndex, cardInfoNo: index}))
          })
     })

     
}

export default populateAgentListings;