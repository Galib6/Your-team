import React from "react";
import { BiMale } from "react-icons/bi";
import { BiFemale } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import Link from "next/link";

const Sidebar1 = () => {
  const employeeList = useSelector((state) => state.allEmployee.teamMembers);

  const male = employeeList.filter((element) => element.gender === "Male");
  const Female = employeeList.filter((element) => element.gender === "Female");

  const finance = employeeList.filter(
    (element) => element.domain === "Finance"
  );
  const iT = employeeList.filter((element) => element.domain === "IT");
  const management = employeeList.filter(
    (element) => element.domain === "Management"
  );
  const uiDesign = employeeList.filter(
    (element) => element.domain === "UI Designing"
  );
  const sales = employeeList.filter((element) => element.domain === "Sales");
  const businessDevelopment = employeeList.filter(
    (element) => element.domain === "Business Development"
  );

  return (
    <div className={`flex h-screen flex-col bg-gray-100 w-[250px]`}>
      <div className="flex items-center justify-center mt-4">
        <img
          className="w-12 h-12 rounded-full"
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          alt="Profile Avatar"
        />
        <h2 className="ml-2 text-xl font-semibold text-gray-800">User Name</h2>
      </div>
      <hr className="h-px mt-5 bg-gray-200 border-0 dark:bg-gray-300" />
      {/* You Selected: {employeeList.length} */}

      <h1 className="font bold my-8 font-bold text-[25px] text-center">
        Team Summery
      </h1>
      <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-300" />

      <h1 className="font bold my-2 font-bold text-[15px] text-center ">
        Gender
      </h1>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-200" />
      <div className="flex justify-center mt-4">
        <div className="indicator mx-2">
          {male.length !== 0 ? (
            <span className="indicator-item badge badge-error text-white">
              {male.length}
            </span>
          ) : (
            <></>
          )}
          <BiMale style={{ height: "30px", width: "30px" }} />
        </div>

        <div className="indicator mx-2">
          {Female.length !== 0 && (
            <span className="indicator-item badge badge-error text-white">
              {Female.length}
            </span>
          )}
          <BiFemale style={{ height: "30px", width: "30px" }} />
        </div>
      </div>

      <hr className="h-px mt-8 bg-gray-200 border-0 dark:bg-gray-300" />
      <h1 className=" mt-2 mb-2 font-bold text-[18px] text-center ">
        Expertise
      </h1>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-200" />

      <div className="flex flex-wrap gap-3 mt-2 justify-center items-center p-4 ">
        <div className="indicator">
          {finance.length !== 0 && (
            <span className="indicator-item badge badge-error text-white">
              {finance.length}
            </span>
          )}
          <button className="grid  bg-blue-500 place-items-center text-white p-1 rounded-lg text-[13px]">
            Finance
          </button>
        </div>
        <div className="indicator">
          {iT.length !== 0 && (
            <span className="indicator-item badge badge-error text-white">
              {iT.length}
            </span>
          )}
          <button className="grid  bg-blue-500 place-items-center text-white p-1 rounded-lg text-[13px]">
            IT
          </button>
        </div>

        <div className="indicator">
          {management.length !== 0 && (
            <span className="indicator-item badge badge-error text-white">
              {management.length}
            </span>
          )}
          <button className="grid  bg-blue-500 place-items-center text-white p-1 rounded-lg text-[13px]">
            Management
          </button>
        </div>
        <div className="indicator">
          {uiDesign.length !== 0 && (
            <span className="indicator-item badge badge-error text-white">
              {uiDesign.length}
            </span>
          )}
          <button className="grid  bg-blue-500 place-items-center text-white p-1 rounded-lg text-[13px]">
            UI Desining
          </button>
        </div>
        <div className="indicator">
          {sales.length !== 0 && (
            <span className="indicator-item badge badge-error text-white">
              {sales.length}
            </span>
          )}
          <button className="grid  bg-blue-500 place-items-center text-white p-1 rounded-lg text-[13px]">
            Sales
          </button>
        </div>
        <div className="indicator">
          {businessDevelopment.length !== 0 && (
            <span className="indicator-item badge badge-error text-white">
              {businessDevelopment.length}
            </span>
          )}
          <button className="grid  bg-blue-500 place-items-center text-white p-1 rounded-lg text-[13px]">
            Business Development
          </button>
        </div>
      </div>
      <hr className="h-px bg-gray-400 border-0 dark:bg-gray-400" />
      {/* <hr className="h-px bg-gray-400 border-0 dark:bg-gray-400 my-1" /> */}
      <Link href="/team" className="flex justify-center items-center">
        <button className="bg-blue-500 p-2 text-white my-5 mx-3 rounded-lg flex justify-center items-center">
          Review Your Team <AiOutlineArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default Sidebar1;
