import MyHeader from './components/MyHeader/MyHeader';
import logo from '/favicon.png';

function App() {
  return (
    <>
      <MyHeader logoImg={logo} logo={'Star Wars'} />
    </>
  );
}

export default App;
