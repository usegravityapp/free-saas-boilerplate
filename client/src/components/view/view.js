/***
*
*   VIEW
*   The view houses global components and methods 
*   that need to be accessed anywhere in the app.
*
**********/

import { createContext } from 'react';
import Style from './view.tailwind.js';

export const ViewContext = createContext();

export function View(props){

  // set title based on route title
  document.title = props.title;

  const context = {

    // add global methods/vars here
    // eg. modal, notification, error handler
    // can be accessed within any view

  }

  return (
    <ViewContext.Provider value={ context }>
      <div className={ Style.view }>

        {  props.display 
          && <props.display /> }

      </div>
    </ViewContext.Provider>
  );
}
