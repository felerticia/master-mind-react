import './Rows.css'

const Rows = () => {

    return <div className="Rows">
        {new Array(10).fill()
        .map ((x,i) => <div className={`Row`} key={i}>
                <div>{i+1}</div>
               
            </div>)
        }
    </div>
} 

export default Rows