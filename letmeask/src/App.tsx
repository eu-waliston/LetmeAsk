import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRooom } from "./pages/NewRoom";

import { AuthContextProvider} from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRooom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
