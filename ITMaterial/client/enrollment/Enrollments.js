import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import CompletedIcon from '@material-ui/icons/VerifiedUser'
import InProgressIcon from '@material-ui/icons/DonutLarge'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight: 400
  },
  container: {
    minWidth: '100%',
    paddingBottom: '14px'
  },
  gridList: {
    width: '110%',
    minHeight: 100,
    padding: '12px 0 10px'
  },
  tile: {
    textAlign: 'center',
    borderRadius: '5px',
    marginLeft: '30px',
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
  },
  progress:{
    color: '#b4f8b4'
  }
}))

export default function Enrollments(props){
  const classes = useStyles()
    return (
      <div>
        <GridList cellHeight={150} className={classes.gridList} cols={5}>
          {props.enrollments.map((course, i) => (
            <GridListTile key={i} className={classes.tile} style={{borderRadius: '30px'}}>
              <Link to={"/learn/"+course._id}><img className={classes.image} style={{borderRadius: '20px'}} src={'/api/courses/photo/'+course.course._id} alt={course.course.name} /></Link>
              <GridListTileBar style={{borderRadius: '20px'}} className={classes.tileBar}
                title={<Link to={"/learn/"+course._id} className={classes.tileTitle}>{course.course.name}</Link>}
              />
            </GridListTile>
          ))}
        </GridList>
    </div>
    )
}

