import Questions from "../models/Questions.js"
import mongoose from "mongoose";


export const AskQuestion = async(req,res)=>{
    const postQuestionData=req.body;
    const postQuestion =  new Questions(postQuestionData); 
   try {
      await postQuestion.save();
      res.status(200).json('Posted a question successfully')
   } catch (error) {
      console.log(error)
      res.status(409).json("Couldn't post a new question")
   }
  }

  export const getAllQuestions= async (req, res)=>{
   try {
     const questionList =await Questions.find();
     res.status(200).json(questionList)
     console.log(questionList);
   } catch (error) {
     res.status(404).json({ messsage:error.message });
     console.log(error);
   }
  }