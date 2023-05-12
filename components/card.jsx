import { addToTeam, deleteTeamMember } from "@/redux/employeeSlice";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ item }) => {
  const [selected, setSeleted] = useState(false);
  const dispatch = useDispatch();
  const selection = () => {
    if (selected) {
      dispatch(deleteTeamMember(item));
      setSeleted(false);
    } else {
      if (item.available) {
        setSeleted(true);
        dispatch(addToTeam(item));
      } else {
        toast.error("User Not Available");
      }
    }
  };

  return (
    <div className=" w-full transition-all ease-in-out duration-500 hover:shadow-lg relative">
      {selected && (
        <span className="bg-green-500 rounded-tr-lg text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl z-10">
          ✅
        </span>
      )}
      <div
        className={`h-full  rounded-lg border transition-colors duration-300 ${
          !item?.available
            ? " hover:border-red-600 border-2"
            : " hover:border-green-600 border-2"
        } shadow-md flex flex-col relative overflow-hidden`}
      >
        <div className="bg-blue-500 h-[50px] w-full grid grid-cols-3 ">
          <div className="col-span-1"></div>
          <p className="text-[16px] font-bold text-white col-span-2 mt-3">
            {item.first_name} <span className="">{item.last_name}</span>
          </p>
        </div>
        <div className=" absolute top-[15px] left-[15px] bg-white rounded-full">
          <img
            src={item.avatar}
            alt="Avatar"
            className="rounded-full w-[80px] h-[80px] object-cover  border-2 border-gray-500"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-2">
          <div className="col-span-1"></div>
          <div className="col-span-2 space-y-1">
            <div>
              <p className="text-gray-600 text-[13px]">
                <span className="font-bold">Persona:</span> {item.gender}
              </p>
              <p className="text-gray-600 text-[13px]">
                <span className="font-bold">Expertise:</span> {item.domain}
              </p>
              <p className=" transition-colors duration-300 text-[13px] ">
                <span className="font-bold">Email :</span>{" "}
                <br className="mb-[-5px] line" />
                {item.email.slice(0, 20)}
              </p>
              {!selected ? (
                <button
                  type="button"
                  className="inline-block rounded-lg bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  my-3"
                  onClick={selection}
                >
                  Add to team
                </button>
              ) : (
                <button
                  type="button"
                  className="inline-block rounded-lg bg-blue-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  my-3"
                  onClick={selection}
                >
                  Selected
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
