import React from 'react';
import Form from './Form';
import marked from 'marked';
import './Markdown.css';


class Markdown extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
    this.translateMarkdown = this.translateMarkdown.bind(this);
  }
  translateMarkdown(val) {
    var markedDown = marked(val);
    console.log(markedDown);
    this.setState({
      value: markedDown
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <Form parent={this.translateMarkdown}/>
        </div>
        <div className="col-md-6">
          {/* Making it unescape */}
          <div dangerouslySetInnerHTML={{__html: this.state.value}}></div>
        </div>
      </div>
    );
  }
}

export default Markdown;
