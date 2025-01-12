import axios from "axios";
import { useState, useEffect } from "react";
import { IUser } from "./user";
import UsersTable from "./usersTable";

function usersTableContainer() {
const [usersFromDb, setUsersFromDb] = useState<IUser[]>([]);

useEffect(() => {
    const getCoupons = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/users`);
            setUsersFromDb(response.data);
        } catch (e) {
            alert("Error fetching users");
        }
    };

    getCoupons();
});

return(
    <div>
        <UsersTable users={usersFromDb} />
    </div>
)

}

export default usersTableContainer;