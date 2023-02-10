import getLocalStorage from "./getLocalStorage";

function populateHomeInfo(info){
     const img = document.getElementById('house-img');
     const price = document.getElementById('house-price')
     const agentName = document.getElementById('agent-name')
     const agentImg = document.getElementById('agent-img')
     const houseName = document.getElementById('house-name')
     const houseLocation = document.getElementById('house-location');
     const houseDescription = document.querySelector('#house-information');
     const landSize = document.getElementById('landscape_size');
     const power_time = document.getElementById('power_number');
     const bedNo = document.getElementById('room_number')
     let indices = getLocalStorage();
     img.setAttribute("src", `${info[indices.cardIndex].agent_listings[indices.cardInfoNo].house_image}.jpg`)
     price.textContent = `$${info[indices.cardIndex].agent_listings[indices.cardInfoNo].house_price}`
     agentName.textContent = info[indices.cardIndex].agent_name
     agentImg.setAttribute("src", `${info[indices.cardIndex].agent_image}.jpg`)
     power_time.textContent = `${info[indices.cardIndex].agent_listings[indices.cardInfoNo].light_time}hr/day.`;
     landSize.textContent = `${info[indices.cardIndex].agent_listings[indices.cardInfoNo].house_land_size} hectres.`;
     bedNo.textContent = `${info[indices.cardIndex].agent_listings[indices.cardInfoNo].no_of_bedrooms}`
     houseName.textContent = `${info[indices.cardIndex].agent_listings[indices.cardInfoNo].house_name} Homes.`;
     houseLocation.textContent = info[indices.cardIndex].agent_listings[indices.cardInfoNo].house_location;
     houseDescription.textContent = info[indices.cardIndex].agent_listings[indices.cardInfoNo].house_description;

}

export default populateHomeInfo;