import React,{useState} from 'react'

export default function TodoList(props) {
    const [isStrikethrough, setIsStrikethrough] = useState(false);
    const toggleStrikethrough = () => {
      setIsStrikethrough(!isStrikethrough);
    };
  
    return (
        <div className="row container mt-3 m-auto text-start border border-dark-2 p-2 rounded border-rouded">
            <div className="col-4">
                <div className="form-check">
                    <input className="form-check-input" onClick={toggleStrikethrough} type="checkbox" value="" id="flexCheckDefault" />
                </div>
            </div>
            <div className="col-4 text-center" style={{
                textDecoration: isStrikethrough ? "line-through" : "none", // Apply line-through when state 
                fontSize: "18px",
            }}>{props.item}</div>
            <div className="col-4 text-end" onClick={e => {
                props.deleteListItem(props.index)
            }}><i className="bi bi-trash3 link-danger"></i></div>
        </div>
    )
}
