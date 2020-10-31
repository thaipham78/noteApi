const router = require("express").Router();
const noteModel=require('../models/index').Note;

//Get all notes//
router.get('/',async (req,res)=>{
try{
    const notes=await noteModel.findAll();
    res.json(notes);
} 
catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
}
)
//Create note//
router.post('/note',async (req,res)=>{
    try{
    const {description}=req.body;
    const newNote= await noteModel.create({description:description});
    if(newNote._options.isNewRecord==true){
    res.json("Created");
    }
    else{
    res.json("Error")
    }
    } 
    catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
    }
})
//Update note//
router.delete('/note/:id',async (req,res)=>{
    try{
    const { id } = req.params;
    const delNote= await noteModel.destroy({
        where:{
           id:id 
        }
    });
    if(delNote===1){
        res.json("Delete Succesfully")
    }
    else{
        res.json("This note does not exits")
    }
    } 
    catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
    }
})
//Delete note//
router.put('/note/:id',async (req,res)=>{
    try{
    const { id } = req.params;
    const {description}=req.body;
    const updateNote= await noteModel.update({description:description},{
        where:{
           id:id 
        }
    });
    if(updateNote[0]===1){
        res.json("Update Succesfully")
    }
    else{
        res.json("This note does not exits")
    }
    } 
    catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
    }
})
module.exports = router;
