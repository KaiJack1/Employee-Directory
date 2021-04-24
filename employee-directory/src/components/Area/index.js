import React, {useState, useEffect} from "react";
import Table from "../Table";
import Nav from "../Nav";
import API from "../../utils/API";
import "./Area.css";
import DataAreaContext from "../../utils/DataAreaContext"
//Function to set the order of employees.
const Area = () => {
      const [developerState, setDeveloperState] = useState({
        users: [],
        order: "ascend",
        filteredUsers: [],
        //Styling for the header
        headings: [
          { name: "Image", width: "10%", },
          { name: "Name", width: "10%", },
          { name: "Phone", width: "20%", },
          { name: "Email", width: "20%", },
          { name: "DOB", width: "10%", }
        ]
      });
    //Setting type of order the employees are in.
      const handleSort = heading => {
        if (developerState.order === "descend") {
            setDeveloperState({
                order:"ascend"
            })
        } else{
            setDeveloperState({
                order:"descend"
            })
        }
    
        const compareFnc = (a, b) => {
          if (developerState.order === "ascend") {
            if (a[heading] === undefined) {
              return 1;
            } else if (b[heading] === undefined) {
              return -1;
            } else if (heading === "name") {
              return a[heading].first.localeCompare(b[heading].first);
            } else {
              return b[heading] - a[heading];
            } 
          } else {
        if (a[heading] === undefined){
            return 1;
        } else if (b[heading] === undefined){
            return -1;
        } else if (heading ==="name"){
            return b[heading].first.localeCompare(a[heading].first);
        } else {
return b[heading]-  a[heading];
        }
    }
    }
        const sortedUsers = developerState.filteredUsers.sort(compareFnc);

        setDeveloperState({
          ...developerState,
          filteredUsers: sortedUsers
});

 };
   //Functioning our search for another employee.
      const handleSearchChange = event => {
        const filter = event.target.value;
        const filteredList = developerState.users.filter(item => {
          let values = item.name.first.toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
    
        setDeveloperState({ 
        ...developerState, 
        filteredUsers: filteredList });
      };
      //Function after rendering all users.
      useEffect(() => {
        API.getUsers().then(results => {
          setDeveloperState({
            ...developerState,
            users: results.data.results,
            filteredUsers: results.data.results
          });
        });
      }, [developerState]);
    
      return (
          //Passing data
        <DataAreaContext.Provider
          value={{ developerState, handleSearchChange, handleSort }}
        >
          <Nav />
          <div className="data-area">
            {developerState.filteredUsers.length > 0 
    ? <Table />
     : <div></div>
     }
          </div>
        </DataAreaContext.Provider>
      );
    }
    
    export default Area;