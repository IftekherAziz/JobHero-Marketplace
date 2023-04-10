import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import Categories from "./Categories/Categories";
import { useState, useEffect } from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/IftekherAziz/Module-57/main/public/categories.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data.job_categories));
  }, []);

  return (
    <>
      <HomeBanner></HomeBanner>
      <div className="mx-auto max-w-7xl px-6 mb-20">
        <div>
          <h1 className="text-center text-4xl font-bold pt-20 pb-5">
            Job Category List
          </h1>
          <p className="text-center mb-10">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.map((data) => (
            <Categories key={data.id} data={data}></Categories>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mb-20">
        <div>
          <h1 className="text-center text-4xl font-bold pb-5">Featured Jobs</h1>
          <p className="text-center mb-10">
            Find your dream job with all the resources you need. Your future
            awaits!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-8">
            <img
              className="p-2 border rounded"
              src="https://raw.githubusercontent.com/IftekherAziz/Module-57/main/src/assets/images/airbnb.png"
              alt=""
            />
            <h1 className="text-md font-semibold pt-5">
              Technical Database Engineer
            </h1>
            <p className="text-sm pt-3">Air BNB</p>
            <div className="flex">
              <div className="flex py-5 mr-5">
                <BeakerIcon className="h-5 w-5" />
                <p className="ml-2 text-sm">Dhaka, Bangladesh</p>
              </div>
              <div className="flex py-5">
                <BeakerIcon className="h-5 w-5" />
                <p className="ml-2 text-sm">Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="flex">
              <button className="border text-xs py-2 px-5 text_color font-medium border-blue-400 rounded">
                Full Time
              </button>
              <button className="border ml-3 text-xs py-2 px-5 text_color font-medium border-blue-400 rounded">
                Remote
              </button>
            </div>
            <button className="border my-5 view_details  text-white font-medium border-blue-400 rounded">
              View Details
            </button>
          </div>
          <div className="border p-8">
            <img
              className="p-2 border rounded"
              src="https://raw.githubusercontent.com/IftekherAziz/Module-57/main/src/assets/images/airbnb.png"
              alt=""
            />
            <h1 className="text-md font-semibold pt-5">
              Technical Database Engineer
            </h1>
            <p className="text-sm pt-3">Air BNB</p>
            <div className="flex">
              <div className="flex py-5 mr-5">
                <BeakerIcon className="h-5 w-5" />
                <p className="ml-2 text-sm">Dhaka, Bangladesh</p>
              </div>
              <div className="flex py-5">
                <BeakerIcon className="h-5 w-5" />
                <p className="ml-2 text-sm">Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="flex">
              <button className="border text-xs py-2 px-5 text_color font-medium border-blue-400 rounded">
                Full Time
              </button>
              <button className="border ml-3 text-xs py-2 px-5 text_color font-medium border-blue-400 rounded">
                Remote
              </button>
            </div>
            <button className="border my-5 view_details  text-white font-medium border-blue-400 rounded">
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
