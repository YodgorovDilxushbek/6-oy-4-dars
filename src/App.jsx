import React, { useState } from 'react';
import Header from './components/Header';
import CircleImg from './assets/userImg.png';
import earth from './assets/earth.svg';
import facebook from './assets/facebook.svg';
import github from './assets/github.svg';
import instagram from './assets/instagram.svg';
import telegram from './assets/telegram.svg';

function App() {
  const [users, setUsers] = useState([]);
  const [url, setUrl] = useState(null);
  const [fData, setFData] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData.entries());

    if (!validate(formObj)) {
      return;
    }

    const result = { ...formObj, url };
    setUsers([...users, result]);

    setFData({});
    setUrl(null);
    e.target.reset();
  };

  const validate = (data) => {
    if (data.companyName && data.companyName.length > 12) {
      alert("Kompaniya nomi 12 belgidan oshmasligi kerak.");
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(data.email)) {
      alert("Iltimos, to'g'ri email manzilini kiriting.");
      return false;
    }

  

    if (!data.city || !data.country || !data.locetion || !data.countUser) {
      alert("Shahar, davlat, joy va hodimlar soni majburiy.");
      return false;
    }

    return true;
  };

  return (
    <div>
      <Header />
      <div className="bg-white rounded-lg shadow-md p-[30px] flex flex-col gap-5 max-w-[778px] mx-auto my-[60px]">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold mb-2 text-2xl text-[#2A2941] text-[32px]">Kompaniya ma’lumotlari</h1>
          <p className="text-[16px]">Kompaniya haqidagi ma’lumotlarni kiriting</p>
        </div>

        <form
          className="flex flex-col w-full gap-5"
          onSubmit={handleFormSubmit}
        >
          <div className="flex items-center gap-5">
            <img className="w-[84px] h-[84px] rounded-full" src={url || CircleImg} alt="user" />
            <label className="text-sky-600 font-medium text-xl cursor-pointer hover:underline">
              Yuklash
              <input
                onChange={(e) => {
                  const img = e.target.files[0];
                  if (img) {
                    const imgUrl = URL.createObjectURL(img);
                    setUrl(imgUrl);
                    setFData((prev) => ({ ...prev, url: imgUrl }));
                  }
                }}
                className="hidden"
                type="file"
                name="urlImg"
              />
            </label>
          </div>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">
                Kompaniya nomi <span className="text-red-400 text-[18px]">*</span>
              </span>
            </div>
            <input
              name="companyName"
              type="text"
              placeholder="Kompaniya nomi"
              className="input input-bordered w-full bg-white border border-[#E3E3E3] p-[10px] rounded-[16px]"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">
                Email <span className="text-red-400 text-[18px]">*</span>
              </span>
            </div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full bg-white border border-[#E3E3E3] p-[10px] rounded-[16px]"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">
                Telefon raqami <span className="text-red-400 text-[18px]">*</span>
              </span>
            </div>
            <input
              name="phone"
              type="tel"
              placeholder="UZ +9989"
              className="input input-bordered w-full bg-white border border-[#E3E3E3] p-[10px] rounded-[16px]"
            />
          </label>


          <div className="label">
              <span className="label-text text-[#2A2941]">Linklar <span className='text-red-400 text-[18px]'>*</span></span>
            </div>
            <div className="flex gap-2 items-center ">
              {[earth, instagram, telegram, facebook, github].map((icon, index) => (
                <div
                  key={index}
                  onClick={() => {
                    const modal = document.getElementById('ddd');
                    if (modal?.showModal) {
                      modal.showModal();
                    } 
                  }}
                  className="p-[19.5px] border border-[#E3E3E3] max-w-14 rounded-[12px] cursor-pointer select-none duration-300"
                >
                  <img src={icon} alt="icon" />
                </div>
              ))}
            </div>

          <div className="flex items-center gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-[#2A2941]">
                  Davlat <span className="text-red-400 text-[18px]">*</span>
                </span>
              </div>
              <input
                name="country"
                type="text"
                placeholder="Davlat"
                className="input input-bordered w-full bg-white border border-[#E3E3E3] p-[10px] rounded-[16px]"
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-[#2A2941]">
                  Shahar <span className="text-red-400 text-[18px]">*</span>
                </span>
              </div>
              <input
                name="city"
                type="text"
                placeholder="Shahar"
                className="input input-bordered w-full bg-white border border-[#E3E3E3] p-[10px] rounded-[16px]"
              />
            </label>
          </div>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">
                Yashash joyi <span className="text-red-400 text-[18px]">*</span>
              </span>
            </div>
            <input
              name="locetion"
              type="text"
              placeholder="Joy"
              className="input input-bordered w-full bg-white border border-[#E3E3E3] p-[10px] rounded-[16px]"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">
                Hodimlar soni <span className="text-red-400 text-[18px]">*</span>
              </span>
            </div>
            <input
              name="countUser"
              type="number"
              placeholder="Hodimlar soni"
              className="input input-bordered w-full bg-white border border-[#E3E3E3] p-[10px] rounded-[16px]"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">Izoh:</span>
            </div>
            <textarea
              name="description"
              placeholder="Kompaniya haqida izoh qoldiring"
              className="input input-bordered w-full bg-white border border-[#E3E3E3] p-[10px] rounded-[16px]"
            />
          </label>

          <button type="submit" className="btn mt-[30px] mx-auto bg-amber-600 p-5 w-40 rounded-xl cursor-pointer hover:bg-sky-900 ">
            Saqlash
          </button>
        </form>
      </div>

      <div className="flex flex-wrap gap-6 max-w-[1200px] mx-auto" id='wrapper'>
        {users.map((user, index) => (
          <div
            key={index}
            className="card w-80 shadow-lg rounded-lg bg-white p-6 transform transition-all duration-200 hover:scale-105 hover:shadow-xl gap-3">
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4"
                src={user.url || CircleImg}
                alt="User"
              />
              <h2 className="text-xl font-semibold text-gray-800">{user.companyName}</h2>
              <a
                href={`mailto:${user.email}`}
                className="text-blue-500 hover:underline mt-2">{user.email}</a>
              <p className="text-sm text-gray-600 mt-1">Tel: {user.phone}</p>
              <p className="text-sm text-gray-600">Davlat: {user.country || "Ma'lumot yo'q"}</p>
              <p className="text-sm text-gray-600">Shahar: {user.city || "Ma'lumot yo'q"}</p>
              <p className="text-sm text-gray-600">Yashash joyi: {user.locetion || "Ma'lumot yo'q"}</p>
              <p className="text-sm text-gray-600">Hodimlar soni: {user.countUser || "Ma'lumot yo'q"}</p>
              <p className="text-sm text-gray-600">Izoh: {user.description || "Izoh yo'q"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
