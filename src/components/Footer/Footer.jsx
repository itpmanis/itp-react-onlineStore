import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-2  bottom-0 w-full ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">QUICK LINKS</h3>
            <a href="#" className="text-black font-bold">Homepage</a><br />
            <a href="#" className="text-black font-bold">Our Team</a><br />
            <a href="#" className="text-black font-bold">Browse Restaurant</a><br />
            <a href="#" className="text-black font-bold">Contact Us</a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">OTHERS</h3>
            <a href="#" className="text-black font-bold">Privacy Policy</a><br />
            <a href="#" className="text-black font-bold">Terms of Usage</a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">CONTACT US</h3>
            <p className="flex items-center text-black font-bold">
              <span className="mr-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4.293 7.293a1 1 0 011.32-.083l1.38 1.225a6.472 6.472 0 002.472-.53l.982.392a1 1 0 11-.628 1.93l-.982-.392a6.456 6.456 0 00-.917.28v.001a1 1 0 11-.655-1.894v-.001a6.472 6.472 0 00-.973-.17l-1.132-.452a1 1 0 01-.624-1.194zm-.78 4.336l-2.003 5.01a2 2 0 001.19 2.648l5.01-2.002a1 1 0 01.614-.202l1.131.452a6.472 6.472 0 00-.175-.966l-.001-.002a1 1 0 111.895-.656v.001c.135.46.184.927.136 1.388l-.392.982a6.456 6.456 0 00.28.917h.001a1 1 0 01-1.193 1.335l-.392-.982c-.466.052-.932.003-1.392-.136h-.001a1 1 0 11.655-1.894l.392.982a6.472 6.472 0 00-.17.974l-.452 1.131a1 1 0 01-.202.615l-.001.001a2 2 0 00.502 2.701l5.01-2.003a1 1 0 01.858 0l5.01 2.003a2 2 0 001.19-2.648l-2.003-5.01a1 1 0 01.13-1.192l.452-.565a6.472 6.472 0 00-.527-2.472l1.225-1.379a1 1 0 01-.084-1.32l-.564-.707a1 1 0 01-.203-.615z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Noida, India
            </p>
            <p className="flex items-center text-black font-bold">
              <span className="mr-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm7-5a2 2 0 100 4 2 2 0 000-4zm0 8a5 5 0 100-10 5 5 0 000 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              +91 9234562206
            </p>
            <p className="flex items-center text-black font-bold">
              <span className="mr-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M3 2a1 1 0 011-1h11a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h7a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h5a1 1 0 110 2H4a1 1 0 01-1-1zm14-5a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              itp.manis@gmail.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">SERVICE HOURS</h3>
            <h2 className="font-bold">09:00 AM to 3:00 AM (NST)</h2>
          </div>
        </div>
       
      </div>
    </footer>
  );
}

export default Footer;
