import React from 'react';

class Emoji1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEmoji: props.emoji1
    };
  }

  toggleEmoji() {
    const newEmoji = this.state.currentEmoji === this.props.emoji1 ? this.props.emoji2 : this.props.emoji1;
    this.setState({ currentEmoji: newEmoji });
  }

  render() {
    return (
      <div>
        <span
          className="emoji"
          role="img"
          aria-label={this.props.label ? this.props.label : ""}
          aria-hidden={this.props.label ? "false" : "true"}
        >
          {this.state.currentEmoji}
        </span>
        <button onClick={() => this.toggleEmoji()}>Change Emoji</button>
      </div>
    );
  }
}

export default Emoji1;
