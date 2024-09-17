import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { Typography, Avatar, ListItemText } from '@material-ui/core'
import ReplyIcon from '@material-ui/icons/Reply';
import recommendsdata from "./recommendsdata"

const useStyles = makeStyles(theme => ({
  extraTop: {
    marginTop: theme.spacing(11)
  },
  textCenter: {
    textAlign: 'center',
    marginTop: theme.spacing(3)
  },
  container: {
    padding: 0,
    margin: 'auto',
    width: '800px'
  },
  content: {
    marginTop: theme.spacing(3)
  },
  card: {
    margin:'24px 200px 40px',
  },
  category:{
    color: '#5c5c5c',
    fontSize: '0.9em',
    padding: '3px 5px',
    backgroundColor: '#dbdbdb',
    borderRadius: '0.2em',
    marginTop: 5
  },
  sub: {
    display: 'block',
    margin: '3px 0px 5px 0px',
    fontSize: '0.9em',
    color: '#616161'
  },
  inlineIcons: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: '50%',
    height: '50px',
    width: '50px'
  }
  
}))

export default function Recommendation(){
   const classes = useStyles()
   
  function mapIngredients() {
    return recommendsdata.map((d,i) => (
      <Card key={i} className={classes.card}>
        <CardHeader
                  avatar={<Avatar src={d.image} />}
                  title={d.name}
                  subheader={<div>
                        {d.description}
                        <br/>
                        <div className={classes.inlineIcons}>
                          <FavoriteIcon fontSize='small'/>
                          <span className={classes.category}>{d.loves}</span>
                          <ReplyIcon fontSize='default'/>
                          <span className={classes.category}>{d.shares}</span>
                        </div>
                        <span className={classes.sub}>{d.time}</span>
                      </div>
                    }
                />
      </Card>
    ))
  }
      return (
      <div className={classes.extraTop}>
        {mapIngredients()}
      </div>
      )
  }
  
  