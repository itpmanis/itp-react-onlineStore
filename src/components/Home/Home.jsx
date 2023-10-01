import React, { useState, useEffect } from 'react';
import foodApi from '../../Api/foodApi';
import Mobile from '../../assets/mobile.png';
import Appstore from '../../assets/appstore.png';
import Hero from '../Hero/Hero';

const Home = () => {
  const [selectedItems, setSelectedItems] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [purchasesHistory, setPurchasesHistory] = useState([]);
  const [loading, setLoading] = useState(true);

 

  const handleItem = (data, quantity) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [data.id]: {
        ...data,
        quantity,
      },
    }));
  };

  const handleDelete = (id) => {
    const deletedItem = selectedItems[id];
    const { price, quantity } = deletedItem;
    const updatedItems = { ...selectedItems };
    delete updatedItems[id];
    setSelectedItems(updatedItems);
    setTotalAmount((prevTotalAmount) => prevTotalAmount - price * quantity);
  };

  const handlePay = () => {
    const selectedItemsArray = Object.values(selectedItems);
    setPurchasesHistory((prevPurchasesHistory) => [...prevPurchasesHistory, ...selectedItemsArray]);
    setSelectedItems({});
    setTotalAmount(0);
  };

  useEffect(() => {
    const getSelectedData = localStorage.getItem('selectedBox');
    const totalAmountFromLocalStorage = localStorage.getItem('totalAmount');
    const buyHistory = localStorage.getItem('historyBox');

    if (getSelectedData && totalAmountFromLocalStorage && buyHistory) {
      setSelectedItems(JSON.parse(getSelectedData));
      setTotalAmount(parseFloat(totalAmountFromLocalStorage));
      setPurchasesHistory(JSON.parse(buyHistory));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('selectedBox', JSON.stringify(selectedItems));
      localStorage.setItem('totalAmount', JSON.stringify(totalAmount));
    }
  }, [selectedItems, totalAmount]);

  return (
    <>
      <Hero />
      <div className="flex justify-center items-center text-3xl">What's on the Menu</div>

      <div className="flex flex-row gap-6 flex-wrap m-4">
        {foodApi.map((data) => {
          return (
            <div key={data.id} className="mt-6 w-60">
              <div className="relative bg-gray-100 p-4">
                <img src={data.image} alt="card-image" className="h-32 w-full" />
                <div className="absolute top-0 right-0 bg-blue-500 text-white p-2 rounded-bl-lg">
                  {data.category}
                </div>
                <div className="mt-2">
                  <h2 className="text-lg font-bold">{data.name}</h2>
                  <p className="text-gray-700">{data.description}</p>
                  <p className="text-gray-900">Price: ${data.price}</p>
                </div>
                <div className="mt-4 flex items-center">
                  <input
                    type="number"
                    className="border p-2 w-1/2"
                    placeholder="Quantity"
                    value={selectedItems[data.id] ? selectedItems[data.id].quantity : ''}
                    onChange={(e) => handleItem(data, parseInt(e.target.value, 10) || 0)}
                  />
                  <button
                    onClick={() => handleItem(data, parseInt(selectedItems[data.id]?.quantity, 10) || 1)}
                    className="bg-green-400 text-white px-4 py-2 ml-4 rounded-lg"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex">
        <div className="w-1/2 p-8">
          <h2 className="text-center font-bold">Your Cart</h2>
          <div className="border border-gray-300 rounded-lg p-4 h-96 overflow-y-auto">
            {Object.values(selectedItems).length === 0 ? (
              <>
                <h2>Your cart is empty</h2>
                <h4>Please add meals from the menu.</h4>
              </>
            ) : (
              <>
                {Object.values(selectedItems).map((item) => (
                  <div key={item.id} className="flex items-center justify-between mt-4">
                    <div className="flex flex-col">
                      <span className="font-bold">Name:</span> {item.name}
                      <span className="font-bold">Price:</span> ${item.price * item.quantity}
                    </div>
                    <button
                      className="bg-red-500 text-white rounded-full px-4 py-2"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
                <div className="text-center mt-4">
                  <h2 className="font-bold">Total Price: ${totalAmount.toFixed(2)}</h2>
                  <button
                    className="bg-green-500 text-black rounded-full px-6 py-3"
                    onClick={handlePay}
                  >
                    Proceed to Pay
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="w-1/2 p-8">
          <h2 className="text-center font-bold">Purchase History</h2>
          <div className="border border-gray-300 rounded-lg p-4 h-96 overflow-y-auto">
            {purchasesHistory.map((item, index) => (
              <div key={index} className="flex justify-between mt-4">
                <div>
                  <span className="font-bold">Name:</span> {item.name}
                </div>
                <div>
                  <span className="font-bold">Price:</span> ${item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-12">
        <div className="md:w-1/2 px-8">
          <h1 className="text-center text-2xl md:text-3xl font-bold mb-6">
            Make your online store easier with our mobile app
          </h1>
          <h4 className="text-center mb-8">
            JustNep makes online food, grocery, parcel delivery, and pharmacy shopping fast and easy. Get groceries
            delivered and order your favorite foods from the best vendors.
          </h4>
          <img src={Appstore} alt="Appstore" className="mx-auto" style={{ marginTop: '20px', width: '150px' }} />
        </div>

        <div className="md:w-1/2 px-8">
          <img src={Mobile} alt="Mobile" className="mx-auto" style={{ height: '400px' }} />
        </div>
      </div>
    </>
  );
};

export default Home;
