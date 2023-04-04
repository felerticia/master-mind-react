import './App.css';
import Secret from './components/Secret/Secret'
import Rows from './components/Rows/Rows'
import Colors from './components/Colors/Colors'
import Buttons from './components/Buttons/Buttons'
import GameEnds from './components/GameEnds/GameEnds'

const App = () =>{

  return <div className="App">
            <div className="board">
                <Secret/> 
                <Rows/>
                <Colors/>
                <Buttons/>
                <GameEnds/>
            </div>
        </div>
}

export default App;
