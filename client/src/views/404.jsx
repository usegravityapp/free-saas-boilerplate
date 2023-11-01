import { Fragment } from 'react';
import { Card, Logo, Link } from 'components/lib';

export function FourOhFour(props){

  return (
    <Fragment>

      <Logo />
      
      <Card title='404: Not Found'>

        <Link url='/'>Go Home</Link>

      </Card>
    </Fragment>
  )
}