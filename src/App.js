import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main/Main'
import New from './pages/New/New'
import Websites from './pages/Websites/Websites'
// import Nav from './components/Nav/Nav'


export default function App(){
    return (
        <div className='App'>
            <Nav/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/currencies" element={<New/>}/>
                <Route path="/price/:symbol" element={<Websites/>}/>
            </Routes>
        </div>
    )
}