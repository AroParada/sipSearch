import { Container } from '@mui/material';
import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Container maxWidth="l">
      <NavBar />
      <div style={{ padding: 20 }}>
        <SearchBar />
      </div>
    </Container>
  );
}

export default App;
