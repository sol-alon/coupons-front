import React, { useEffect, useState } from "react";
import './Coupon.css';
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export interface ICoupon{
    id: number;
    title: string;
    description: string;
    price: number;
    companyId ?: number;
    categoryId ?: number;
    startDate: Date;
    endDate: Date;
    amount: number;
    imageUrl ?: string;
    updateCoupons: React.Dispatch<React.SetStateAction<ICoupon[]>>; // פונקציה לעדכון הרשימה
}


function Coupon(props: ICoupon) {
    const startDate = new Date(props.startDate);
    const endDate = new Date(props.endDate);
    const [userType, setUserType] = useState<any>(null);
    const [companyId, setCompanyId] = useState<any>(null);

    
    useEffect(() => {
        // טעינת ערכי היוזר 
       const userType = localStorage.getItem('userType');
        if (userType) {
            setUserType(userType);
        }
        const companyId = localStorage.getItem('companyId');
        if(companyId){
            setCompanyId(companyId);
        }
    }, []);

    async function deleteCoupon(couponId:number) {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("No token found");
            }

            await axios.delete(`http://localhost:8080/coupons/Admin/${couponId}`, {
                headers: {
                    Authorization: token,
                },
            });

            // עדכון הרשימה לאחר מחיקה
            props.updateCoupons((prevCoupons) =>
                prevCoupons.filter((coupon) => coupon.id !== props.id)
            );
        } catch (error) {
            console.error("Error deleting coupon:", error);
            alert("Error deleting coupon");
        }
    }

    function buyCoupon(id: number) {
        alert(`This coupon id ${id}`);
    }


    return (
        <div className="coupon">
            {props.imageUrl && <img src={props.imageUrl} alt={props.title} className="coupon-image" />}
            <div className="coupon-details">
                <h3 className="coupon-title">{props.title}</h3>
                <p className="coupon-description">{props.description}</p>
                <p className="coupon-price"><b>Price:</b> ${props.price}</p>
                <p className="coupon-dates"><b>Until:</b>{endDate.toLocaleDateString()}
                </p>
                <p className="coupon-amount"><b>Only {props.amount} Left! </b></p>
                <div className="coupon-button">
                    <input
                    type="button"
                    className="coupon-button"
                    onClick={() => buyCoupon(props.id)}
                    value={"Buy Now"}
                    ></input>
                </div>
            </div>
        </div>
    );
}

export default Coupon;