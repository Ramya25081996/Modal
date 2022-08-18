var buttonElement=document.querySelectorAll(".heading-style");
console.log(buttonElement)
for(var i=0;i<buttonElement.length;i++){
    console.log(buttonElement[i])
    buttonElement[i].addEventListener('click',function(){
        var modal1=document.querySelector("#modal1");
         console.log(modal1);
        modal1.classList.remove("hidden");

    })
}
document.querySelector(".close-button").addEventListener('click',function(){
    document.querySelector("#modal1").classList.add("hidden");
})