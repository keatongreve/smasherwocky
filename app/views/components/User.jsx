var React = require('react');

class User extends React.Component {
  render() {
    return (
      <div id={"user_" + this.props.user.id}>
        <h1>{this.props.user.name} asdf</h1>
      </div>
    );
  }
}

module.exports = User;
