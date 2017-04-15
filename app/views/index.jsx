var React = require('react');
var DefaultLayout = require('./layouts/default');
var User = require('./components/User')

class Index extends React.Component {

  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div id="users">
          {this.props.users.map(function(user) {
            return <User
              key={user._id}
              user={user} />
          })}
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
