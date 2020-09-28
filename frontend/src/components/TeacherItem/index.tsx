import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/14775487?s=460&u=9317c6bf9059759f8bc355e1311362e6f9bc8e96&v=4" alt="JC"/>
        <div>
          <strong>Jefferson Clark</strong>
          <span>Matematica</span>
        </div>
      </header>

      <p>
        Lorem Ipsum
        <br/><br/>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </p>

      <footer>
        <p>
          Preco/hora
          <strong>R$ 100,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;