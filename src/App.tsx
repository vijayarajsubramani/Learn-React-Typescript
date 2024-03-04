
import { useState } from 'react';
import Button from './component/button';
import Greets from './component/greet';
import Heading from './component/heading';
import Input from './component/input';
import Oscar from './component/oscar';
import Persons from './component/person';
import PersonList from './component/personList';
import Status from './component/status';
import Styles from './component/styles';
import Users from './state/user';
import Counter from './state/count';

const App = () => {

  const personObj = {
    firstName: 'Vijayaraj',
    lastName: 'S'
  }

  const perSonList = [
    {
      firstName: 'Vijayaraj',
      lastName: 'S'
    },
    {
      firstName: 'React',
      lastName: 'Node'
    }
  ]

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log('event,id', event, id)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }


  return (
    <>
      <div className="App">
        <Greets name='Vijayaraj' isLoggedIn={true} />
        <Persons name={personObj} />
        <PersonList list={perSonList} />
        <Status status='loading' />
        <Oscar>
          <Heading>I am Vijay</Heading>
        </Oscar>
        <Button handleClick={handleClick} /><br/>
        <Input value='' handleChange={handleChange} />
        <Styles style={{border:'1px solid black', padding:'5px', width:'20%'}}/>
        <Users/>
        <Counter/>
      </div>
    </>
  );
}

export default App;
