var { AppCanvas, AppBar, LeftNav, MenuItem } = MUI

var menuItems = [
  { route: 'get-started', text: 'Get Started' },
  { route: 'customization', text: 'Customization' },
  { route: 'components', text: 'Components' },
  { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
  {
     type: MenuItem.Types.LINK,
     payload: 'https://github.com/callemall/material-ui',
     text: 'GitHub'
  },
  {
     text: 'Disabled',
     disabled: true
  },
  {
     type: MenuItem.Types.LINK,
     payload: 'https://www.google.com',
     text: 'Disabled Link',
     disabled: true
  },
];

//Docked Left Nav
Main = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  render() {
    return <AppCanvas>
      <AppBar
        style={{marginLeft: '-4px', marginTop: '-8px'}}
        title="Three Hearts Farm"
        onLeftIconButtonTouchTap={ this._toggleLeftNav }
      />
    <LeftNav ref="leftNav" menuItems={menuItems} docked={false} />
        {this.props.content}
    </AppCanvas>
  },
  _toggleLeftNav () {
    this.refs.leftNav.toggle();
  },
});
