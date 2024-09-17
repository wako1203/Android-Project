import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import auth from './../auth/auth-helper'
import {listByInstructor} from './api-course.js'
import {Redirect, Link} from 'react-router-dom'
import Loading from '../utils/loading'

const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
    maxWidth: 800,
    margin: 'auto',
    padding: theme.spacing(3),
    marginTop: theme.spacing(12)
  }),
  title: {
    margin: `${theme.spacing(3)}px 0 ${theme.spacing(3)}px ${theme.spacing(1)}px` ,
    color: 'black',
    fontSize: '1.2em'
  },
  addButton:{
    float:'right'
  },
  leftIcon: {
    marginRight: "8px",
  },
  avatar: {
    borderRadius: 0,
    width:65,
    height: 40
  },
  listText: {
    marginLeft: 16,
    color: '#3FD2C7'
  }
}))
  
export default function MyCourses(){
  const classes = useStyles()
  const [courses, setCourses] = useState([])
  const [redirectToSignin, setRedirectToSignin] =  useState(false)
  const jwt = auth.isAuthenticated()

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    listByInstructor({
      userId: jwt.user._id
    }, {t: jwt.token}, signal).then((data) => {
      if (data.error) {
        setRedirectToSignin(true)
      } else {
        setCourses(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])

  if (redirectToSignin) {
    return <Redirect to='/signin'/>
  }
  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <Typography type="title" className={classes.title}>
          Courses you created:
          <span className={classes.addButton}>
            <Link to="/teach/course/new">
              <Button style={{backgroundColor: '#3FD2C7', color: 'white'}} variant="contained">
                <Icon className={classes.leftIcon}>add_box</Icon>  New Course
              </Button>
            </Link>
          </span>
        </Typography>
        <List>
        
        {courses.length === 0 && <Loading type='spin' color='#99DDFF'/>} 
        {courses.map((course, i) => {
            return   <Link to={"/teach/course/"+course._id} key={i}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar src={'/api/courses/photo/'+course._id+"?" + new Date().getTime()} className={classes.avatar}/>
                </ListItemAvatar>
                <ListItemText primary={course.name + (course.published ? " ( Published )" : " ( Have not published )")} secondary={course.description + " | " + course.category}  className={classes.listText}/>
              </ListItem>
            </Link>})}
            
        </List>
      </Paper>
    </div>)
}