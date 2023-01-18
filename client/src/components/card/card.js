/***
*
*   CARD
*   Universal container for grouping UI components together
*
*   PROPS
*   title: title string (optional)
*   children: child component(s) to render
*
**********/

import Style from './card.tailwind.js';

export function Card(props){

  return (
    <section className={ Style.card }>

      { props.title &&
        <header className={ Style.header }>
          <h1 className={ Style.title }>{ props.title }</h1>
        </header>
      }

      { props.children }
      
    </section>
  );
}