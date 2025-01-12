import React from "react";
import Coupon, { ICoupon } from "../coupon/Coupon";
import "./CouponsContainer.css";

export interface ICouponContainerProps {
    coupons: ICoupon[]; // רשימת קופונים
    updateCoupons: React.Dispatch<React.SetStateAction<ICoupon[]>>; // פונקציה לעדכון הרשימה
}

function CouponsContainer(props: ICouponContainerProps) {
    return (
        <div className="couponsContainer">
            {props.coupons.map((coupon, index) => (
                <Coupon
                    key={index}
                    id={coupon.id}
                    title={coupon.title}
                    description={coupon.description}
                    price={coupon.price}
                    companyName={coupon.companyName}
                    startDate={coupon.startDate}
                    endDate={coupon.endDate}
                    amount={coupon.amount}
                    imageURL={coupon.imageURL}
                    updateCoupons={props.updateCoupons} // העברת הפונקציה לעדכון

                />
            ))}
        </div>
    );
}

export default CouponsContainer;
