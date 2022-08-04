

//  show image and infor for hero section 


let placeStorage = [
    {
        id : "1",
        name: "Machu Picchu, Peru",
        des: "Built in the 15th century AD..",
        img: "./image/top-places-to-visit-in-the-world-machu-picchu-peru.jpg",
    },
        {
            id: "2",
            name: "The Grand Canyon, Arizona",
            des: "With geology formed over the past two billion..",
            img: "./image/world-best-places-to-visit-in-the-world-grand-canyon-snow-patches.jpg",
        },

            {
                id: "3",
                name: "Maui, Hawaii",
                des: "This Hawaiian island offers a wide..",
                img: "./image/top-places-to-visit-in-the-world-maui-hawaii.jpg",
            },

                {
                    id: "4",
                    name: "Istanbul, Turkey",
                    des: "Turkey's capital city is another destination..",
                    img: "./image/top-places-to-visit-in-the-world-istanbul-turkey.jpg",
                },

]



    let leftBtn  = document.querySelector('.left');
    let rightBtn = document.querySelector('.right');
    let locationPlace = document.querySelector('.location_place');
    let locationName = document.querySelector('.hero_name');
    let locatinDes = document.querySelector('.hero_des');
    let mainWrapper = document.querySelector('.wrapper');

    let placeImage;
    let placeName;
    let placeDes;
const countFn = (count) => {
        placeImage = placeStorage[count].img;
        placeName = placeStorage[count].name;
        placeDes = placeStorage[count].des;
     return placeImage,placeName,placeDes
}



let count  = 0;

rightBtn.addEventListener('click',() => {
    count += 1;
    for (let i = 0; i < placeStorage.length; i++) {
        if(count >  3) {
            count = 0;
           countFn(count);
        }else{
           countFn(count);
             
        }
         
        
        
    }
  locationPlace.style.backgroundImage = `url(${placeImage})`;
  locationName.innerHTML = placeName;
  locatinDes.innerHTML = placeDes;
  mainWrapper.style.backgroundImage = `url(${placeImage})`;
})


// scroll reveal start 

ScrollReveal({

    distance : "30px",
    duration : 2800,
    reset : true,
})


ScrollReveal().reveal('.first_pair,.reveal_img_four,.reveal_explore,.booking_image,.rely,.reveal_img_one,.reveal_contact', {
    origin : 'left',
    delay:150
})
ScrollReveal().reveal('.second_pair,.booking_form,.reveal_book,.reveal_choose,.reveal_img_three,.reveal_footer_two,.nav', {
    origin: 'top',
    delay:200
})
ScrollReveal().reveal('.third_pair,.reveal_amaze,.reveal_img_two,.reveal_img_five,.contact_image,.reveal_footer_three,.location_name,.fourth_pair', {
    origin: 'bottom',
})


ScrollReveal().reveal('.reveal_item_one,.reveal_footer_one,.location_place', {
    
    origin: 'left',
    delay: 500,
})
ScrollReveal().reveal('.reveal_item_two,.contact_form,.reveal_footer_four,.reveal_item_three', {
    
    origin: 'top',
    delay: 300,
})


// nav bar show and hide start 

let toggleBar = document.querySelector('.bar');
let navIndicator = document.querySelector('.nav_indicator');


toggleBar.addEventListener('click',() => {
    navIndicator.classList.toggle('nav_active');
})