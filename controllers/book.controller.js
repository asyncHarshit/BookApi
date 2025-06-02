import Book from "../models/book.js"


const getAllBook = async(req,res)=>{
    try {
        const allBooks = await Book.find({});
        res.status(201).json({
            data : allBooks,
            message : "All books"
        })
        
    } catch (error) {
        console.log("error in book creation", error.message);
        res.status(500).json({
            message: "Error in book creation",
            success: false,
            error: error.message
        });
        
        
    }
    
}


const getSingleBookById = async(req,res)=>{
    try {
        const getOneById = await Book.findById(req.params.id)
        if(!getOneById){
            res.status(404).json({
            success : false,
            message : "This book is not found"
        })
        }
        res.json({
            data : getOneById,
            message : "Book found"
        })
        
    } catch (error) {
        console.log("error in book creation", error.message);
        res.status(500).json({
            message: "Error in book creation",
            success: false,
            error: error.message
        });
        
    }



}


const addNewBook = async(req,res)=>{
    try {
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);
        if(newlyCreatedBook){
            res.status(201).json({
                message : "book Added sucessefully",
                success : true,
                data : newlyCreatedBook
            })
        }
        
    } catch (error) {
        console.log("error in book creation", error.message);
        res.status(500).json({
            message: "Error in book creation",
            success: false,
            error: error.message
        });
    }

}


const updateBookById = async(req,res)=>{
    try {
        const updateBookById = await Book.findByIdAndUpdate(req.params.id , req.body,{new : true})

        if(!updateBookById){
            res.status(404).json({
            success : false,
            message : "This book is not found"
        })
            return;
        }

        res.json({
            data : updateBookById,
            success : true,
            message : "sucessfully updated"
        })
           
    
        
    } catch (error) {
       
        console.log("error in book updation", error.message);
        res.status(500).json({
            message: "Error in book updation",
            success: false,
            error: error.message
        });
    }

        
}
    


const deleteBook = async(req,res)=>{
    try {
        const deleteBookByID = await Book.findByIdAndDelete(req.params.id);
        if(!deleteBookByID){
            res.status(404).json({
                message : "This book is not present"
            })
        }

        res.status(201).json({
            message : "Sucessefully deleted",
            success : true,
            data : deleteBookByID
        })
 
        
    } catch (error) {
        console.log("error in book creation", error.message);
        res.status(500).json({
            message: "Error in book creation",
            success: false,
            error: error.message
        });
    }

}

export  {getAllBook,getSingleBookById,addNewBook,updateBookById,deleteBook};


