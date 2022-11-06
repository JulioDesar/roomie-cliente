import { Route, Routes } from 'react-router-dom';
import './App.css';
import AtualizarForm from './components/Modal-Atualizar/ModalAtualizar';
import CadastroForm from './components/Modal-Cadastro/ModalCadastro';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<CadastroForm />} />
        <Route path="/atualizar" element={<AtualizarForm />} />
      </Routes>
    </div>
  );
}

export default App;
