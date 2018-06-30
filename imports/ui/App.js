import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import _ from 'underscore';
import { Private } from './PrivateRoute';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme1, theme2 } from './common/themes';
import './common/icons';

// Company UI
import Article from './company/Article';
import BusinessPlan from './company/BusinessPlan';
import Company from './company';
import Insights from './company/Insights';
import Login from './company/Login';
import Organizations from './company/Organizations';
import Signup from './company/Signup';
import Strategy from './company/Strategy';
import Values from './company/Values';

// Consulting UI
import Consulting from './consult';
import ConsultServices from './consult/Services';
import ConsultSolutions from './consult/Solutions';

// Dashboard UI
import Dashboard from './dashboard';

// Technology UI
import Technology from './technology';

// CREATE A THEME FOR EACH COMPANY
// CREATE DIFFERENT OUTPUT DIRECTORIES FOR EACH
import NavDrawer from './common/components/Navigation/NavDrawer';

import DashboardIcon from '@material-ui/icons/Dashboard';
import GavelIcon from '@material-ui/icons/Gavel';
import HighlightIcon from '@material-ui/icons/Highlight';
import HomeIcon from '@material-ui/icons/Home';
import LayersIcon from '@material-ui/icons/Layers';
import LinearScale from '@material-ui/icons/LinearScale';
import VisibilityIcon from '@material-ui/icons/Visibility';

const data = {
  ['root']: [
    {
      name: 'Corporate',
      hide: true
    },
    {
      icon: <HomeIcon />,
      name: 'Home',
      path: '/',
      description: 'Home is where the root url is'
    },
    {
      icon: <VisibilityIcon />,
      name: 'Vision',
      path: '/plan',
      description: 'The vision must precede the venture'
    },
    {
      icon: <LayersIcon />,
      name: 'Organizations',
      path: '/orgs',
      description: 'A modular model...what?'
    },
    {
      icon: <HighlightIcon />,
      name: 'Insights',
      path: '/insights',
      description: 'We got the goods'
    },
    {
      icon: <LinearScale />,
      name: 'Strategy',
      path: '/strategy',
      description: 'The venture\'s steps'
    },
    {
      icon: <GavelIcon />,
      name: 'Values',
      path: '/values',
      description: 'Morality is unchanging'
    }
  ],
  ['dashboard']: [
    {
      name: 'Dashboard'
    },
    {
      icon: <DashboardIcon />,
    name: 'Your dashboard',
      path: '/dashboard',
      description: "Here you see an overview of stuff"
    }
  ]
};


export default class App extends Component {
  state = {
    isAuth: false
  };

  /**
   * @method _onLogin retrieves the username and password from the form data
   * then makes an Alfresco API call to authenticate with the appropriate
   * instance of Alfresco
   */
  handleLogin = async (e, type, email, password) => {
    try {
      if ( type === 'default' ) {
        return await Meteor.loginWithPassword({ email }, password, err => {

          this.setState({
            ...this.state,
            isAuth: !err,
            error: err && err.reason
          });

          return !err;
        });
      } else if ( type === 'facebook' ) {
        return await Meteor.loginWithFacebook({ email }, password, err => {

          this.setState({
            ...this.state,
            isAuth: !err,
            error: err && err.reason
          });

          return !err;
        });
      }

    } catch (e) {
      return e;
    }
  };

  handleLogout = () => {
    const err = Meteor.logout(err => err);
    if ( typeof err === 'undefined' ) {
      this.setState({
        ...this.state,
        isAuth: false
      });
    }
  };

  _getNavItems = (path) => {
    const segment = path.split('/')[1];
    return data[_.contains(['dashboard'], segment) ? segment : 'root'];
  };

  render() {
    const { isAuth } = this.state;

    return (
      <Router>
        <Fragment>
          <MuiThemeProvider theme={ theme1 }>
            <Route render={props => (
              <NavDrawer
                auth={isAuth}
                handleLogout={this.handleLogout}
                items={this._getNavItems(props.location.pathname)}
                {...props}>
                <Route exact path='/' component={ Company } />
                <Route exact path='/insights' component={ Insights } />
                <Route exact path='/insights/:slug' component={ Article } />
                <Route exact path='/login' render={() => (
                  <Login handleLogin={this.handleLogin} />
                )} />
                <Route exact path='/orgs' component={ Organizations } />
                <Route exact path='/plan' component={ BusinessPlan } />
                <Route exact path='/strategy' component={ Strategy } />
                <Route exact path='/signup' component={ Signup } />
                <Route exact path='/values' component={ Values } />
                {/*TODO: for every protected route, we need to check session on load */}
                <Private path='/dashboard' auth={true} component={ Dashboard } />
              </NavDrawer>)} />
          </MuiThemeProvider>

          {/*<MuiThemeProvider theme={ theme2 }>
            <Fragment>
              <Route exact path ='/consulting' component={ Consulting } />
              <Route exact path={'/consulting/services'} component={ ConsultServices } />
              <Route exact path={'/consulting/solutions'} component={ ConsultSolutions } />
            </Fragment>
          </MuiThemeProvider>

          <MuiThemeProvider theme={ theme1 }>
            <Fragment>
              <Route exact path ='/technology' component={ Technology } />
            </Fragment>
          </MuiThemeProvider>*/}
        </Fragment>
      </Router>
    );
  }
}
