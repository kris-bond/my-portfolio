import './Home.css'

function Home() {

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  document.querySelector("h1").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 35);
  }

  return (
    <div id="home" className='page'>
      <h1 className="name" data-value="KRIS BOND">Kris Bond</h1>
      <a className="line highlight" href='#about-me'>About Me</a>
      <a className="line highlight" href='#projects'>Projects</a>
      <a className="line highlight" href='#contacts'>Contacts</a>
    </div>
  )
}

export default Home
