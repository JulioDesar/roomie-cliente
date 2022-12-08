import { Route, Routes } from 'react-router-dom';
import './App.css';
import AtualizarForm from './components/Modal-Atualizar/ModalAtualizar';
import CadastroImovelForm from './components/Modal-Cadastro-Imovel/ModalCadastroImovel';
import CadastroForm from './components/Modal-Cadastro/ModalCadastro';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import Imovel from './pages/Imovel/Imovel';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<CadastroForm />} />
        <Route path="/cadastrarImovel" element={<RequireAuth><CadastroImovelForm /></RequireAuth>} />
        <Route path="/imovel" element={<RequireAuth><Imovel /></RequireAuth>} />
        <Route path="/atualizar" element={<RequireAuth><AtualizarForm /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
