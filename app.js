let food1 = 0; let food2 = 0; let food3 = 0; let food4 = 0; let food5 = 0; let food6 = 0; let food7 = 0; let food8 = 0;
let order = 0;

function addItem(item) {
    if (item === 'food1' && food1 < 10) {
        food1 ++;
        document.getElementById("display-item-1").innerHTML = food1;
        console.log(food1);
    } else if (item === 'food2' && food2 < 10) {
        food2 ++;
        document.getElementById("display-item-2").innerHTML = food2;
        console.log(food2);
    } else if (item === 'food3' && food3 < 10) {
        food3 ++;
        document.getElementById("display-item-3").innerHTML = food3;
        console.log(food3);
    } else if (item === 'food4' && food4 < 10) {
        food4 ++;
        document.getElementById("display-item-4").innerHTML = food4;
        console.log(food4);
    } else if (item === 'food5' && food5 < 10) {
        food5 ++;
        document.getElementById("display-item-5").innerHTML = food5;
        console.log(food5);
    } else if (item === 'food6' && food6 < 10) {
        food6 ++;
        document.getElementById("display-item-6").innerHTML = food6;
        console.log(food6);
    } else if (item === 'food7' && food7 < 10) {
        food7 ++;
        document.getElementById("display-item-7").innerHTML = food7;
        console.log(food7);
    } else if (item === 'food8' && food8 < 10) {
        food8 ++;
        document.getElementById("display-item-8").innerHTML = food8;
        console.log(food8);
    }

}
function removeItem(item) {
    if (item === 'food1' && food1  > 0) {
        food1 --;
        document.getElementById("display-item-1").innerHTML = food1;
        console.log(food1);
    } else if (item === 'food2' && food2 > 0) {
        food2 --;
        document.getElementById("display-item-2").innerHTML = food2;
        console.log(food2);
    } else if (item === 'food3' && food3 > 0) {
        food3 --;
        document.getElementById("display-item-3").innerHTML = food3;
        console.log(food3);
    } else if (item === 'food4' && food4 > 0) {
        food4 --;
        document.getElementById("display-item-4").innerHTML = food4;
        console.log(food4);
    } else if (item === 'food5' && food5 > 0) {
        food5 --;
        document.getElementById("display-item-5").innerHTML = food5;
        console.log(food5);
    } else if (item === 'food6' && food6 > 0) {
        food6 --;
        document.getElementById("display-item-6").innerHTML = food6;
        console.log(food6);
    } else if (item === 'food7' && food7 > 0) {
        food7 --;
        document.getElementById("display-item-7").innerHTML = food7;
        console.log(food7);
    } else if (item === 'food8' && food8 > 0) {
        food8 --;
        document.getElementById("display-item-8").innerHTML = food8;
        console.log(food8);
    }

}

function clearOrder() {
    food1 = 0; food2 = 0; food3 = 0; food4 = 0; food5 = 0; food6 = 0; food7 = 0; food8 = 0;
    document.getElementById("display-item-1").innerHTML = food1;
    document.getElementById("display-item-2").innerHTML = food2;
    document.getElementById("display-item-3").innerHTML = food3;
    document.getElementById("display-item-4").innerHTML = food4;
    document.getElementById("display-item-5").innerHTML = food5;
    document.getElementById("display-item-6").innerHTML = food6;
    document.getElementById("display-item-7").innerHTML = food7;
    document.getElementById("display-item-8").innerHTML = food8;
    console.log(food1, food2, food3, food4, food5, food6, food7, food8);
}

function sendOrder() {
    let order = {
        food1: food1,
        food2: food2,
        food3: food3,
        food4: food4,
        food5: food5,
        food6: food6,
        food7: food7,
        food8: food8,
    }
}
console.log(order);