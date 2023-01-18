/***
*
*   LINK
*   Routes a new view within the application router
*   Use this instead of <a> to avoid reloading the page
*
*   PROPS
*   url: the destination as defined in /app/app.js
*   title: link title
*   text: link text
*   children: child to render eg. img (optional)
*
**********/

import { NavLink } from 'react-router-dom';
import Style from './link.tailwind.js';

export function Link(props){

  return(
    <NavLink
      to={ props.url }
      className={ Style.link }
      title={ props.title }
      activeclassname='active'>

      { props.children || props.text }

    </NavLink>

  );
}