
//partie heart
let hearts = document.getElementsByClassName('fa');
console.log(hearts)
for (let heart of hearts){
  heart.addEventListener('click', function(){

        if ( heart.style.color === "grey"){
         heart.style.color = "red"
        } else {
         heart.style.color ="grey"
        }
}   )     
}

// Remove
let remove = document.getElementsByClassName('remove');
for(let i=0;i<remove.length;i++) {
    remove[i].addEventListener('click',function(){
        remove[i].parentElement.parentElement.remove()
        TotalPrice();
    })
}

// minusbutton
let minusbtn = document.getElementsByClassName("mbtn");

for (let i=0;i<minusbtn.length;i++){

    
    minusbtn[i].addEventListener("click",function(){
        if(minusbtn[i].nextElementSibling.innerText >0){
            minusbtn[i].nextElementSibling.innerText --;
        }

        TotalPrice();
console.log(TotalPrice)
    })
}

// Plusbutton
let plusbtn = document.getElementsByClassName("pbtn");

for (let i=0;i<plusbtn.length;i++){

    plusbtn[i].addEventListener("click",function(){
        plusbtn[i].previousElementSibling.innerText ++;

        TotalPrice();

    })
  
}

// Total
function TotalPrice() {
     let ProductPrice = document.getElementsByClassName('amount');
     let ProductQuantity = document.getElementsByClassName('count');
    let sum=0;
     for (let i=0;i<ProductPrice.length;i++){
        sum += ProductPrice[i].innerText * ProductQuantity[i].innerText;
     }
     document.getElementById ('TotalPrice').innerText = sum;
}


  