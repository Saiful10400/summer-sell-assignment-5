let bigBtn = document.getElementById("bigBtn");
bigBtn.style.color = "white";
bigBtn.style.background = "pink";
let totalPrice = 0;
let totalPricefraction=0
let smallBtn=document.getElementById("smallBtn")
smallBtn.style.color="white"
smallBtn.style.background="pink"
let smalinput=document.getElementById("smalinput")
let Discount=document.getElementById("Discount")
let total=document.getElementById("total")
let productadding=document.getElementById("productadding")


function assignValu(id) {
  let childs = id.childNodes;
  let productName = childs[5].innerText;
  let pricestrings = childs[7].innerText;
  let pricestring = pricestrings.split(" ")[0];
  let price = parseInt(pricestring);

// optional
id.style.border="2px solid gray"

//   NAME
let serialnocount=productadding.childElementCount
let serialno=serialnocount+1


let h1=document.createElement("h1")
let nameWithSeriul=serialno+"."+" "+productName
h1.innerText=nameWithSeriul

productadding.appendChild(h1)





  //price
  totalPrice = price + totalPrice;
  totalPricefraction=totalPrice.toFixed(2)


  

  let totalpriceHtml = document.getElementById("totalPrice");
  totalpriceHtml.innerText = totalPricefraction;

  if (totalPrice > 0) {
    bigBtn.removeAttribute("disabled");
    bigBtn.style.color = "white";
    bigBtn.style.background = "#E527B2";
  }

  if(totalPrice>=200){
    smallBtn.removeAttribute("disabled")
    smallBtn.style.color = "white";
    smallBtn.style.background = "#E527B2";
    smalinput.removeAttribute("disabled")
    
  }
}

// apply btn function.

function applyCupon(){

    if(smalinput.value == "SELL200"){
        let goteddiscount=totalPricefraction*0.2
        let discountPrice=totalPricefraction-goteddiscount

        Discount.innerText=goteddiscount.toFixed(2)
        total.innerText=discountPrice.toFixed(2)
    }
    else{
        alert("invalid cupon code.")
    }
}

let homeBtn=document.getElementById("homeBtn")

homeBtn.addEventListener("click",function(){
    window.location.reload()
})
