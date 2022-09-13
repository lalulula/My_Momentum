const clock = document.getElementById("clock");
const dateToday = document.getElementById("date");

function getDate(){
  const date = new Date();
  let month = String(date.getUTCMonth()+1).padStart(2,"0");
  let day = String(date.getUTCDate()).padStart(2,"0");
  let year = String(date.getUTCFullYear()).padStart(2,"0");
  dateToday.innerText =`${year}-${month}-${day}`

}
function getClock(){
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute =  String(date.getMinutes()).padStart(2, "0");
  const seconds =String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${minute}:${seconds}`;
};
getDate();
getClock();
// setInterval(getClock, 1000);
setInterval(function(){
  getClock();
  getDate();
},1000)