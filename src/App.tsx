import { Route, Routes } from 'react-router-dom';
import './App.css';
import AtualizarForm from './components/Modal-Atualizar/ModalAtualizar';
import CadastroImovelForm from './components/Modal-Cadastro-Imovel/ModalCadastroImovel';
import CadastroForm from './components/Modal-Cadastro/ModalCadastro';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import ListarAlugueis from './pages/Alugueis/Alugueis';
import Home from './pages/Home/Home';
import Imovel from './pages/Imovel/Imovel';
import ListarImovel from './pages/ListarImovel/ListarImovel';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastrar" element={<CadastroForm />} />
        <Route path="/cadastrarImovel" element={<RequireAuth><CadastroImovelForm /></RequireAuth>} />
        <Route path="/alugueis" element={<RequireAuth><ListarAlugueis /></RequireAuth>} />
        <Route path="/listarImovel" element={<RequireAuth><ListarImovel /></RequireAuth>} />
        <Route path="/imovel" element={<Imovel />} />
        <Route path="/atualizar" element={<RequireAuth><AtualizarForm /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
