import './App.css'
import { Forms } from './components/Forms'
import { Card } from './components/Card'
import { Navbar } from './components/Navbar'
import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'

// import { motion } from 'framer-motion'


const photos = [
  // 'src/assets/photos/nature.jpg',
  '/photos/nature.jpg',
  '/photos/nature1.jpg',
  '/photos/nature2.jpg',
  '/photos/nature3.jpg',
  '/photos/nature4.jpg',
  '/photos/nature5.jpg',
  
  // 'https://picsum.photos/200/300',
]
function App() {
  const [inputs, setInputs] = useState({title:null, file:null, path:null})
  const [items, setItems] = useState(photos)
  const [isCollapsed, collapse] = useState(false)
  const [count, setCount] = useState(0)



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

useEffect(() =>{
  setCount(`you have ${items.length} images${items.length > 1 ? 's' : ''}`)
},[items])

console.log(inputs)

  return (
    <div className='container'> 
        <Navbar/>
      <div class='pt-10 text-center'>
            {/* <button className='btn btn-primary mx-3' onClick={AddToGallary}>Add</button> */}
            <button 
              className='btn btn-success float-end'
              onClick={toggle}>{isCollapsed ? 'Close' : '+Add'}
            </button>

            <Forms
             isVisible={isCollapsed}
             onChange={handleChange}
             onSubmit={handleSubmit}
             />
            {count}

            <h1>Gallary</h1>
          <div className='flex flex-wrap bg-[red]'>
           {items.map((photo) => 
           <Card src={photo}/> ) }
          </div>
       </div>
       <Footer/>
    </div>  
  )
}

export default App
