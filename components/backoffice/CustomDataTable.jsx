"use client";
import React, { useState } from "react";
import data from "../../data.json";
export const CustomDataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const PAGE_SIZE = 10;
  const noOfpages = Math.ceil(data.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const cuurentlyDisplayedData = data.slice(startIndex, endIndex);
  const itemStartIndex = startIndex + 1;
  const itemEndIndex = Math.min(startIndex + PAGE_SIZE, data.length);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-slate-800 pt-4 dark:text-white">Recent order</h2>
      <div className="">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cuurentlyDisplayedData.map((item, index) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={index}
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.id}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.first_name}
                    </th>
                    <td className="px-6 py-4">{item.last_name}</td>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">{item.gender}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tbody></tbody>
          </table>

          <nav
            aria-label="Page navigation example"
            className="flex justify-between pt-4 items-center flex-wrap md:flex-row p-3"
          >
            <span className="text-sm font-normal text-slate-400 dark:text-gray-400 mb-4 md:mb-0 block full-width md:inline-block md:w-auto">
              showing{" "}
              <span className="font-semibold text-slate-400 dark:text-white">
                {itemStartIndex}-{itemEndIndex}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-400 dark:text-white">
                {data.length}
              </span>
            </span>

            <ul className="inline-flex -space-x-px text-sm">
              <li>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: noOfpages }, (item, index) => {
                return (
                  <li key={index}>
                    <button
                      disabled={currentPage === index + 1}
                      className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 ${
                        currentPage == index + 1
                          ? "bg-blue-700 dark:bg-blue-700 border border-blue-700 text-white hover:bg-blue-500"
                          : "bg-white border border-gray-300 hover:bg-blue-700 hover:border hover:border-blue-500 hover:text-white"
                      }  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                );
              })}

              <li>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= noOfpages}
                  className="flex items-center justify-center px-3 h-8
                  leading-tight text-gray-500 bg-white border border-gray-300
                  rounded-e-lg hover:bg-gray-100 hover:text-gray-700
                  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
                  dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
