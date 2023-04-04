import './Circle.css'
const Circle = ({color,className}) => {

    return <div 
        className={`Circle ${color || 'transparent'} ${className || ''}`}    
    />
} 

export default Circle