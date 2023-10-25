import logo from "../assets/shared/logo.svg";
import keyboard from "../assets/desktop/image-keyboard.jpg";
import phone from "../assets/desktop/image-phone-and-keyboard.jpg";
import glass from "../assets/desktop/image-glass-and-keyboard.jpg";
import keyboardTab from "../assets/tablet/image-keyboard.jpg";
import phoneTab from "../assets/tablet/image-phone-and-keyboard.jpg";
import glassTab from "../assets/tablet/image-glass-and-keyboard.jpg";
import keyboardMobile from "../assets/mobile/image-keyboard.jpg";
import phoneMobile from "../assets/mobile/image-phone-and-keyboard.jpg";
import glassMobile from "../assets/mobile/image-glass-and-keyboard.jpg";
import compatible from "../assets/shared/icon-compatible.svg";
import bluetooth from "../assets/shared/icon-bluetooth.svg";
import battery from "../assets/shared/icon-battery.svg";
import light from "../assets/shared/icon-light.svg";
import "./App.css";

function App() {
  return (
    <>
      <main className="max-w-[1110px] mx-auto">
        <nav className="flex items-center justify-between p-4">
          <img src={logo} alt="" />
          <button className="bg-[#e8eff2] hover:bg-[#162542] hover:text-white uppercase px-5 py-3 rounded-lg font-bold text-[#162542]">
            pre-order now
          </button>
        </nav>

        <section className="my-20">
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 text-start items-center p-4 justify-between">
            <div>
              <h1 className="font-black text-6xl text-[#162542] uppercase w-96">
                Typemaster Keyboard
              </h1>
              <p className="text-[#7b8bad] text-lg w-96 my-3">
                Improve your productivity and gaming without breaking the bank.
                Upgrade to a high quality mechanical typing experience.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-[#f16718] uppercase px-5 py-3 rounded-lg hover:opacity-50 font-bold text-white">
                  pre-order now
                </button>
                <p className="uppercase font-bold text-[#7b8bad]">
                  release on 5/27
                </p>
              </div>
            </div>
            <div>
              <img
                src={keyboard}
                alt=""
                className="w-[540px] h-[480px] rounded-2xl hidden lg:block"
              />
              <img
                src={keyboardTab}
                alt=""
                className="rounded-2xl hidden md:block lg:hidden"
              />
              <img
                src={keyboardMobile}
                alt=""
                className="md:hidden rounded-2xl"
              />
            </div>
          </div>

          <div className="my-20 flex flex-col lg:flex-row items-center justify-between p-4">
            <div className="flex gap-20 md:gap-10 relative">
              <div>
                <img
                  src={phone}
                  alt=""
                  className="w-[255px] h-[480px] rounded-xl hidden lg:block"
                />
                <img
                  src={phoneTab}
                  alt=""
                  className="w-[214px] h-[320px] rounded-xl hidden md:block lg:hidden"
                />
                <img
                  src={phoneMobile}
                  alt=""
                  className="md:hidden w-[129px] h-[123px] rounded-xl"
                />
                <div className="absolute w-[129px] md:hidden rounded-xl inset-0 bg-[#f16718] opacity-90"></div>
                <div className="absolute w-[255px] hidden lg:block rounded-xl inset-0 bg-[#f16718] opacity-90"></div>
                <div className="absolute w-[214px] hidden md:block lg:hidden rounded-xl inset-0 bg-[#f16718] opacity-90"></div>
              </div>
              <img
                src={glass}
                alt=""
                className="w-[445px] h-[480px] rounded-xl hidden lg:block"
              />
              <img
                src={glassTab}
                alt=""
                className="w-[445px] h-[320px] rounded-xl hidden md:block lg:hidden"
              />
              <img
                src={glassMobile}
                alt=""
                className="rounded-xl md:hidden w-[220px] h-[193px]"
              />
            </div>
            <div
              className="md:text-start w-full lg:w-auto flex flex-col md:flex-row 
            justify-between lg:block my-5 lg:my-0 items-center md:items-start"
            >
              <h2 className="uppercase font-black md:w-64 my-2 md:my-0 lg:my-5 text-3xl text-[#162542]">
                mechanical wireless Keyboard
              </h2>
              <p className="text-[#7b8bad] w-80">
                The Typemaster keyboard boasts top-notch build and practical
                design. It offers a wide variety of switches and keycaps, along
                with reliable wireless connectivity.
              </p>
            </div>
          </div>

          <div
            className="my-20 flex flex-col md:flex-row md:flex-wrap md:gap-16 
          lg:gap-0 items-center justify-between p-4"
          >
            <div className="md:text-start">
              <div className="bg-[#f16718] w-fit mx-auto md:mx-0 p-3 rounded-lg">
                <img src={compatible} alt="" />
              </div>
              <h3 className="text-[#162542] font-black md:w-40 text-2xl my-3">
                HIGHLY COMPATIBLE
              </h3>
              <p className="text-[#7b8bad] w-96">
                Easy to use and works well with all major computer brands,
                gaming consoles and mobile devices. Plug & play, no installation
                or driver needed.
              </p>
            </div>

            <div className="md:text-start my-5 md:my-0">
              <div className="bg-[#f16718] w-fit mx-auto md:mx-0  p-3 rounded-lg">
                <img src={bluetooth} alt="" />
              </div>
              <h3 className="text-[#162542] font-black w-72 text-2xl my-3">
                WIRELESS WITH BLUETOOTH
              </h3>
              <p className="text-[#7b8bad] w-72">
                Powerful 2.4G RF technology allows you to connect the cordless
                keyboard from up to 30ft away. Simply plug the unifying receiver
                into your computer.
              </p>
            </div>

            <div className="md:text-start my-5 md:my-0">
              <div className="bg-[#f16718] w-fit mx-auto md:mx-0 p-3 rounded-lg">
                <img src={battery} alt="" />
              </div>
              <h3 className="text-[#162542] font-black md:w-64 text-2xl my-3">
                HIGH CAPACITY BATTERY
              </h3>
              <p className="text-[#7b8bad] w-72">
                Equipped with a long-lasting built-in battery, you’ll never have
                to spend a dime on replaceable ones. Enjoy 40 hours of usage
                time between charges.
              </p>
            </div>

            <div className="md:text-start">
              <div className="bg-[#f16718] w-fit mx-auto md:mx-0 p-3 rounded-lg">
                <img src={light} alt="" />
              </div>
              <h3 className="text-[#162542] font-black md:w-64 text-2xl my-3">
                RGB BACKLIT MODES
              </h3>
              <p className="text-[#7b8bad] w-72">
                Choose from 4 backlight brightness levels and adjustable
                breathing speed. Each key glows intensely in the dark and helps
                you type in low light conditions.
              </p>
            </div>
          </div>
          <p className="text-[#7b8bad]">
            Typemaster 2021 | All Rights Reserved
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
