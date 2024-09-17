import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Edit from '@material-ui/icons/Edit'
import Person from '@material-ui/icons/Person'
import Divider from '@material-ui/core/Divider'
import auth from './../auth/auth-helper'
import {read} from './api-user.js'
import {Redirect, Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import FileUpload from '@material-ui/icons/AddPhotoAlternate'


const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
    margin: 'auto',
    padding: theme.spacing(3),
    marginTop: theme.spacing(12)
  }),
  title: {
    textAlign: 'center',
    marginTop: theme.spacing(3),
    color: 'black'
  },
  input: {
    display: 'none',
  }
}))

export default function Profile({ match }) {
  const classes = useStyles()
  const [user, setUser] = useState({})
  const [redirectToSignin, setRedirectToSignin] = useState(false)
  const jwt = auth.isAuthenticated()

  const [value, setValue] = useState({
    image: '',
  })



  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    read({
      userId: match.params.userId
    }, {t: jwt.token}, signal).then((data) => {
      if (data && data.error) {
        setRedirectToSignin(true)
      } else {
        setUser(data)
      }
    })

    return function cleanup(){
      abortController.abort()
    }

  }, [match.params.userId])
  
    if (redirectToSignin) {
      return <Redirect to='/signin'/>
    }
    return (
      <Paper className={classes.root} elevation={4}>
        <Typography variant="h6" className={classes.title}>
          Profile
        </Typography>
        <List dense>
          <ListItem>
            <ListItemAvatar style={{margin: '0 auto'}}>      
              <Avatar style={{ height: '70px', width: '70px' }}>
                <Person fontSize='large'/>
              </Avatar>
            </ListItemAvatar>

            
          </ListItem>
          <ListItemText style={{textAlign: 'center'}} primary={"Your name: " + user.name} secondary={"Your email: " + user.email}/> 

          <ListItem>
          {
             auth.isAuthenticated().user && auth.isAuthenticated().user._id == user._id &&
              (<div style={{paddingLeft: '235px'}} >
                <Link to={"/user/edit/" + user._id}>
                  <IconButton aria-label="Edit" style={{color: '#00458B'}}>
                    <Edit/>
                  </IconButton>
                </Link>
              </div>)
            }
          </ListItem>
          <ListItemText style={{textAlign: 'center'}} primary={"Joined: " + (
              new Date(user.created)).toDateString()}/>
          <ListItemText style={{textAlign: 'center', padding: '5px'}} primary={"If you are an educator, send me an email with your details information and some courses you have created. I'm gonna confirm if it is true or not, then i would give you rights of educator"} />
          <ListItemText style={{textAlign: 'center'}} primary={"Email: lethanhdat762003@gmail.com"} />
        </List>
      </Paper>
    )
  }