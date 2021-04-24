//Adding axios
import axios from "axios";
//Were getting a list of users matching criteria.
// eslint-disable-next-line import/no-anonymous-default-export
export default{ 
    getUsers:function(){    

        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
}