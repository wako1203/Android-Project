import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Divider from '@material-ui/core/Divider'
import {listPublished} from './../course/api-course'
import {listEnrolled, listCompleted} from './../enrollment/api-enrollment'
import Typography from '@material-ui/core/Typography'
import auth from './../auth/auth-helper'
import Courses from './../course/Courses'
import Enrollments from '../enrollment/Enrollments'
import Loading from '../utils/loading'

const useStyles = makeStyles(theme => ({
  card: {
    width:'95%',
    margin: 'auto',
    marginTop: 20,
    marginBottom: theme.spacing(2),
    padding: 20,
    backgroundColor: '#ffffff' 
  },
  extraTop: {
    marginTop: theme.spacing(12)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight: 400
  },
  gridList: {
    width: '100%',
    minHeight: 200,
    padding: '16px 0 10px'
  },
  tile: {
    textAlign: 'center'
  },
  image: {
    height: '100%'
  },
  tileBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.72)',
    textAlign: 'left'
  },
  enrolledTitle: {
    color:'black',
    marginBottom: 5
  },
  action:{
    margin: '0 10px'
  },
  enrolledCard: {
    backgroundColor: 'white',
  },
  divider: {
    marginBottom: 16,
    backgroundColor: 'rgb(157, 157, 157)'
  },
  noTitle: {
    color: 'lightgrey',
    marginBottom: 12,
    marginLeft: 8
  }
}))

export default function Home(){
  const classes = useStyles()
  const jwt = auth.isAuthenticated()
  const [courses, setCourses] = useState([])
  const [enrolled, setEnrolled] = useState([])
  // useEffect(() => {
  //   const abortController = new AbortController()
  //   const signal = abortController.signal
  //   listEnrolled({t: jwt.token}, signal).then((data) => {
  //     if (data.error) {
  //       console.log(data.error)
  //     } else {
  //       setEnrolled(data)
  //     }
  //   })
  //   return function cleanup(){
  //     abortController.abort()
  //   }
  // }, [])

  // useEffect( () => {
  //   const getCourses = async () => {
  //     const data = await fetch("http://localhost:3000/api/courses").then((res) => res.json());
  //     setCourses(data)
  //   };
  //   getCourses()
  // }, [])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    listPublished(signal).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setCourses(data)        
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])
    return (<div className={classes.extraTop}>
      <Card  className={classes.card} elevation={0}>
        <Typography variant="h5" component="h2">
            All Courses
        </Typography>
        {(courses.length != 0 && courses.length != enrolled.length) ? (<Courses courses={courses} common={enrolled}/>) 
        : ((courses.length === 0 && <Loading type='spin' color='#99DDFF'/>) && <Typography variant="body1" className={classes.noTitle}>No new coursess.</Typography>)
        }
      </Card>
    </div>
    )
}

