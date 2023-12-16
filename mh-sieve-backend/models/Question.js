
import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                return v >= 0 && v < this.options.length;
            },
            message: props => `${props.value} is not a valid answer!`
        }
    },
    options:
        [
            {
                type: String,
                required: true
            }
        ]
});

export const Question = mongoose.model('Question', questionSchema);
