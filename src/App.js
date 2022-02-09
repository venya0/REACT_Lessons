import React from 'react';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';
import { Message } from './components/Message/Message';

import style from './App.module.sass';

// const name = 'Venya'

function App() {
  return <div className={style.div}>
    <h2 className={style.header}>Hello</h2>
    <Input />
    <Button name={'Venya'} />
    <Button name={'REACT'} /><br></br>
    <Message word={'Abcd'} />
  </div>
}

export default App;
