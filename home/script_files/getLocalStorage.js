function getLocalStorage() {
   return localStorage.getItem("home-data")? JSON.parse(localStorage.getItem("home-data")) : [{cardInde: 1, cardInfoNo:1}] ;
}

export default getLocalStorage;