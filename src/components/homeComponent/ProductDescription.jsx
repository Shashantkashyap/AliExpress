import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../data/ProductData";
import { GrLocation } from "react-icons/gr";
import { CiCircleInfo } from "react-icons/ci";
import Similar from "../../components/common/Similar";
import { db } from "../../firebaseConfig";
import { doc, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { setOverlay } from "../../feature/OverlaySlice";



function ProductDescription() {
  const productId = useSelector((state) => state.product.productId);
  const productData = Product.find((product) => product.id === productId);
  const [productImage, setProductImage] = useState(0);
  const userId = localStorage.getItem("email");
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //onClick to button Product will be added to cart  in Firestore Database

  const handleAddToCart = async () => {
    try {
      if (userId && productData) {
        const { id, title, price, description, category, images } = productData;
        
        // verify all the details

        if (id && title && price && description && category && images ) {
          const userDocRef = doc(db, "users", userId);
          await addDoc(collection(userDocRef, "cartDetails"), {
            id,
            title,
            price,
            description,
            category,
            image: images,
            
          });
          toast.success("Product added to cart successfully");
          navigate("/cartPage");
          dispatch(setOverlay(false));
          
        } else {
          toast.error("Product data is incomplete.");
        }
      } else {
        toast.error("User is not logged in or product data is missing.");
      }
    } catch (error) {
      toast.error("Error adding document: ", error);
    }
  };


  if (!productData) {
    return (
      <div className="text-center text-[30px] font-bold text-red-500">
        Product not found
      </div>
    );
  }

  return (
    <div>
      <Toaster/>
      

      <div className="flex flex-wrap gap-6 p-6 w-[95%] mx-auto mb-5">
        {/* Left Part */}
        <div className="flex-1 w-[65%]">
          <div className="flex gap-10">
            <div className="flex items-center mb-4">
              <img
                src={
                  productImage === 0 ? productData.images[0] : productData.images[1]
                }
                alt={productData.title}
                className=" w-96 h-auto rounded shadow-lg"
              />
            </div>
            <div className="flex flex-col items-start mb-4 w-[60%]">
              <div className="text-[35px] font-bold text-gray-800 mb-">
                ${productData.price}
              </div>
              <div className="text-gray-600 mb-2 text-sm font-semibold">
                Price shown before taxes | extra 5% off with coins
              </div>
              <div className="py-2 px-4 text-[16px] w-full  text-red-400 bg-gradient-to-t from-red-200 to-white">
                Coupons and discount not available{" "}
              </div>
              <div className="text-[30px] font-semibold text-gray-900 mt-3">
                {productData.title}
              </div>
              <div className="my-3">
                {productData.description}
              </div>
              <div className="text-gray-600">
                {Math.ceil(Math.random() * 10)} Sold
              </div>
              <div className="bg-gray-400 w-full h-[1px] mt-10"></div>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src={productData.images[0]}
              alt={productData.title}
              className="w-20 h-20 object-cover rounded cursor-pointer shadow"
              onClick={() => setProductImage(0)}
            />
            <img
              src={productData.images[1]}
              alt={productData.title}
              className="w-20 h-20 object-cover rounded cursor-pointer shadow"
              onClick={() => setProductImage(1)}
            />
          </div>
        </div>

        {/* Right Part */}
        <div className="flex flex-col w-[25%] border-[1px] p-4 rounded-3xl">
          <div className="mb-4 flex justify-between">
            <p className="text-lg font-semibold">Ship to</p>
            <p className="flex items-center text-gray-700">
              <GrLocation className="mr-2" /> <span>India</span>
            </p>
          </div>
          <div className="mb-4 flex flex-col gap-3">
            <p className="font-semibold text-[18px] p-2  bg-gradient-to-b from-red-100 to-white">
              AliExpress Commitment
            </p>
            <p className="text-gray-600 mb-2 text-sm flex ">
              <span>
                <CiCircleInfo fontSize={18} className="mt-1 mr-1" />
              </span>
              {`This product can't be shipped to your address. Select another product or address.`}
            </p>
            <p className="font-semibold text-gray-800 text-[18px]">
              Security & Privacy
            </p>
            <p className="text-gray-600 text-sm">
              Safe payments: We do not share your personal details with any
              third parties without your consent. Secure personal details: We
              protect your privacy and keep your personal details safe and
              secure.
            </p>
          </div>
          <div>
            <button className="px-4 py-2 w-full bg-red-300 text-white rounded hover:bg-red-500 mt-4" onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className=" w-full">
        <Similar/>
      </div>

      
    </div>
  );
}

export default ProductDescription;
