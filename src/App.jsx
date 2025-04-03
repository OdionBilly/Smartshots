import './App.css'
import { Card } from './components/Card'
import { Navbar } from './components/Navbar'


const photos = [
  'src/assets/photos/nature.jpg',
  'src/assets/photos/nature1.jpg',
  'src/assets/photos/nature2.jpg',
  'src/assets/photos/nature3.jpg',
  'src/assets/photos/nature4.jpg',
  'src/assets/photos/nature5.jpg',
]


function App() {
  return (
    <div className='container'> 
      <div class='mt-2 text-center'>
            <Navbar/>
            <h1>Gallary</h1>
          <div className='row mt-5'>
           {photos.map((photo) => 
           <Card src={photo}/> ) }
          </div>
       </div>
    </div>  
  )
}

export default App
