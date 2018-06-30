import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import Footer from './../common/components/Footer';

const styles = theme => ({
  button: {
    borderRadius: 0,
    marginBottom: theme.spacing.unit * 3
  },
  darkButton: {
    backgroundColor: '#777',
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.black
    }
  },
  footer: {
    position: 'absolute',
    bottom: 0
  },
  formGroup: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  input: {
    marginBottom: theme.spacing.unit * 3
  },
  inputBase: {
    '&:-webkit-autofill': {
      '-webkit-box-shadow': 'inset 0 0 0px 9999px white'
    }
  },
  root: {
    marginTop: 65,
    [theme.breakpoints.down('xs')]: {
      marginTop: 0
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 10,
    padding: theme.spacing.unit * 4
  },
  title: {
    color: '#000',
    marginBottom: theme.spacing.unit * 3
  }
});

const data = {
  form: [
    {
      name: 'email',
      label: 'Email address',
      placeholder: 'Type your email here...',
      required: true,
      type: 'email'
    },
    {
      name: 'password',
      label: 'Password',
      placeholder: 'Type your password here...',
      required: true,
      type: 'password'
    }
  ]
};

export class Login extends React.Component {
  state = {
    error: '',
    isAuthenticated: false,
    isPasswordVisible: false,
    password: '',
    email: '',
  };

  _onChange = e => {
    e.preventDefault();

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  /**
   * @method _mouseDownVisibility() prevents the default action for the
   * password visibility button
   */
  _mouseDownVisibility = e => {
    e.preventDefault();
  }

  /**
   * @method _togglePasswordVisibility() sets the state on whether to show
   * the password in clear text
   */
  _togglePasswordVisibility = () => {
    this.setState({ isPasswordVisible: !this.state.isPasswordVisible });
  }

  render() {
    const { classes, handleLogin } = this.props;
    const { error, isAuthenticated, isPasswordVisible } = this.state;

    return isAuthenticated ? <Redirect push to='/' /> :
      <Grid className={classes.root} container justify='center'>
        <Grid item md={6} lg={4} sm={8} xl={3} xs={10}>
          <Paper className={classes.paper} elevation={1} square>
            <Typography
              align='center'
              className={classes.title}
              gutterBottom
              variant='display1'>
              titan.io
            </Typography>
            <form autoComplete='off' method='post' noValidate onSubmit={this._onLogin}>
              {
                data.form.map((field, key) => (
                  <FormControl
                    fullWidth
                    key={`key__${key}`}
                    required={field.required}>
                    <InputLabel
                      htmlFor={field.name}>
                      {field.label}
                    </InputLabel>
                    <Input
                      className={classes.input}
                      endAdornment={
                        field.type === 'password' ?
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='Toggle password visibility'
                            onClick={this._togglePasswordVisibility}
                            onMouseDown={this._mouseDownVisibility}>
                            {
                              isPasswordVisible
                                ? <VisibilityOff />
                                : <Visibility />
                            }
                          </IconButton>
                        </InputAdornment> : null
                      }
                      error={!!error}
                      inputProps={{
                        className: classes.inputBase
                      }}
                      name={field.name}
                      onChange={this._onChange}
                      placeholder={field.palceholder}
                      type={ field.type !== 'password'
                        ? field.type : isPasswordVisible
                        ? 'text' : 'password' } />
                  </FormControl>
                ))
              }
              <Typography color={ !!error ? 'error' : 'default' }>
                &nbsp;{ error }
              </Typography>
              <FormGroup className={classes.formGroup} row >
                <FormControlLabel
                  className={classes.input}
                  control={<Checkbox value='checked' />}
                  label='Remember me'
                  style={{ display: 'flex' }} />
                <Typography
                  className={classes.input}
                  component={Link}
                  style={{ marginTop: 15 }}
                  to='/recover'>
                  Need help?
                </Typography>
              </FormGroup>
              <Button
                className={classes.button}
                color='primary'
                component={Link}
                fullWidth
                onClick={(e) => handleLogin(e, 'default', this.state.email, this.state.password)}
                size='large'
                to='/'
                type='submit'
                variant='raised'>
                Login
              </Button>
              <Button
                className={`${classes.button} ${classes.darkButton}`}
                component={Link}
                fullWidth
                size='large'
                to='/signup'
                type='button'
                variant='raised'>
                Sign up
              </Button>
            </form>
          </Paper>
        </Grid>

        <Footer className={classes.footer} title='titan.io' />
      </Grid>;
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);