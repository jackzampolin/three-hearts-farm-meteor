
var { AppBar, LeftNav } = MUI;

TestApp = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  render: function() {
    return <div>
      Hello World
    </div>
  }
});
