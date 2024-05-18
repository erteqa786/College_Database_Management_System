
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Students from './Students'
import CreateStudent from './CreateStudent'
import UpdateStudent from './UpdateStudent'
import Navbaar from './Navbaar'
import Read from './Read'
import About from './About'
import Footer from './Footer'


function App() {
 

  return (
    <BrowserRouter>
    <Navbaar />
    <Routes>
      <Route path='/' element={<Students />}> </Route>
      <Route path='/create' element={<CreateStudent/>}></Route>
      <Route path='/update/:id' element={<UpdateStudent/>}></Route>
      <Route path='/read/:id' element={<Read/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
