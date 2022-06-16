const shareBtn = document.getElementsByClassName('share-container')[0];
const sharePopup = document.getElementsByClassName('share-icon-container')[0];
let i = 0;
shareBtn.addEventListener('click', (event) => {
      
   if (i == 0) {
      //sharePopup.classList.remove('toggle-share'); 
      sharePopup.style.cssText = "transform: scale(1)"; 
      i = 1; 
      console.log('clicked to open');
   } else {
      //sharePopup.classList.add('toggle-share');
      sharePopup.style.cssText = "transform: scale(0)";
      i = 0;
      console.log('clicked to close');
   }

   // let insideElement = sharePopup.contains(event.target);
   // if (sharePopup) {
   //    return;
   // } else {
   //    sharePopup.style.cssText = "transform: scale(0)";
   // }
   
});
// let shareBox = document.getElementsByClassName('share-icon-container')[0];
// document.addEventListener('click', (event) => {
   
//    let isClickedinside = shareBox.contains(event.target);
//    if (isClickedinside) {
//       return;
//    } else {
//       shareBox.style.cssText = "transform: scale(0)";
//    }
// });
