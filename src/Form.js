import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class Form extends React.Component {
  constructor() {
    super();
    this.state = { textInput: '' };
    this.markdownInput = this.markdownInput.bind(this);
    this.markdownSubmit = this.markdownSubmit.bind(this);
  }
  markdownInput(input) {
    var val = input.target.value;
    this.setState({
      textInput: val
    });
    this.markdownSubmit(val);
  }
  //Asynchronous
  markdownSubmit(input) {
    this.props.parent(input);
  }
  render() {
    var defaultValue = "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"
    return (
        <form>
          <div className="form-group">
            <textarea className="form-control" rows="25" placeholder={defaultValue} value={this.state.textInput} onChange={this.markdownInput}></textarea>
          </div>
        </form>
    );
  }
}

export default Form;
