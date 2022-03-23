// Write your Javascript here
let pics = [
  "images/dog_balcony.jpg", //0
  "images/dog_pet.jpg",     //1
  "images/dog_pool.jpg",    //2
  "images/dog_sleepy.jpg"       //3
                            //4
];

let btn = document.querySelector("button");
let img = document.querySelector("img");
let counter = 1;

btn.addEventListener("click", function(){
    if(counter === 4){
      counter = 0;
    }
    img.src = pics[counter]
    counter = counter + 1;
});
