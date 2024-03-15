import { useState } from 'react'

function App() {
 const [name, setName] = useState('Sofía')
 const changeName = (newName)=>setName(newName)
 return (
    <>
    <h2>Teacher Name: {name}</h2>
    <ul>
    <li onClick={()=>changeName('Data')}>Data</li>
    <li onClick={()=>changeName('Reyes')}>Reyes</li>
    <li onClick={()=>changeName('Yolanda')}>Yolanda</li>
    </ul>
    </>
    
 )
}

export default App

