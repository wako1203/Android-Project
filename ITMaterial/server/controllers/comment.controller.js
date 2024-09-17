import User from '../models/user.model'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/config'
import Comment from '../models/comment.model'
const verify = require('../middleware/verifyToken');


const addComment = async (req, res) => {
    
}