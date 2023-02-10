
function showMore(){
     const showBtn = document.getElementById('show-btn');
     let visible = false;
     const showText = document.getElementById('show-text');
     const showIcon = showBtn.children[0].children[0];
     const houseDescription = document.querySelector('#house-information');
     const shadow = showText.parentElement;

     showBtn.addEventListener("click", ()=>{
          visible = !visible;
          visible? showText.textContent="Show Less" : showText.textContent="See More";
          houseDescription.classList.toggle('h-auto');
          shadow.classList.toggle('shadow-none')
          showIcon.classList.toggle('ri-arrow-up-s-line')
     })
}

export default showMore;