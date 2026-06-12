import React, { useCallback, useState, useEffect } from "react";
//  import PropTypes from "prop-types";

// components
// import TableDropdown from "components/Dropdowns/TableDropdown.js";
import {
    getAllUsers,
    deleteUser,
    addUser,
    updateUser,
  } from "../../services/ApiUser";
 export default function Cardajout({ color }) {
    const [users, setUsers] = useState([]);
    const [errur, setErrur] = useState(0);
    const [newUser, setNewUser] = useState({
      firstName: "",
      lastName: "",
      email: "",
    });
    const handleChange = (e) => {
      const { name, value } = e.target; // name can be password firstName lastName ..
      setNewUser({ ...newUser, [name]: value }); //update new User with last value
    };
  
    const handleAddUser = async () => {
      try {
        await addUser(newUser);
        getUsers();
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleUpdateUser = async (newUser) => {
      try {
        console.log(newUser);
        await updateUser(newUser._id, newUser);
        getUsers();
      } catch (error) {
        console.log(error);
      }
    };
  
    const getUsers = useCallback(async () => {
      await getAllUsers()
        .then((res) => {
          console.log(res.data.userList);
          setUsers(res.data.userList);
        })
        .catch((err) => console.log(err));
    }, []);
  
    useEffect(() => {
      getUsers();
    }, [getUsers]);
  
    const handleDelete = async (id) => {
      try {
        await deleteUser(id);
        getUsers();
      } catch (error) {
        console.log(error);
      }
    };

   return (
     <>
       <div
         className={
           "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
           (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
         }
       >
         <div className="rounded-t mb-0 px-4 py-3 border-0">
           <div className="flex flex-wrap items-center">
             <div className="relative w-full px-4 max-w-full flex-grow flex-1">
               <h3
                 className={
                   "font-semibold text-lg " +
                   (color === "light" ? "text-blueGray-700" : "text-white")
                 }
               >
                 Ajouter des utilisateurs
               </h3>
             </div>
           </div>
         </div>
         <div className="block w-full overflow-x-auto">
           {/* Projects table */}
           <table className="items-center w-full bg-transparent border-collapse">

             <tbody>
        
                <tr >

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <input
                      type="text"
                      name="nom"
                      placeholder="Nom"
                      className="w-full px-3 py-2 border rounded"
                    />
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <input
                      type="text"
                      name="prenom"
                      placeholder="Prénom"
                      className="w-full px-3 py-2 border rounded"
                    />
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full px-3 py-2 border rounded"
                    />
                  </td>
                  <br></br>
                  <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={ ()=> {}}>Ajouter</button>
                </tr>

               <tr>
                 <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                   {/* <img
                     src={require("assets/img/usericon.jpg").default}
                     className="h-12 w-12 bg-white rounded-full border"
                     alt="..."
                   ></img>{" "} */}
                   <span
                     className={
                       "ml-3 font-bold " +
                       +(color === "light" ? "text-blueGray-600" : "text-white")
                     }
                   >
                     {/* {user.nom} */}
                   </span>
                 </th>
                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                   {/* {user.prenom} */}
                 </td>
                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  
                   {/* {user.Email} */}
                 </td>
                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                 </td>
               </tr>
                
             </tbody>
           </table>
           
         </div>
       </div>
     </>
   );
 }

  Cardajout.defaultProps = {
     color: "light",
  };

//  Cardajout.propTypes = {
//    color: PropTypes.oneOf(["light", "dark"]),
//  };

