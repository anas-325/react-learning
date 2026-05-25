import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
 const [count,setCount]=useState(0);

 function handleclick() {
  setCount(count+1);
  
 }

  return (



    <div>

<Button funct={handleclick} text="click me" >
  <h1>{count}</h1>
 

  </Button>



{/* <Card name='anas'>
<h1>best web dev course</h1>
<p>trying to be consistent</p>
<p>will complete course soon</p>
  </Card>
  <Card children="im children">
  
  </Card> */}
  </div>

  )
}

export default App
