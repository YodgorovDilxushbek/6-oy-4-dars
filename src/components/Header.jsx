import React from 'react';
// import logo from './assets/logo.png'; // Rasm yo'li to'g'rilandi

function Header() {
  return (
    <div className="bg-[#5361E4] py-4 select-none">
      <div className="flex items-center justify-between max-w-[1100px] mx-auto">
        {/* Logo */}
        {/* <img src={logo} alt="logo" className="h-10" /> */}

        {/* Navbar */}
        <ul className="flex items-center gap-12">
          <li>
            <a href="#" className="text-white text-[18px] hover:underline">
              Vakansiyalar
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-[18px] hover:underline">
              Kandidatlar
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-[18px] hover:underline">
              Kompaniyalar
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-[18px] hover:underline">
              Xizmatlar
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-[18px] hover:underline">
              Ta’lim
            </a>
          </li>
        </ul>

        {/* Language Selector and Button */}
        <div className="flex items-center gap-4">
          <select className="p-2 border border-gray-300 rounded">
            <option value="uzbek">Uzbek</option>
            <option value="rus">Russian</option>
            <option value="eng">English</option>
          </select>

          <button className="bg-white text-[#5361E4] px-4 py-2 rounded font-bold">
            Boshlash
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
