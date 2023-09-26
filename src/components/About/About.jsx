import React from 'react';

export default function OnlineStorePage() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  // Update with your store image URL
              alt="Online Store Image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Welcome to Our Online Store
            </h2>
            <p className="mt-6 text-gray-600">
              Explore a wide range of products from top brands and find the best deals. Shop with confidence and convenience.
            </p>
            <p className="mt-4 text-gray-600">
              Discover the best quality food ,home decor, and more. We strive to provide an exceptional online shopping experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
