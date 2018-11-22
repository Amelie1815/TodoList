import React from 'react';

const AddTodo = props => {
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control p-4" placeholder="What needs to be done?" aria-label="Recipient's username" aria-describedby="button-addon2" 
        value={props.inputValue} 
        onChange={props.handleChange} 
        onKeyPress={props.handleAdd} 
      />
      <div className="input-group-append">
        <button className="add-todo__btn btn btn-outline-secondary" type="button" 
          onClick={props.handleAdd}
        >
          Add todo
        </button>
      </div>
    </div>
  )
}

export default AddTodo;