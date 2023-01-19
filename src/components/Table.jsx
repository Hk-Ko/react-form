import Cookies from "js-cookie";
import React from "react";
import { useDeleteContactMutation, useGetContactsQuery } from "../features/api/contactApi";
import {MdDelete} from 'react-icons/md';

const Table = () => {
  const token = Cookies.get("token");
  const { data } = useGetContactsQuery({ token });
  const [deleteContact] = useDeleteContactMutation();
  console.log(data);
  return (
    <div className="relative overflow-x-auto mt-5">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
             <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.contacts?.data?.map((contact) => (
            <tr
              key={contact?.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {contact?.name}
              </th>
              <td className="px-6 py-4">example@gmail.com</td>
              <td className="px-6 py-4">{contact?.phone}</td>
              <td className="px-6 py-4">Mogok Township</td>
              <td className="px-6 py-4 text-right">
                  <MdDelete onClick={()=>deleteContact({id:contact?.id,token})} className="text-lg cursor-pointer hover:text-red-300 transform transition hover:scale-110"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
