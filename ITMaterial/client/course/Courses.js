import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import {Link} from 'react-router-dom'
import auth from './../auth/auth-helper'
import Enroll from './../enrollment/Enroll'
import Loading from '../utils/loading'
import {enrollmentStats} from './../enrollment/api-enrollment'

const useStyles = makeStyles(theme => ({
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight: 400
  },
  gridList: {
    width: '110%',
    minHeight: 200,
    padding: '16px 0 0px',
  },
  tile: {
    textAlign: 'center',
    marginLeft: '30px',
    backgroundColor:'#04040c',
  },
  image: {
    height: '100%',
    width: '100%'    
  },
  tileBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    textAlign: 'left'
  },
  tileTitle: {
    fontSize:'1.1em',
    marginBottom:'5px',
    color:'#fffde7',
    display:'block'
  },
  action:{
    margin: '0 10px'
  }
}))



export default function Courses(props){
  const classes = useStyles()
  const jwt = auth.isAuthenticated() 
  const [values, setValues] = useState({
    redirect: false,
    error: ''
  })
  const [stats, setStats] = useState({})
  
  const findCommon = (course) => {
    return !props.common.find((enrolled)=>{return enrolled.course._id == course._id})
  }

  const consolelogProp = (prop) => {
    console.log(prop)
  }

  // const showStats = (course) => {

  //   useEffect(() => {(
  //     async()=> {
  //       const abortController = new AbortController()
  //           const signal = abortController.signal
  //           await enrollmentStats({courseId: course._id}, {t:jwt.token}, signal).then((data) => {
  //             if (data.error) {
  //               setValues({...values, error: data.error})
  //             } else {
  //               setStats(data)
  //             }
  //           })
  //     }
  //   )();
      
  //     return function cleanup(){
  //       abortController.abort()
  //     }
  //   }, [course._id])
  // }



  
    return (
        <GridList cellHeight={150} className={classes.gridList} cols={5}>
          {props.courses.map((course, i) => {
            
            return (
            findCommon(course) &&
              <GridListTile  className={classes.tile} key={i} style={{padding: 0, marginTop: '10px', borderRadius: '30px'}} >
                <Link to={"/course/"+course._id}><img style={{borderRadius: '20px'}} className={classes.image} src={'/api/courses/photo/'+course._id} alt={course.name} /></Link>
                <GridListTileBar style={{borderRadius: '20px'}} className={classes.tileBar}
                  title={<Link to={"/course/"+course._id} className={classes.tileTitle}>{course.name}</Link>}
                  subtitle={<span>{course.desc}</span>}
                  actionIcon={
                    <div className={classes.action}>
                    {auth.isAuthenticated() ? <Enroll courseId={course._id}/> : <Link to="/signin">Sign in to learn</Link>}
                    </div>
                  }
                />
               {/* {consolelogProp(course.)} */}
              </GridListTile>)
              }
          )}
        </GridList>
    )
}

Courses.propTypes = {
  courses: PropTypes.array.isRequired
}