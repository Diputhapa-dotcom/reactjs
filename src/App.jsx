import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='contact' element={<h1> this is contact page</h1>} />
          <Route path='hello' element={<h1>This is hello world</h1>} />
            

      </Routes>
    </BrowserRouter>
  )
}

export default App
