import React from "react";
import "./CouponsContainer.css";
import Coupon, { ICoupon } from "../coupon/Coupon";

export interface CouponsContainerProps {
    coupons: ICoupon[]; // List of coupons
    updateCoupons: React.Dispatch<React.SetStateAction<ICoupon[]>>; // פונקציה לעדכון הרשימה
}

const CouponsContainer: React.FC<CouponsContainerProps> = ({ coupons }) => {
    if (!coupons || coupons.length === 0) {
        return <div className="couponsContainer">No coupons available</div>;
    }

    return (
        <div className="couponsContainer">
        {coupons.map((coupon, index) => (
            <Coupon
                key={index}
                id={coupon.id}
                title={coupon.title}
                description={coupon.description}
                price={coupon.price}
                startDate={coupon.startDate}
                endDate={coupon.endDate}
                amount={coupon.amount}
                imageUrl={coupon.imageUrl}
                updateCoupons={coupon.updateCoupons} // העברת הפונקציה לעדכון
            />
        ))}
    </div>
    );



    function handleDelete(couponId: number) {
        // Logic to delete the coupon by id
        const updatedCoupons = coupons.filter((coupon) => coupon.id !== couponId);
        //updateCoupons(updatedCoupons);
    }
};

export default CouponsContainer;
