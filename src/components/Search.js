import React from "react";
import { RiCustomerService2Fill, RiCustomerService2Full } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATION FOR TWO PEOPLE</h2>
          <p className="py-4">
            Come experience the very pinnacle of luxury Ghanaian all-inclusive
            vacation for couples at TRAVEL SOME resorts. Our luxury beach
            resorts set along with the most gorgeous tropical settings and
            exquisite beaches in Ghana. A visit to our resorts leaves a long
            lasting impression on you. With clear breeze, good sun amd clear
            sand, endulgence will be the least of you worries.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50}/>
            </button>
            <div>
                <h3 className="py-2">LEADING SERVICE</h3>
                <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
                <h3>LEADING SERVICE</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border text-center">
            <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
            <p className="py-4">12 HOURS LEFT</p>
            <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
