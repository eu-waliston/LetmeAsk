import { Link } from 'react-router-dom'

import ilustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button'
//import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function NewRooom() {
  //const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={ilustrationImg} alt="Ilustração simbolizando perguntase respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Nome da sala" />

            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala já existente? <Link to="/">Clique Aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
