import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';



function App() {
  const username = "HAMMAD"
  return (
    <>
      <div style={{

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh'
      }}>

        <Header username={username} />

        <Body
          text={`I was born in the year 18-- to a large fortune, endowed besides with excellent parts, inclined by nature to industry, fond of the respect of the wise and good among my fellowmen, and thus, as might have been supposed, with every guarantee of an honourable and distinguished future. And indeed the worst of my faults was a certain impatient gaiety of disposition, such as has made the happiness of many, but such as I found it.`}
          size={200}
        
        />

      </div>
    </>
  );
}

export default App;