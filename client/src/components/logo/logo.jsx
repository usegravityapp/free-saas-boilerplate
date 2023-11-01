/***
*
*   LOGO
*   Replace the image in /images with your own logo
*
**********/

import LogoColor from '/assets/images/logo-color.svg';
import Style from './logo.tailwind.js';

export function Logo(props){
  
  return(
    <a href='https://usegravity.app' className={ Style.logo }>
      <img src={ LogoColor } alt='Logo' />
    </a>
  )
}
