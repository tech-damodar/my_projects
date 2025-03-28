import React from "react";
const ListData = (props)=>{


   
    return (<>
        <div className="todo_style">
        <i class="fa fa-times" aria-hidden = "true" onClick={()=>{
            props.onselect(props.id);
        }}/>
        <li>{props.data}</li>
        </div>
    </>);

}
export default ListData;