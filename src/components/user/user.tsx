import { useState } from "react";

export interface IUser {
    id: number;
    username: string;
    userType: string;
    companyId?: number;
}

function User(props: IUser){
    // async function deleteUser(userId:number) {
    //     try{

    //     }
    // }

    return(
        <div className="user">
            {props.username}
        </div>
    )
}
