import { color_options } from "../../constants"
import Circle from "../Circle/Circle"
import './Colors.css'
import { useAppContext }from '../../contexts/Context'

const Colors = () => {
    const [appState] = useAppContext();

    return <div className="Colors">
    {color_options.map (color => <div className="item" key={color} >
        <Circle
            className={appState.currentColor === color ? 'active' : ''}
            color={color}
        />
        </div>)}
    </div>
}

    

export default Colors