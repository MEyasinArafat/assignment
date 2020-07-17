//feetToMile
function feetToMile(feet){
    var mile=feet/5280;
    return mile;
}
var result=feetToMile(1);
console.log(result);


//woodCalculator
function woodCalculator(chair,table,bed){
   var chairWood=chair*1;
   var tableWood=table*5;
   var bedWood=bed*10; //number of chairs,tables and beds are 10,10,4 respectively 
   var totalWoodFeet=(chairWood+tableWood+bedWood);
   return totalWoodFeet;
   
}
var totalWoodFeet= woodCalculator (10,10,4);
console.log(totalWoodFeet, "feet");


//tinyFriend
function tinyFriend(name){
    var shortestName;
     var shortestNameLength = name[0].length; 
    for( var i=0; i < name.length; i++ ){
        if(name[i].length < shortestNameLength){
            shortestNameLength = name[i].length;   
           shortestName = name[i];   
        }
    }
    return shortestName;
}
var result =tinyFriend(["sheikh Mujib","Sheikh hasina" ,"khaleda zia","Ziaur Rahman"]);
console.log(result);

