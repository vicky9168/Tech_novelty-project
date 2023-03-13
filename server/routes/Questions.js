import express from 'express';
import {AskQuestion,getAllQuestions} from '../Controller/Questions.js'
const router=express.Router();

router.post('/',AskQuestion);
router.get('/',getAllQuestions)

export default router;