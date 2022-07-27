function openFunction(){
    document.getElementById("nav").style.width="300px";
    
   
   }
  function closeFunction(){
   document.getElementById("nav").style.width="0px";
  
  }
  function countdown(){
    const future =new Date("Auguste 4, 2021 08:00:00 ").getTime();
    const now =new Date().getTime();
    const diff =future - now;

    const second =1000;
    const min = second*60;
    const hour = min*60;
    const day = hour*24;

    const dayf = Math.floor(diff / day) ;
    const hourf = Math.floor(( diff % day ) / hour );
    const minf = Math.floor(( ( diff % day ) % hour ) / min );
    const secf =Math.floor((( ( diff % day ) % hour ) % min ) / second );
    
    document.querySelector(".day").innerText=dayf;
    document.querySelector(".hour").innerText=hourf;
    document.querySelector(".minute").innerText=minf;
    document.querySelector(".second").innerText=secf;

    
}

function loding(){
    const loader = document.querySelector('.loder');

window.addEventListener('load', () => {

    loader.classList.add('fondu-out');

})
}
