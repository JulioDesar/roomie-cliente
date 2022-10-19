import { Route, Routes } from 'react-router-dom';
import './App.css';
import CadastroForm from './components/Modal-Cadastro/ModalCadastro';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<CadastroForm />} />
      </Routes>
    </div>
  );
}

export default App;
