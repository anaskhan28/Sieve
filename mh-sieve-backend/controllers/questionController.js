// Import necessary modules
const Question = require('../models/Question');
const catchAsyncError = require('../utils/catchAsyncError');

// Create a new question
exports.createQuestion = catchAsyncError(async (req, res) => {
    const { title, description } = req.body;
    const question = await Question.create({ title, description });
    res.status(201).json({ success: true, data: question });
});

// Get all questions
exports.getAllQuestions = catchAsyncError(async (req, res) => {
    const questions = await Question.find();
    res.status(200).json({ success: true, data: questions });
});

// Get a single question by ID
exports.getQuestionById = catchAsyncError(async (req, res) => {
    const question = await Question.findById(req.params.id);
    if (!question) {
        res.status(404).json({ success: false, message: 'Question not found' });
    } else {
        res.status(200).json({ success: true, data: question });
    }
});

// Update a question by ID
exports.updateQuestionById = catchAsyncError(async (req, res) => {
    const { title, description } = req.body;
    const question = await Question.findByIdAndUpdate(
        req.params.id,
        { title, description },
        { new: true, runValidators: true }
    );
    if (!question) {
        res.status(404).json({ success: false, message: 'Question not found' });
    } else {
        res.status(200).json({ success: true, data: question });
    }
});

// Delete a question by ID
exports.deleteQuestionById = catchAsyncError(async (req, res) => {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) {
        res.status(404).json({ success: false, message: 'Question not found' });
    } else {
        res.status(200).json({ success: true, data: {} });
    }
});
