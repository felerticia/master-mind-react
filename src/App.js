import './App.css';
import { useEffect, useReducer } from 'react';

import AppContext from './contexts/Context'
import { reducer } from './reducer/reducer'
import { checkGameState, initGameState } from './helper';

import Secret from './components/Secret/Secret'
import Rows from './components/Rows/Rows'
import Colors from './components/Colors/Colors'
import Buttons from './components/Buttons/Buttons'
import GameEnds from './components/GameEnds/GameEnds'
import { setGameState } from './reducer/actions'

const App = () =>{
    const [appState, dispatch ] = useReducer(reducer,initGameState());

    useEffect(() => {
        const gameState = checkGameState(appState.hints,appState.currentRow-1)
        if (gameState === appState.gameState)
            return
        else    
            dispatch(setGameState(gameState))
    }, [appState.currentRow])


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
