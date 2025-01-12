import { useEffect, useState } from "react";
import { IUser } from "./user";
import axios from "axios";

export interface IUserTableProps {
    users: IUser[];
}

function UsersTable({ users }: IUserTableProps) {

    return (
        <div className="userTableContainer">
            <table className="userTable">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>UserType</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.userType}</td>
                            <td>{user.companyId || "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UsersTable;