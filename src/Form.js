import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class Form extends React.Component {
  constructor() {
    super();
    this.state = { textInput: '' };
    this.markdownInput = this.markdownInput.bind(this);
  }
  markdownInput(input) {
    var val = input.target.value;
    this.setState({
      textInput: val
    });
    this.props.parent(this.state.textInput);
  }
  render() {
    return (
        <form>
          <div className="form-group">
            <textarea className="form-control" rows="15" value={this.state.textInput} onChange={this.markdownInput}></textarea>
          </div>
        </form>
    );
  }
}

export default Form;
