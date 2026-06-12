// import React, { useCallback, useEffect ,useState } from "react";

// components

import CardTable from "components/Cards/CardTable.js";
// import {getAllUsers , deleteUser } from "../../services/ApiUser";

export default function Tables() {
  // const [users, setusers] = useState([]);

  // const getUsers = useCallback(async() =>{
  //   await getAllUsers()
  //   .then( (res) => {
  //     console.log(res.data.userList);
  //     // setusers(res.data.userList);
  //   }
  //   )
  //   .catch((err) => console.log(err));
  // });
  
  // useEffect(() => {
  //   getUsers();
  // }, []);
  // const handeleDelete =async (id) => {
  //  try{ 
  //     await deleteUser(id);
  //     getUsers();
  //  }catch (error){
  //    console.log(error);
  //}
  //}
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  );
}
