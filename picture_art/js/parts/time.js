function time(){
let startdate = new Date();
let clockStart = startdate.getTime();
 function initStopwatch() {
  let thisTime = new Date(); 
  return (thisTime.getTime() - clockStart)/1000; 
}
function getSecs() {
  var tSecs = Math.round(initStopwatch());
  let x = setTimeout('getSecs()', 1000); 
  if (x>10 && x<=11){
    if(modalConsultation.style.display == "block" || modal.style.display == "block" || modalPopupDesign.style.display == "block"){
      modalConsultation.style.display = "none";
  }else{
     modalConsultation.style.display = "block";
    document.body.style.overflow = 'hidden';
  }
  }
 }
 getSecs();

}
module.exports = time;