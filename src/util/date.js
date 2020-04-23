export function TimeStampToNormal(timestamp){
    var timedate = new Date(timestamp);
    return timedate.toLocaleDateString().replace(/\//g, "-") + " " + timedate.toTimeString().substr(0, 8)
}
export function NormalToTimeStamp(Normal){

}
console.log(TimeStampToNormal(1578672000000))
console.log(TimeStampToNormal(1578758400000))
console.log(TimeStampToNormal(1578844800000))
console.log(TimeStampToNormal(1579017600000))