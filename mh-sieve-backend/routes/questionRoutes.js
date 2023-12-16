import express from 'express';

import {
    addQuestion,
    createQuestion,
    evaluateQuestion,
    getAllQuestions,
    getSingleQuestion
} from '../controllers/questionController.js';
const Router = express.Router();

Router
    .route("/")
    .get(getAllQuestions)
    .post(createQuestion)

Router
    .route("/add")
    .post(addQuestion)

Router
    .route("/evaluate")
    .post(evaluateQuestion)

Router
    .route("/:id")
    .get(getSingleQuestion)

export default Router;