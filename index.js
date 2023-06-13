// Code your solution in this file!
function distanceFromHqInBlocks(picupLocation){
    const hqLocation = 42
    return picupLocation-hqLocation
}
console.log(distanceFromHqInBlocks(50))

function distanceFromHqInFeet(){
    const block = 264
    return distanceFromHqInBlocks(50)*block
}
console.log(distanceFromHqInFeet())

function distanceTravelledInFeet(a,b){
    return (b-a)*264
}
console.log(43,48)
   




