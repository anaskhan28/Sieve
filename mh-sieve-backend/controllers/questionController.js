import {Question} from '../models/Question.js';
import {catchAsyncError} from '../middlewares/catchAsyncError.js';

// @desc    Create a new question
// @route   POST /api/questions
// @access  Public
export const createQuestion = catchAsyncError(async (req, res) => {
    const { question, answer, options } = req.body;

    // Check if question already exists
    const existingQuestion = await Question.findOne({ question });
    if (existingQuestion) {
        return res.status(400).json({
            success: false,
            message: 'Question already exists',
        });
    }

    if (answer < 0 || answer >= options.length) {
        return res.status(400).json({
            success: false,
            message: 'Answer is not a valid option',
        });
    }

    if (options.length < 2) {
        return res.status(400).json({
            success: false,
            message: 'Question must have at least 2 options',
        });
    }

    const data = await Question.create({ 
        question,
        answer,
        options
    });

    res.status(201).json({ success: true, data });
});

// @desc    Get all questions
// @route   GET /api/questions
// @access  Public
export const getAllQuestions = catchAsyncError(async (req, res) => {
    const { 
        page = 1, 
        limit = 10, 
        search = '', 
        sortBy = 'createdAt', 
        sortOrder = 'desc' 
    } = req.query;

    const pipeline = [
        {
            $match: {
                $or: [
                    { question: { $regex: search, $options: 'i' } },
                    { answer: { $regex: search, $options: 'i' } },
                ],
            },
        },
        {
            $sort: {
                [sortBy]: sortOrder === 'asc' ? 1 : -1,
            },
        },
        {
            $facet: {
                metadata: [{ $count: 'total' }],
                questions: [{ $skip: (page - 1) * limit }, { $limit: limit }],
            },
        },
        {
            $unwind: '$questions',
        },
        {
            $replaceRoot: {
                newRoot: '$questions',
            },
        },
    ];

    const questions = await Question.aggregate(pipeline);

    res.status(200).json({ success: true, data: questions });
});

// @desc    Get a question by ID
// @route   GET /api/questions/:id
// @access  Public
export const getSingleQuestion = catchAsyncError(async (req, res) => {
    const question = await Question.findById(req.params.id);
    if (!question) {
        res.status(404).json({ success: false, message: 'Question not found' });
    } else {
        res.status(200).json({ success: true, data: question });
    }
});