import mongoose from "mongoose";

const QuestionSchema = mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    questionTitle:{type:String, require:'Question must have a title'},
    questionBody:{type:String, require:'Question must have a body'},
})
export default mongoose.model("Questions",QuestionSchema)