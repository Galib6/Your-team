import React from "react";
import Wrapper from "./Wrapper";
import CartItem from "./TeamMember";
import { useDispatch, useSelector } from "react-redux";
import { deleteTeamMember } from "@/redux/employeeSlice";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

const Team = () => {
  const dispatch = useDispatch();
  const teamMember = useSelector((state) => state.allEmployee.teamMembers);
  const handleDelete = (item) => {
    dispatch(deleteTeamMember(item));
  };
  return (
    <div className="min-h-screen mb-10">
      <Wrapper>
        <div className="grid grid-cols-3">
          <div className="mb-8 mt-8 ml-8">
            <Link href="/">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
                <AiOutlineArrowLeft className="mr-2" />
                Back
              </button>
            </Link>
          </div>
          <h1 className="mb-8 mt-8 text-center text-[15px] lg:text-[28px] border-b-2 pb-5">
            You Selected Team Members
          </h1>
        </div>
        {teamMember?.length > 0 ? (
          <div>
            {teamMember.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
              ></CartItem>
            ))}
          </div>
        ) : (
          <h1 className="text-center mt-16 font-bold text-[25px] animate-pulse">
            Your team is empty now.
          </h1>
        )}
      </Wrapper>
    </div>
  );
};

export default Team;
