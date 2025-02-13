import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 ">
      <div className="container mx-auto px-6 py-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">MadTechies</h2>
          <p className="text-gray-400">
            Delivering innovative software solutions tailored to your business needs.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#services" className="hover:text-blue-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-blue-400 transition">
                About Us
              </Link>
            </li>
            <li>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <HiOutlineMail className="text-blue-400 mr-3" size={20} />
              madtechies.help@gmail.com
            </li>
            <li className="flex items-center">
              <HiOutlinePhone className="text-blue-400 mr-3" size={20} />
              +91 8894393439
            </li>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-blue-400 hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </Link>
            <Link
              href="#"
              className="text-blue-400 hover:text-white transition"
              aria-label="Twitter"
            >
              <FaXTwitter size={24} />
            </Link>
            <Link
              href="#"
              className="text-blue-400 hover:text-white transition"
              aria-label="Twitter"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="#"
              className="text-blue-400 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className=" mt-4 text-center bg-black text-gray-500">
      <span>  © {new Date().getFullYear()} MadTechies. All Rights Reserved.</span>
      </div>
    </footer>
  );
}