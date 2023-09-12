var tablinkes=document.getElementsByClassName('tab-link');
var tabcontents =document.getElementsByClassName('tab-content');
function opentab(tabname){
    for(tablink of tablinkes){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
var sidemeu = document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right="0";
}
function closemenu(){
    sidemeu.style.right="-200px";
}