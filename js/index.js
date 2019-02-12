function backgroundShuffle(){
  let redValue = (Math.random() *255); 
  let greenValue = (Math.random() *255);
  let blueValue = (Math.random() *255);
  
  let randomColor = `rgb(${redValue},${greenValue},${blueValue})`;
  document.querySelector("#random-body").style.background= randomColor;
}

document.querySelector("#random-submit").addEventListener("click", backgroundShuffle);