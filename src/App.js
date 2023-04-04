import './App.css';
import { useReducer } from 'react';

import AppContext from './contexts/Context'
import { reducer } from './reducer/reducer'

import Secret from './components/Secret/Secret'
import Rows from './components/Rows/Rows'
import Colors from './components/Colors/Colors'
import Buttons from './components/Buttons/Buttons'
import GameEnds from './components/GameEnds/GameEnds'

const App = () =>{
    const [appState, dispatch ] = useReducer(reducer,{test : true});

    return <AppContext.Provider value={[appState, dispatch]} >
    <div className="App">
        <div className="board">
            <Secret/> 
            <Rows/>
            <Colors/>
            <Buttons/>
            <GameEnds/>
        </div>
    </div>
</AppContext.Provider>
}

export default App;
