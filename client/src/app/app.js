import Axios from 'axios';

// components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FourOhFour } from 'views/404';
import { View } from 'components/lib';

// tailwind css
import '../css/output.css';

// import settings with server_url
const Settings = require('settings.json');

// import additional route files here
const routes = [

  ...require('routes/welcome').default,
  ...require('routes/auth').default,

]

export default function App(props){

  // set the base url for API calls
  Axios.defaults.baseURL = Settings[process.env.NODE_ENV].server_url;

  // render the routes
  return(
    <BrowserRouter>
      <Routes>
        { routes.map(route => {

          return (
            <Route 
              key={ route.path } 
              path={ route.path }
              element={ <View display={ route.view } title={ route.title  }/> }
            />
          )
        })}

        { /* 404 */}
        <Route 
          key='404'
          path='*' 
          element={ <View display={ FourOhFour } title='404 Not Found' /> }
        />
        
      </Routes>
    </BrowserRouter>
  );
}
