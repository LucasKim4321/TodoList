
import './TodoItem.css';
import React, { useContext} from 'react';
// import {TodoContext} from "../App";
import {TodoDispatchContext} from "../App";



// const TodoItem =  ( {id, content, isDone, createdDate, onUpdate, onDelete}) => { // Props로 통해 값을 전달 받음
const TodoItem =  ( {id, content, isDone, createdDate}) => {  
 
    // const { onUpdate, onDelete } = useContext(TodoContext);
    const { onUpdate, onDelete } = useContext(TodoDispatchContext);
    console.log(`TodoItem 컴포넌트: ${id} - 업데이트`);

    
    const onChangeCheckbox = ()=> {onUpdate(id)}
    const onClickDelete = ()=> {onDelete(id)}

    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <div className="form-check form-switch m-0">
                    <input className="form-check-input"
                            type="checkbox"
                            checked={isDone}
                            onChange={onChangeCheckbox}
                            role="switch"
                            id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" for="flexSwitchCheckDefault">✨</label>
                </div>
            </div>
            <div className="title_col">
                {/*오늘의 할 일!! */}
                {content}
            </div>
            <div className="date_col">
                {/* {new Date().toLocaleDateString()} */}
                {new Date(createdDate).toLocaleDateString()}
            </div>
            <div className="btn_col">
                <button className="btn btn-danger btn-sm" onClick={onClickDelete}>삭제</button>
            </div>
        </div>

        
    )
}

export default  React.memo(TodoItem);