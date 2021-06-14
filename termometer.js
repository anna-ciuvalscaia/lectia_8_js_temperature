
let temperature = document.getElementById('temperature-input')
let termometer = document.getElementById('termometer-indicator')
temperature.min = -20
temperature.max = 50
temperature.type = "number"
  
   function updateTermometer(){
     

let width = temperature.value
termometer.style.width = 60 + (width * 3)  + 'px'


 if(width >= 0) {
  termometer.style.background = 'red'
 } else {
  termometer.style.background = 'blue'
 }


  }

temperature.oninput = updateTermometer



 



 
  


