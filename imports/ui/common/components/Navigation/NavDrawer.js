import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'underscore';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 300;

const styles = theme => ({
  appFrame: {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    zIndex: 1,
  },
  appBar: {
    boxShadow: 'none',
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  avatar: {
    marginRight: 20
  },
  loginButton: {
    color: theme.palette.common.white,
    fontSize: 12,
    marginRight: 20,
    textDecoration: 'none'
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  menuItem: {
    paddingTop: 18,
    paddingBottom: 18
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    backgroundColor: theme.palette.background.default,
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth - 1,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
  logo: {
    flex: 1,
    textDecoration: 'none'
  },
  toolbar: {

  }
});

export class NavDrawer extends React.Component {
  state = {
    anchor: 'left',
    anchorEl: null,
    drawerOpen: false
  };

  handleDrawerOpen = () => {
    this.setState({ drawerOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    this.props.handleLogout();
    this.handleClose();
  };

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    const { auth, children, classes, isAdmin, items, location, theme } = this.props;
    const { anchor, anchorEl, drawerOpen } = this.state;
    const menuOpen = Boolean(anchorEl);

    const drawer = (
      <Drawer
        anchor={anchor}
        open={drawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant='persistent'>
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {
              theme.direction === 'rtl'
                ? <ChevronRightIcon />
                : <ChevronLeftIcon />
            }
          </IconButton>
        </div>
        <Divider />
        <List>
          {
            items.map((item, key) => (
              item.path && !item.hide &&
                <MenuItem
                  className={classes.menuItem}
                  component={Link}
                  dense
                  key={`key__${key}`}
                  onClick={this.handleDrawerClose}
                  to={item.path}>
                  { item.icon && <ListItemIcon>{item.icon}</ListItemIcon> }
                  { item.name && <ListItemText
                    inset
                    primary={item.name}
                    secondary={item.description} /> }
                </MenuItem>
              || !item.hide && <ListSubheader key={`key__${key}`}>{item.name}</ListSubheader>
            ))
          }
        </List>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }

    return (
      <nav className={classes.appFrame}>
        <AppBar
          className={classNames(classes.appBar, {
            [classes.appBarShift]: drawerOpen,
            [classes[`appBarShift-${anchor}`]]: drawerOpen,
          })}
          position='static'
          style={{
            backgroundColor: _.contains(
              ['insights', 'login', 'signup', 'plan', 'recover', 'standards'],
              location.pathname.split('/')[1])
                ? theme.palette.blue.main
                : _.contains(['orgs', 'dashboard'], location.pathname.split('/')[1])
                ? theme.palette.dark.main
                : 'transparent'
          }}>
          <Toolbar
            className={classes.toolbar}
            disableGutters={!drawerOpen}>

            <IconButton
              aria-label='open drawer'
              className={
                classNames(classes.menuButton, drawerOpen && classes.hide)
              }
              color='inherit'
              onClick={this.handleDrawerOpen}>
              <MenuIcon />
            </IconButton>

            <Typography
              className={classes.logo}
              color='inherit'
              component={Link}
              noWrap
              to='/'
              variant='title'>
              titan.io
            </Typography>

            <div>
              {!auth ?
                <Typography
                  className={classes.loginButton}
                  component={Link}
                  to='/login'
                  variant='subheading'>
                  LOGIN
                </Typography>
                :
                <React.Fragment>
                  <IconButton
                    aria-owns={menuOpen ? 'menu-appbar' : null}
                    aria-haspopup='true'
                    className={classes.avatar}
                    onClick={this.handleMenu}
                    color='inherit'>
                    <Avatar src='./images/avatars/img_avatar.png' />
                  </IconButton>

                  <Menu
                    id='menu-appbar'
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={menuOpen}
                    onClose={this.handleClose}>
                    { isAdmin && <MenuItem onClick={this.handleClose}>Notifications</MenuItem> }
                    <MenuItem component={Link} onClick={this.handleClose} to='/dashboard'>Dashboard</MenuItem>
                    <MenuItem onClick={this.handleClose}>Settings</MenuItem>
                    <MenuItem component={Link} onClick={this.handleLogout} to='/'>Logout</MenuItem>
                  </Menu>
                </React.Fragment>
              }
            </div>
          </Toolbar>

        </AppBar>
        {before}
        <main
          className={classNames(classes.content, classes[`content-${anchor}`], {
            [classes.contentShift]: drawerOpen,
            [classes[`contentShift-${anchor}`]]: drawerOpen,
          })}>
          { children }
        </main>
        {after}
      </nav>
    );
  }
}

NavDrawer.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NavDrawer);