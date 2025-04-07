import './App.css'
import { Forms } from './components/Forms'
import { Card } from './components/Card'
import { Navbar } from './components/Navbar'
import { useState } from 'react'


const photos = [
  'src/assets/photos/nature.jpg',
  'src/assets/photos/nature1.jpg',
  'src/assets/photos/nature2.jpg',
  'src/assets/photos/nature3.jpg',
  'src/assets/photos/nature4.jpg',
  'src/assets/photos/nature5.jpg',
  // 'https://picsum.photos/200/300',
]
function App() {
  const [inputs, setInputs] = useState({title:null, file:null, path:null})
  const [items, setItems] = useState(photos)
  const [isCollapsed, collapse] = useState(false)

// const AddToGallary =() => {
//   setItems(['/src/assets/photos/nature6.jpg', ...items])
// }

const toggle = () =>  {collapse(!isCollapsed)}

const handleChange = (e) => {
  if(e.target.name === 'file') {
   setInputs({ ...inputs, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0])})
  }
  else{
    setInputs({...inputs, title : e.target.value})
  }
  }

const handleSubmit = (e) => {
  e.preventDefault()
  setItems([inputs.path,...items])
}

console.log(inputs)



  return (
    <div className='container'> 
        <Navbar/>
      <div class='mt-3 text-center'>
            {/* <button className='btn btn-primary mx-3' onClick={AddToGallary}>Add</button> */}
            <button className='btn btn-success float-end' onClick={toggle}>{isCollapsed ? 'Close' : '+Add'}</button>

            <Forms
             isVisible={isCollapsed}
             onChange={handleChange}
             onSubmit={handleSubmit}
             />

            <h1>Gallary</h1>
          <div className='row mt-5'>
           {items.map((photo) => 
           <Card src={photo}/> ) }
          </div>
       </div>
    </div>  
  )
}

export default App
