import React, { useEffect, useState } from "react";
import './Coupon.css';
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export interface ICoupon {
    id: number;
    title: string;
    description: string;
    price: number;
    companyName: string;
    startDate: Date | string;
    endDate: Date | string;
    amount: number;
    imageURL?: string;
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
            {props.imageURL && <img src={props.imageURL} alt={props.title} className="coupon-image" />}
            <div className="coupon-details">
                <h3 className="coupon-title">{props.title}</h3>
                <p className="coupon-description">{props.description}</p>
                <p className="coupon-company">By {props.companyName}</p>
                <p className="coupon-price">Price: ${props.price}</p>
                <p className="coupon-dates">
                    Valid: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
                </p>
                <p className="coupon-amount">Stock: {props.amount}</p>
                <div className="coupon-actions">
                    <button onClick={() => buyCoupon(props.id)}>Buy now</button>
                    //יש להוסיף מחיקה על ידי חברה רק כאשר זה אותה חברה 
                    {userType ==="Admin"  ||(userType === "Company" )&& (
                        <button
                            className="delete-button"
                            onClick={() => deleteCoupon!(props.id)}
                        >
                            ❌ Delete
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Coupon;
