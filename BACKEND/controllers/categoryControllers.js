const Category = require('../models/categoryModels');
const asyncHandler = require('express-async-handler');
const cloudinary = require('../utils/cloudinary');

//Get Category controller
const getCategory =  asyncHandler(
    async(req,res)=>{
        const category = await Category.find()
        res.json(category);
    }
)

//Create caregory controller
const  CreateCategory = asyncHandler(async (req, res) => {
  const { foodname, price, category, pic } = req.body;

  if (!foodname || !price || !category || !pic) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
  } else {
    const Product = new Category({ user: req.user._id, foodname,price, category, pic });

    const createdProduct = await Product.save();

    res.status(201).json(createdProduct);
  }
});

//Get one category controller
const getCategoryById= asyncHandler(async (req,res)=>{
     const category= await Category.findById(req.params.id);

     if(category){
      res.json(category);
     }else{
      res.status(404).json({message: "Category not found"});
     }
     res.json(note);
  }
)

//Update category controller
const UpdateCategory = asyncHandler(async (req, res) => {
  const { foodname, price, category, pic } = req.body;

  const product = await Category.findById(req.params.id);

  if (product.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (product) {
    product.foodname = foodname;
    product.price = price;
    product.category = category;
    product.pic = pic;

    const updatedCategory = await product.save();
    res.json(updatedCategory);
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});

//delete category controller
const DeleteCategory= asyncHandler(async (req, res) => {
  const product = await Category.findById(req.params.id);

  if ( product.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if ( product) {
    await  product.remove();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404);
    throw new Error("Note not Found");
  }
});


//export all functions
module.exports = {getCategory,
     CreateCategory,
     getCategoryById,
     UpdateCategory,
     DeleteCategory
    }