import React, { useState, useRef } from 'react'
import { Typography, TextField, Button, Avatar, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Person from '@material-ui/icons/Person'


const useStyles = makeStyles( theme => ({
  commentsOuterContainer: {
 
  },
  commentsInnerContainer: {
    overflowY: 'auto',
    marginRight: '30px'
  }

}))

const CommentSection = () => {
  const classes = useStyles()
  const [comment, setComment] = useState('')  
 
  const comments = [
    {
      id: 1,
      name: "Duane Duncan",
      comment: "This course is very helpful for me"
    },
    {
      id: 2,
      name: "Felix Andre",
      comment: "I learned how to do JS this course and find this very helpful"
    },
    {
      id: 3,
      name: "Molisa Cisa",
      comment: "Nice course"
    }
  ]

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
           {comments.map((c, i) => (
              <Typography key={i} gutterBottom variant="subtitle1">
                  <Avatar>
                    <Person fontSize='large'/>
                  </Avatar>
                  <span><b>{c.name}</b></span> 
                  <ListItemText> {c.comment} </ListItemText>
              </Typography>
           ))}
        </div>
        <div style={{width: '70%'}}>
          <Typography gutterBottom variant="h6">Write a comment</Typography>
          <TextField
            fullWidth
            rows={4}
            variant="outlined"
            label="Comment"
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment} variant="contained" color="primary">
            Comment
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CommentSection