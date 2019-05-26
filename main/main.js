module.exports = function main(inputs) {
    // write your code here...
    if(!checkInput(inputs)){
        return 'Input error';
    }
    let price = 6;
    price+=priceOfDistance(inputs.distance);
    price+=priceOfParking(inputs.parkTime);
    return Math.round(price);
};

function priceOfDistance(distance){
    if(distance<=2){
        return 0;
    }else if(distance<=8){
        return 0.8*(distance-2);
    }else{
        return 0.8*6+1.2*(distance-8);
    }
}

function priceOfParking(parkTime){
    return 0.25*parkTime;
}

function checkInput(inputs){
        if(isNaN(inputs.distance)||isNaN(inputs.parkTime)){
        return null;
    }
    if(inputs.distance<0||inputs.parkTime<0){
        return null;
    }
    return 1;
}