const mongoose = require('mongoose');

const categorySchema = mongoose.Schema(
  {
    foodname: {
      type: String,
    },
    price: {
      type: String,
    },
    category: {
      type: String,
    },
      pic:{
            type:String,
            default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;