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
]
function App() {
  const [items, setItems] = useState(photos)
  const [isCollapsed, collapse] = useState(false)

const AddToGallary =() => {
  setItems(['/src/assets/nature6.jpg', ...items])
}

const toggle = () => {
  collapse(!isCollapsed)
}

  return (
    <div className='container'> 
        <Navbar/>
      <div class='mt-3 text-center'>
            {/* <button className='btn btn-primary mx-3' onClick={AddToGallary}>Add</button> */}
            <button className='btn btn-success float-end' onClick={toggle}>{isCollapsed ? 'Close' : '+Add'}</button>
            <Forms isVisible={isCollapsed}/>
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
