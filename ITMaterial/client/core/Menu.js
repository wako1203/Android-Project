import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Library from '@material-ui/icons/LocalLibrary'
import RateReviewIcon from '@material-ui/icons/RateReview'
import Button from '@material-ui/core/Button'
import PersonIcon from '@material-ui/icons/Person';
import auth from '../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'
import image from "./logo.png"

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#99DDFF'}
  else
    return {color: '#00458B'}
}
const isPartActive = (history, path) => {
  if (history.location.pathname.includes(path))
    return {color: '#fffde7', backgroundColor: '#3FD2C7', marginRight:10}
  else
    return {color: '#fffde7', backgroundColor: '#3FD2C7', marginRight:10}
}
const Menu = withRouter(({history}) => (
  <AppBar elevation={0} position="fixed" style={{zIndex:12343455, backgroundColor: 'white'}}>
    <Toolbar>
      <img style={{height: "55px", paddingRight: '10px'}} src={image} />
      <Typography variant="h6" style={{color: '#00458B'}}>
      CODY
      </Typography>
      <div>
        <Link to="/">
          <IconButton aria-label="Home" style={isActive(history, "/")}>
            <span className='material-icons'>
              home
            </span> 
          </IconButton>
        </Link>
        <Link to="/road">
          <IconButton style={isActive(history, "/road")}>
            <span className='material-icons'>
              fork_left
            </span>
          </IconButton>
        </Link>
        <Link to="/recommendations">
          <IconButton style={isActive(history, "/recommendations")}>
            <RateReviewIcon/>
          </IconButton>
        </Link>
        
      </div>
      <div style={{'position':'absolute', 'right': '10px'}}><span style={{'float': 'right'}}>
      {
        !auth.isAuthenticated() && (<span>
          <Link to="/signup">
            <Button style={isActive(history, "/signup")}>Sign up
            </Button>
          </Link>
          <Link to="/signin">
            <Button style={isActive(history, "/signin")}>Sign In
            </Button>
          </Link>
        </span>)
      }
      {
        auth.isAuthenticated() && (<span>
          <Link to="/enrolled"><Button style={{color: '#fffde7', backgroundColor: '#3FD2C7', marginRight:10}}>Enrolled</Button></Link>
          {auth.isAuthenticated().user.educator && (
          <Link to="/teach/courses"><Button style={isPartActive(history, "/teach/")}>Add course</Button></Link>)}
          <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}><PersonIcon/></Button>
          </Link>
          <Button style={{color: 'white', backgroundColor: 'crimson', marginLeft:10}} onClick={() => {
              auth.clearJWT(() => history.push('/'))
            }}>Sign out</Button>
        </span>)
      }
      </span></div>
    </Toolbar>
  </AppBar>
))

export default Menu
