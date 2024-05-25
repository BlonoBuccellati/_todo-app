import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/sidebar/Sidebar';
function App() {
  return (
    <>
      <Header className='text-3xl font-bold underline' />
      <Main />
      <Sidebar />
    </>
  );

}

export default App;
