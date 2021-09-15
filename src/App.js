import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';


function App() {
  const username= "HAMMAD"
  return (
    <>
    <div style={{
      backgroundColor:'lightblue',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'100vw',
      height:'100vh'
      }}>

      <Header username={username} />
      <Body/>
    
    </div>
    </>
  );
}

export default App;