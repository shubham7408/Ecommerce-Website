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
    const image1 = req.files.image1 ? req.files.image1[0] : null;
    const image2 = req.files.image2 ? req.files.image2[0] : null;
    const image3 = req.files.image3 ? req.files.image3[0] : null;
    const image4 = req.files.image4 ? req.files.image4[0] : null;

    console.log(
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller
    );
    console.log(image1, image2, image3, image4);
    res.json({});
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

// function for list products
async function listProducts(req, res) {}

// function for Remove products
async function removeProducts(req, res) {}

// function for single product info
async function singleProduct(req, res) {}

export { addProduct, listProducts, removeProducts, singleProduct };
