import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRemove = () => {
    const {todoId, removeTodo} = this.props;
    removeTodo(todoId);
  }

  handleComplete = () => {
    const {todoId, completeTodo} = this.props;
    completeTodo(todoId);
  }

  render() {
    const {text, completed} = this.props;
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center" 
        style={completed ? {backgroundColor: '#f2f2f2'} : {}}
      >
        <div className="form-check">
          <input className="form-check-input" type="checkbox" onClick={this.handleComplete} />
          <label className="form-check-label pl-2" for="defaultCheck1">
            { completed ? <del>{text}</del> : text }
          </label>
        </div>
        <span className="btn__delete" onClick={this.handleRemove}>&times;</span>
      </li>
    )
  }
}
export default Item;