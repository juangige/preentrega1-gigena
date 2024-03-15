import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import MarcasNav from './components/MarcasNav/MarcasNav.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HardwarePage from './pages/Hardware/HardwarePage.jsx';
import PerifericosPage from './pages/Perifericos/PerifericosPage.jsx';
import MonitoresPage from './pages/Monitores/MonitoresPage.jsx';
import NotebooksPage from './pages/Notebooks/NotebooksPage.jsx';


function App() {

  return (
    <>

    <BrowserRouter>
      <NavBar />
      <MarcasNav />      
        <Routes>
          
          <Route exact path='/' element={<ItemListContainer greeting={'Lista de productos'}/>} />
          <Route exact path='/product/:prodId' element={<ItemDetailContainer />} />
          <Route path="/pages/:cateName" element={<HardwarePage />} />
          <Route exact path='/pages/:cateName' element={<PerifericosPage />} />
          <Route exact path='/pages/:cateName' element={<MonitoresPage />} />
          <Route exact path='/pages/:cateName' element={<NotebooksPage />} />

        </Routes>
    
    </BrowserRouter>


    </>
  );
}

export default App;
