import "./App.css";

import Button from "./components/atoms/button/button";
import NavBar from "./components/molecules/nav_bar/nav_bar";
import CowImage from "./assets/images/cow-1.jpeg";
import FarmImage from "./assets/images/farm-1.jpeg";
import MainImage from "./assets/images/home-image.png";
import GoatImage from "./assets/images/goat-1.jpeg";
import BullImage from "./assets/images/bull-1.jpeg";
import LambImage from "./assets/images/lambs-1.jpeg";
import SheepImage from "./assets/images/sheep-1.jpeg";
import HorseImage from "./assets/images/horse-1.jpeg";
import HorseImage2 from "./assets/images/horse-2.jpeg";
import QualityImage from "./assets/images/quality.png";
import InsuredImage from "./assets/images/insured.png";
import DeliveryImage from "./assets/images/delivery.png";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Hero */}
      <div className="p-10 flex justify-center items-center">
        <div className="w-3/6 pl-52 pt-52 flex flex-col">
          <h1 className="font-bold text-3xl text-left justify-center">
            Lorem Ipsum
          </h1>
          <p className="py-10 text-left">
            Sit ullamco nulla sit cillum incididunt amet dolor voluptate anim
            nostrud occaecat cupidatat tempor.
          </p>
          <Button text="shop now" background="bg-gray-400" />
        </div>
        <div className="w-3/6 pr-52 pt-52">
          <img className="" src={MainImage} alt="" />
        </div>
      </div>
      {/* Why */}

      <div className="p-10 h-screen flex justify-center">
        <div className="w-1/3 px-10 flex flex-col justify-center items-center">
          <img
            className=""
            src={QualityImage}
            alt="you red calf with a white mark on the forhead"
          />

          <h1 className="mt-20 font-bold text-3xl text-center">
            quality animals
          </h1>
          <p className="py-10 text-center">
            From stud to commercial animals we sell only the best quality
            animals tested by a qualified vet.
          </p>
        </div>
        <div className="w-1/3 px-10 flex flex-col justify-center items-center">
          <img
            className=""
            src={InsuredImage}
            alt="sheep getting loaded in a trailer"
          />
          <h1 className="mt-20 font-bold text-3xl text-center">we deliver</h1>
          <p className="py-10 text-center">
            We deliver to your door step or farm gate everywhere within South
            Africa free of charge.
          </p>
        </div>
        <div className="w-1/3 px-10 flex flex-col justify-center items-center">
          <img className="" src={DeliveryImage} alt="dog with an ambrela" />
          <h1 className="mt-20 font-bold text-3xl text-center">insured</h1>
          <p className="py-10 text-center">
            Your animals are safe with us and should anything happen they are
            cover.
          </p>
        </div>
      </div>

      {/* Animals */}

      <div className="p-10 h-screen flex flex-col">
        <h2 className="mb-10 text-center text-3xl">animals</h2>
        <div className="flex justify-between">
          <div className="w-1/4 flex flex-col items-center">
            <img className="h-1/2 rounded-md" src={CowImage} alt="" />
            <h3 className="py-10 font-bold text-center text-2xl">cows</h3>
            <Button text="shop now" border={true} />
          </div>
          <div className="w-1/4 flex flex-col items-center">
            <img className="h-1/2 rounded-md" src={GoatImage} alt="" />
            <h3 className="py-10 font-bold text-center text-2xl">goats</h3>
            <Button text="shop now" border={true} />
          </div>
          <div className="w-1/4 flex flex-col items-center">
            <img className="h-1/2 rounded-md" src={SheepImage} alt="" />
            <h3 className="py-10 font-bold text-center text-2xl">sheep</h3>
            <Button text="shop now" border={true} />
          </div>
          <div className="w-1/4 flex flex-col items-center">
            <img className="h-1/2 rounded-md" src={HorseImage} alt="" />
            <h3 className="py-10 font-bold text-center text-2xl">horses</h3>
            <Button text="shop now" border={true} />
          </div>
        </div>
      </div>

      {/* Deals */}
      <div className="p-10 h-screen flex flex-col">
        <h2 className="mb-10 text-center text-3xl">today's best deals</h2>
        <div className="flex justify-between">
          <div className="px-16 w-1/3 flex flex-col items-start justify-center overflow-hidden">
            <img
              className="h-1/2 w-full rounded-md object-cover transition ease-in-out delay-250 duration-300 hover:scale-110"
              src={BullImage}
              alt="white cow bull"
            />
            <div className="pt-10 pb-4 w-full flex justify-between items-center">
              <h3 className="font-bold text-center text-2xl">Nguni Bull</h3>
              <h3 className="font-bold text-center ">R30, 000.000</h3>
            </div>
            <p className="self-start text-gray-400 f">
              4 year old Nguni stud bull
            </p>
            <span class="my-5 material-symbols-rounded self-start">star</span>
            <Button text="add to cart" border={true} />
          </div>
          <div className="px-16 w-1/3 flex flex-col items-start justify-center">
            <img
              className="h-1/2 w-full rounded-md object-cover transition ease-in-out delay-250 duration-300 hover:scale-110"
              src={LambImage}
              alt="sheep lamb with other lambs on the background"
            />
            <div className="pt-10 pb-4 w-full flex justify-between items-center">
              <h3 className="font-bold text-center text-2xl">
                Merino Ewe Lamb
              </h3>
              <h3 className="font-bold text-center ">R30, 000.000</h3>
            </div>
            <p className="self-start text-gray-400 f">
              Merino ewe lamb weighing 20kg (avg)
            </p>
            <span class="my-5 material-symbols-rounded self-start">star</span>
            <Button text="add to cart" border={true} />
          </div>
          <div className="px-16 w-1/3 flex flex-col items-start justify-center">
            <img
              className="h-1/2 w-full rounded-md object-cover transition ease-in-out delay-250 duration-300 hover:scale-110"
              src={HorseImage2}
              alt="red stallion horse with white marks on the face and feet"
            />
            <div className="pt-10 pb-4 w-full flex justify-between items-center">
              <h3 className="font-bold text-center text-2xl">Stallion</h3>
              <h3 className="font-bold text-center ">R30, 000.000</h3>
            </div>
            <p className="self-start text-gray-400 f">4 year old stallion</p>
            <span class="my-5 material-symbols-rounded self-start">star</span>
            <Button text="add to cart" border={true} />
          </div>
        </div>
      </div>

      {/* Farm of the month */}

      <div className="m-28 h-screen flex flex-col ">
        <h2 className="mb-10 text-center text-3xl">farm of the month</h2>

        <div className="flex flex-col items-start h-4/5 border border-solid border-black rounded-md">
          <img
            className="w-full h-1/2 rounded-t-md object-cover"
            src={FarmImage}
            alt=""
          />
          <div className="p-9 flex flex-col items-start">
            <h3 className="mb-10 text-left text-2xl">Lorem ipsum</h3>
            <p className="mb-5 text-left">
              Veniam sint eiusmod nulla nulla laboris esse eu occaecat occaecat
              nulla excepteur. Anim ullamco irure nisi aute amet excepteur
              tempor aliquip. Culpa ea amet deserunt sint voluptate magna sit
              nostrud labore laboris occaecat voluptate. Aliqua sunt
              exercitation eiusmod exercitation aliqua fugiat. Laboris aliqua
              occaecat reprehenderit cillum consequat non. Id dolore quis
              nostrud commodo. Pariatur esse sit laboris velit tempor veniam
              laboris pariatur quis. Eu enim labore do quis dolor eu mollit et
              in adipisicing non reprehenderit elit sint. Pariatur qui eu
              adipisicing mollit eiusmod sint excepteur laboris nostrud. Esse
              exercitation sint eu esse pariatur. Aliqua et fugiat laboris
              pariatur ut deserunt occaecat id pariatur fugiat ipsum deserunt.
              Ad do commodo labore id aute. Consectetur reprehenderit commodo
              velit minim nostrud cillum veniam proident. Occaecat adipisicing
              commodo culpa Lorem magna exercitat.
            </p>
            <Button text="learn more" border={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
