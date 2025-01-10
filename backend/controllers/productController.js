import {v2 as cloudinary} from "cloudinary";
import productModel from "../models/productModel.js";
// function for add products
async function addProduct(req, res) {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    // Check if files exist before accessing them
    const image1 = req.files && req.files.image1 ? req.files.image1[0] : null;
    const image2 = req.files && req.files.image2 ? req.files.image2[0] : null;
    const image3 = req.files && req.files.image3 ? req.files.image3[0] : null;
    const image4 = req.files && req.files.image4 ? req.files.image4[0] : null;

    const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

    let imagesURL = await Promise.all(
      images.map(async (item) =>{
        let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
        return result.secure_url
      })
    )

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      images: imagesURL,
      date: Date.now()
    }

    console.log(productData);

    const product = new productModel(productData);
    await product.save()
    res.json({success:true, message:"Product Added"});

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

// function for list products
async function listProducts(req, res) {
  try {
    const products = await productModel.find({});
    res.json({success:true,products});
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error});
  }
}

// function for Remove products
async function removeProducts(req, res) {}

// function for single product info
async function singleProduct(req, res) {}

export { addProduct, listProducts, removeProducts, singleProduct };
