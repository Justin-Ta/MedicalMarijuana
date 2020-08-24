var amountInCart= 0;
document.getElementById('Remove').onclick= function(){
    amountInCart--;
    document.getElementById('Amount').innerHTML=amountInCart;
}
document.getElementById('Add').onclick= function(){
    amountInCart++;
    document.getElementById('Amount').innerHTML=amountInCart;
}


document.getElementById('addToCart').onclick=function(){
document.getElementById('item__number').innerHTML=amountInCart;
}