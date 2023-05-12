import Link from "next/link";
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Card from "./card";
import { useDispatch, useSelector } from "react-redux";
import { setDataProduct } from "@/redux/employeeSlice";
import Sidebar1 from "./Sidebar1";
import Pagination from "./Paginantion";
import SearchComponents from "./SearchComponents";
import Spinner from "./Spinner";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [iniFilters, setIniFilters] = useState({
    searchTerm: "",
    domain: "",
    gender: "",
    available: "",
  });
  const [filters, setFilters] = useState({
    searchTerm: "",
    domain: "",
    gender: "",
    available: false,
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setIniFilters({ ...iniFilters, [name]: value });
  };

  const handleFilter = () => {
    console.log(filters);
    setLoading(true);
    setTimeout(function timeout() {
      setFilters(iniFilters);
      setLoading(false);
    }, 2000);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const res = await fetch(`mock.json`);
      const resData = await res.json();
      dispatch(setDataProduct(resData));
    })();
  }, []);
  const employeeList = useSelector((state) => state.allEmployee.employeeList);

  const filteredUsers = employeeList
    .filter(
      (employee) =>
        `${employee.first_name} ${employee.last_name}`
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase()) ||
        employee.first_name
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase()) ||
        employee.last_name
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase())
    )
    .filter((employee) =>
      filters.domain ? employee.domain === filters.domain : true
    )
    .filter((employee) =>
      filters.gender ? employee.gender === filters.gender : true
    )
    .filter((employee) =>
      filters.available ? employee.available === filters.available : true
    );

  const [currentPage, setCurrentPage] = useState(1);
  const employeeListSliced = filteredUsers.slice(
    (currentPage - 1) * 50,
    currentPage * 50
  );
  const totalPages = filteredUsers.length / 50;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Wrapper>
        <div className="flex justify-between">
          <aside className="h-screen  sticky top-0 hidden lg:block">
            <Sidebar1></Sidebar1>
          </aside>
          <div>
            <div className="mt-8 mb-10 ml-8 flex justify-center lg:justify-end items-center">
              <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md p-2 space-y-2 sm:space-y-0 sm:space-x-2">
                <div className="flex-grow">
                  <input
                    name="searchTerm"
                    value={iniFilters.searchTerm}
                    onChange={handleChange}
                    type="text"
                    placeholder="Type name here....."
                    className="w-full border-gray-300 focus:outline-none focus:border-blue-500 rounded-l-md py-2 px-2 sm:rounded-l-none sm:py-2 sm:px-4"
                  />
                </div>
                <div className="flex flex-col lg:flex-row space-x-2">
                  <select
                    className="border-gray-300 focus:outline-none focus:border-blue-500 rounded-none py-2 px-2 sm:rounded-none"
                    name="gender"
                    value={iniFilters.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <select
                    className="border-gray-300 focus:outline-none focus:border-blue-500 rounded-none py-2 px-2 sm:rounded-none "
                    name="domain"
                    value={iniFilters.domain}
                    onChange={handleChange}
                  >
                    <option value="">Select Domain</option>
                    <option value="Finance">Finance</option>
                    <option value="IT">IT</option>
                    <option value="UI Desining">UI Designing</option>
                    <option value="Sales">Sales</option>
                    <option value="Management">Management</option>
                    <option value="Business Development">
                      Business Development
                    </option>
                  </select>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      name="available"
                      onChange={(event) =>
                        setIniFilters({
                          ...iniFilters,
                          available: event.target.checked,
                        })
                      }
                    />
                    Available
                  </label>
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none mt-2 sm:mt-0"
                    onClick={handleFilter}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            {!loading ? (
              <div>
                {employeeListSliced.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  lg:ml-8  overflow-y-auto">
                    {employeeListSliced?.map((item) => (
                      <Card
                        key={item.id}
                        item={item}
                        employeeList={employeeList}
                      ></Card>
                    ))}
                  </div>
                ) : (
                  <h1 className="text-center font-bold mt-[200px]">
                    No Result Found
                  </h1>
                )}
              </div>
            ) : (
              <div className="h-screen flex justify-center mt-[200px]">
                <Spinner></Spinner>
              </div>
            )}
            <div className="flex justify-center items-center my-10">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HomePage;
