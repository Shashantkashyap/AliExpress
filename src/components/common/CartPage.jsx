import React, { useEffect, useState, useCallback } from "react";
import { db } from "../../firebaseConfig";
import { collection, query, getDocs, deleteDoc, doc } from "firebase/firestore";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setCartLength } from "../../feature/CartlengthSlice";
import toast, { Toaster } from 'react-hot-toast';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const userId = localStorage.getItem("email");
  const dispatch = useDispatch();

  //Payment plateform images

  const paymentImages = [
    "https://i.pinimg.com/originals/06/02/28/060228fa54080f38ee2fd8ff45a4da8e.jpg",
    "https://cdn.wallpapersafari.com/85/16/HNAfry.jpg",
    "https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtIL8Qqw87N_ECuaJg41Qg06IkVgHOTiMnNA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQ3uhlEkLwNJ9Y6kjLphe_irfN1i9H1pCMw&s",
    "https://download.logo.wine/logo/Apple_Pay/Apple_Pay-Logo.wine.png",
  ];

  // fetching cartData from Firestore

  const fetchCartItems = useCallback(async () => {
    if (userId) {
      try {
        const userDocRef = collection(db, "users", userId, "cartDetails"); //user(collection and cartDetails(sub-collection))
        const q = query(userDocRef);
        const querySnapshot = await getDocs(q);

        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCartItems(items);
        dispatch(setCartLength(items.length));
      } catch (error) {
        console.error("Error fetching cart items: ", error);
      }
    }
  }, [userId]);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  //logic to delete from cartData from firestore

  const handleDelete = async (itemId) => {
    try {
      console.log(typeof userId);
      await deleteDoc(doc(db, "users", userId, "cartDetails", itemId));
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
    } catch (error) {
      console.error("Error deleting cart item: ", error);
    }
  };

  if (!userId) {
    return (
      <div className="text-center mt-10">Please log in to view your cart.</div>
    );
  }

  //Total price calculation

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = ()=>{
    toast.success("Payment gateway will be available soon")
    
  }

  return (
    <div>
      <Toaster/>
      <div className="container mx-auto p-4 bg-gray-100">
        <div className="flex flex-col md:flex-row gap-4 w-[90%] mx-auto">
          {/* Left Section */}
          <div className="flex-1 p-4 rounded-lg w-full md:w-[60%]">
            <div className="flex flex-col bg-white p-3 mb-4 rounded-lg">
              <div className="text-[35px] font-semibold mb-4">
                Shopping Cart ({cartItems.length})
              </div>
              <div className="bg-[#FF7B00] text-center rounded-xl text-[18px] text-white font-semibold gap-4 py-2 px-4 my-3 mb-4 flex items-center">
                <img
                  src="https://ae01.alicdn.com/kf/See02694b3e5c434c8808d72af36e42973/430x88.png"
                  alt=""
                  className="w-44"
                />
                <span>Deals expires in 48 hr.</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <div className="flex  py-4 items-center hover:shadow-lg rounded-2xl pl-4 bg-gradient-to-t from-red-50 to-white transition-all duration-300 ease-in-out transform hover:scale-105">
                    <div className="w-[30%] md:w-[15%]">
                      <img
                        src={item.image[0]}
                        alt={item.title}
                        className="w-24 h-24 rounded-lg"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="text-[25px] font-bold">{item.title}</div>
                      <div className="text-gray-600 text-[16px] font-bold">
                        ${item.price}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:text-red-700 transition duration-200 pr-4"
                    >
                      <RiDeleteBin6Line size={24} />
                    </button>
                  </div>
                  <div className="bg-gray-300 w-full h-[.1px] my-3"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[35%] rounded-lg flex flex-col gap-2">
            <div className="bg-white p-4 rounded-md">
              <div className="text-[28px] font-semibold mb-4">Summary</div>
              <div className="flex justify-between mb-4">
                <div className="text-[20px] font-semibold">Total :</div>
                <div className="text-[22px] font-bold">${total.toFixed(2)}</div>
              </div>
              <button className="px-4 py-2 w-full bg-red-300 text-white rounded hover:bg-red-500 mt-4 transition duration-200" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
            <div className="mt-6 bg-white p-4 rounded-md">
              <div className="text-[24px] font-semibold mb-4">
                Payment Methods :
              </div>
              <div className="flex flex-wrap gap-2">
                {paymentImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="Payment Method"
                    className="w-14 h-14 object-contain rounded-lg"
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="flex flex-col gap-3 mt-3">
                <p className="text-[24px] font-semibold">Buyers Protection :</p>
                <div className="flex gap-3">
                  <img
                    src="https://ae01.alicdn.com/kf/S5d155b426fd74b24bd10e73f9ac90a93b/64x76.png"
                    className="w-8"
                    alt="Buyers Protection"
                    loading="lazy"
                  />
                  <span className="text-[14px] font-semibold">
                    &nbsp;&nbsp;Get full refund if the item is not as described
                    or if it is not delivered
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default CartPage;
