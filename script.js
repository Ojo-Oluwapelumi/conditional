// console.log("i have worked ");
// var drink = 'fanta'

// if(drink == 'sprite') {
//     Show.innerHTML ="Buy fanta"
// } else{
//     Show.innerHTML = "sha buy fanta for me"
// }

// var food = "fufu"

// if (food == "amala"){
//     Show.innerHTML = "buy 8 wraps"
// } else if(food =="eba") {
//     Show.innerHTML = "buy ila/egusi"
// } else if (food ==" iyan") {
//     Show.innerHTML = "buy efo riro/egusi"
// } else{
//     Show.innerHTML = "buy me bread and beans with chilled fanta"
// }
// function checkValue(){
//     if (Number.value =="") {
//         alert("please fill in the empty space")
//     }
// }
function checkValue(){
    if (num.value !="") {
        if(num.value >= 0 && num. value < 40){
        console.log("F😭 you failed");
        document.getElementById("show").innerHTML = "F😭 you failed"
        }else if(num.value >= 40 && num.value < 45){
            console.log("E 😭 you are still not there yet. ");
            document.getElementById ("show").innerHTML = "E 😭 you are still not there yet."
        } else if (num.value >= 45 && num.value < 50){
            console.log("D🤦‍♂️ this you big head can do better na! 🤦‍♂️");
            document.getElementById("show").innerHTML = "D🤦‍♂️ this you big head can do better na! 🤦‍♂️";
        }else if (num.value >= 50 && num.value <60){
            console.log("C! 👍you can do better, there is more in your head than this.!  ");
            document.getElementById ("show").innerHTML = "C! 👍you can do better, there is more in your head than this.!  ";
        } else if (num.value >= 60 && num.value <70) {
        console.log("B! put more effort😊");
            document.getElementById("show").innerHTML = "B! put more effort😊";
        } else if (num.value >= 60 && num.value <= 100){
            console.log("A+ ❤️💯 EXCELLENT PERFORMANCE! keep it up");
            document.getElementById ("show").innerHTML = "A+ ❤️💯 EXCELLENT PERFORMANCE! keep it up"
        }
    } else  {
     alert("please fill in the empty space")
    }
}
