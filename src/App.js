import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import SearchUser from './components/SearchUser';
import DeleteUser from './components/DeleteUser';
import ViewAllUsers from './components/ViewAllUsers';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddUser/>}/>
        <Route path="/search" element={<SearchUser/>}/>
        <Route path="/delete" element={<DeleteUser/>}/>
        <Route path="/view" element={<ViewAllUsers/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
