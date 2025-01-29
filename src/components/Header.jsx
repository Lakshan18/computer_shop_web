import { useState } from 'react';
import './css/header.css';

const Header = () => {

  const [activeItem, setActiveItem] = useState("HOME");

  return (
    <div className='w-[100%] h-auto py-5 background-col'>
      <div className='flex items-center justify-between px-[2%]'>
        <div className='max-w-auto'>
          <span className='text-lg text-white'>Shop Name</span>
        </div>
        <div className='max-w-auto flex items-center gap-12'>
          {["HOME", "PRODUCTS", "SERVICES", "MEMBERS", "CONTACT"].map((item) => (

            <a
            key={item}
              href={`#${item.toLowerCase()}`}
              className={`header-item ${activeItem === item ? 'active':""}`}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </a>

          ))}
          {/* <a href="#" className='header-item'>PRODUCTS</a>
          <a href="#" className='header-item'>SERVICES</a>
          <a href="#" className='header-item'>MEMBERS</a>
          <a href="#" className='header-item'>CONTACT</a> */}
          <a href="#" className='header-item-btn'>SIGN IN</a>
        </div>
      </div>
    </div>
  )
}

export default Header;
