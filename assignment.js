// feetToMile function
function feetToMile(feet){
    if(feet<0){
        var feetToMileMessage="Warning!! Length can not be negative";
        return feetToMileMessage;
    }
    var mile=feet/5280;
    return mile;
}

// woodCalculator finction
function woodCalculator(chair,table,bed){
    var woodCalculatorMessage;
    if(chair<0||table<0||bed<0||chair%1!=0||table%1!=0||bed%1!=0){
        woodCalculatorMessage="Warning!! Number of furnitures can not be negative or floating point number";
        return woodCalculatorMessage;
    }
    var chairWoodCount=chair*1;
    var tableWoodCount=table*3;
    var bedWoodCount=bed*5;
    var totalWoodCount=chairWoodCount+tableWoodCount+bedWoodCount;
    return totalWoodCount;
}

// brickCalculator function
function brickCalculator(numberOfFloors){
    var totalBrickCount;
    if(numberOfFloors<0||numberOfFloors%1!=0){
        var brickCalculatorMessage="Warning!! Number of floors can not be negative or floating point number"
        return brickCalculatorMessage;
    }
    else if(numberOfFloors<=10 && numberOfFloors>=0){
      totalBrickCount=numberOfFloors*15*1000;
    }
    else if(numberOfFloors<=20 && numberOfFloors>10){
      var numberOfFloorsAfterTen=numberOfFloors-10;
      totalBrickCount=10*15*1000+numberOfFloorsAfterTen*12*1000; 
    }
    else{
      var numberOfFloorsAfterTwenty=numberOfFloors-20;
      totalBrickCount=10*15*1000+10*12*1000+numberOfFloorsAfterTwenty*10*1000;
    }
    return totalBrickCount;
}

// tinyFriend function
function tinyFriend(friendsName){
    if(friendsName.length==0){
        var tinyFriendMessage="Warning!! Array for friends name can not be empty"
        return tinyFriendMessage;
    }
    var tinyFriendName=friendsName[0];
    for(var i=0;i<friendsName.length;i++){
      if(tinyFriendName.length>friendsName[i].length){
        tinyFriendName=friendsName[i];
      }
    }
    return tinyFriendName;
}
