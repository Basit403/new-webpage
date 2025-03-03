import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'


const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient-text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aliquid aspernatur corrupti! Neque, tempore nulla eos eligendi laudantium in consequuntur nam iusto. Est incidunt nemo perspiciatis nam debitis asperiores neque!</p>
        
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your email address'></input>
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'></img>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className='gpt3__header-image'>
        <img src={ai} alt='ai'></img>
      </div>
    </div>
  )
}

export default Header
