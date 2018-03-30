import React from 'react';

class CountButton extends React.Component {
  state = {count: 0}

  onClick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <button onClick={this.onClick.bind(this)}>
        {this.props.greeting}, Click Me {this.state.count} Times
      </button>
    );
  }
}

export default CountButton;
