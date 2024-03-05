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
import { TheContextProvider } from './context/context';
import List from './context/list';
import { UserContextProvider } from './context/usercontext';
import AuthUser from './context/user';
import MutableRef from './useref/timer';
import Private from './component-prop/private';
import Profile from './component-prop/profile';
import ListData from './generic-props';
import Toast from './template-literals/toast';
import ButtonElement from './wrapping-html/button';

//if you want create app use this below command
//npx create-react-app my-app --template typescript

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
        <Button handleClick={handleClick} /><br />
        <Input value='' handleChange={handleChange} />
        <Styles style={{ border: '1px solid black', padding: '5px', width: '20%' }} />
        <Users />
        <Counter />
        <TheContextProvider>
          <List />
        </TheContextProvider>
        <UserContextProvider>
          <AuthUser />
        </UserContextProvider>
        {/* <MutableRef/> */}
        <Private isLoggedIn={false} component={Profile} />
        {/* <ListData items={['vijay', 'raj', 'react']} onClick={(e) => console.log(e)} />
        <ListData items={[1, 2, 3, 4, 5]} onClick={(e) => console.log(e)} /> */}
        <ListData items={[{id:1,name:'vijay',email:'vijay@gmail.com'}]} onClick={(e) => console.log(e)} />
        <Toast postion='center'/>
        <ButtonElement variant='red' onClick={()=>console.log('clicked')}>
            Primary Button
        </ButtonElement>
      </div>
    </>
  );
}

export default App;
