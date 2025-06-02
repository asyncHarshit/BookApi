import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true,'Title is required'],
        trim : true,
        maxLength : [100,'Length must be less than 100 characters']
    },
    author : {
        type : String,
        required : [true,'Author Name is required'],
        trim : true,
    },
    year : {
        type : Number,
        required : [true , 'Year is required'],
        max : [new Date().getFullYear(),'year cannot be in future']
    }
},{timestamps:true})

const Book = mongoose.model('Book',bookSchema)

export default Book