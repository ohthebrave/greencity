import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-fuchsia-800 dark:bg-gray-900">
        <h2 className='text-center  dark:text-gray-400 p-3 text-xl font-semibold'>Let's Work Together</h2>
        <div className="text-center mx-auto max-w-screen-xl">
            <div className="grid md:grid-cols-2">
                <div>
                    <ul className="text-gray-200 dark:text-gray-200 font-medium">
                    <li className="mb-2">
                        <p className="hover:underline font-bold">Contact Us</p>
                    </li>
                    <ul className="mb-4">
                        <li>+254 705 271 570</li>
                        <p className='m-2 hover:underline font-bold'>Email</p>
                        <li>groupspectrum2017@gmail.com</li>
                    </ul>
                    </ul>
                </div>
                <div>
                    <ul className="text-gray-200 dark:text-gray-200 font-medium">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Licensing</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-around">
        <div>
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2024 <a href="#">Spectrum Urban Solutions Limited™.</a> All Rights Reserved.</span>
        </div>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <ImFacebook2 />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <BsTwitterX />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <FaYoutubeSquare />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
