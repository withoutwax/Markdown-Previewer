import React from 'react';
import Form from './Form';
import './Markdown.css';

class Markdown extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
    this.translateMarkdown = this.translateMarkdown.bind(this);
  }
  translateMarkdown(dataFromForm) {
    var data = dataFromForm;
    this.setState({
      value: data
    });
  }
  render() {
    return (
      <div className="col-md-6">
        <Form parent={this.translateMarkdown}/>
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default Markdown;
