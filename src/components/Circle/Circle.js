import './Circle.css'
const Circle = ({color}) => {

    return <div 
        className={`Circle ${color || 'transparent'}`}    
    />
} 

export default Circle