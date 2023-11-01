import { Fragment } from 'react';
import { Card, Button, Logo } from 'components/lib';

export function Welcome(props){

  return (
    <Fragment>

      <Logo />

      <Card title='Welcome'>

        <p className='mb-4 text-lg font-semibold'>This is a free boilerplate from&nbsp;
        <a href='https://usegravity.app'>Gravity</a></p>

        <p>The premium boilerplate includes payments, organisations, 
          user management and much more. Plus, it comes with support.</p>

        <Button text='Get The Full Boilerplate' action={ () => window.open('https://usegravity.app') }/>
      
      </Card>
      <Card title='Getting Started'>

        <ol className='mb-4'>
          <li>1. Read the <a href='https://github.com/usegravityapp/free-saas-boilerplate#readme'>readme.md</a> file</li>
          <li>2. Add new views to <code>/client/src/views</code></li>
          <li>3. Route the views in <code>/routes</code></li>
        </ol>

      </Card>
    </Fragment>
  )
}