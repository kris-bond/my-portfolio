import './Home.css'

import {BiSun, BiMoon} from 'react-icons/bi'

function Home() {

  return (
    <div id="home" className='page'>
      <h1 className="name" data-value="KRIS BOND" onMouseOver={(event) => HoverEffect(event)}>Kris Bond</h1>
      <a className="line highlight" href='#about-me'>About Me</a>
      <a className="line highlight" href='#projects'>Projects</a>
      <a className="line highlight" href='#contacts'>Contacts</a>
      <button className="theme-switch" onClick={UpdateTheme}><BiSun/></button>
    </div>
  )
}

function UpdateTheme() {
  const root = document.documentElement;
  // document.querySelector('.theme-switch').textContent = <BiMoon/>;
  const newTheme = root.className == ('' || 'light') ? 'dark' : 'light';
  root.className = newTheme;
}

function HoverEffect(event) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;
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

export default Home
