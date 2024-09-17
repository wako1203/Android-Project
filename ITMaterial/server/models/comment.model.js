import mongoose from 'mongoose'

const Comment = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, required: true, trim: true },
    upvotes: { type: Number, default: 0},
    downvotes: { type: Number, default: 0},
}, {
    timestamps: true,
});

export default moogoose.model('Comment', Comment)