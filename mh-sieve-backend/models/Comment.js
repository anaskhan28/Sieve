import { Schema, model } from 'mongoose';

const commentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

export default model('Comment', commentSchema);
