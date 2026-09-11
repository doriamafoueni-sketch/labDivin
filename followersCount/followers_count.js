let count = 0;
function increaseCount() {
    count ++;
    displayCount(); // afficher le compte
    checkCountValue(); // verifier la valeur de count
}
function displayCount(){
    document.getElementById("countDisplay").innerHTML=count;
}
function  checkCountValue(){
    if (count === 10){
        alert("Votre publication Instagram a gagné 10 abonnés ! Félicitations");
    } else if(count === 20){
        alert("Votre publication Instagram a gagné 20 abonnés ! Félicitations");
    } else if (count === 40){
        alert("Votre publication Instagram a gagné 20 abonnés ! Félicitations");
    }
}