import React, { useEffect, useState } from "react";
import { ICoupon } from "../coupon/Coupon";
import CouponsContainer from "../couponsContainer/CouponsContainer";
import axios from "axios";
import "./Main.css";
import { jwtDecode } from "jwt-decode";

function Main() {
    const [couponsFromDb, setCouponsFromDb] = useState<ICoupon[]>([]);
    const [page, setPage] = useState(0); // current page
    const [totalPages, setTotalPages] = useState(1); // total pages
    const size = 4;

    const [decodedToken, setDecodedToken] = useState<any>(null); 

    useEffect(() => {
        const getCoupons = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/coupons`);
                setCouponsFromDb(response.data); // עדכון הקופונים
                setTotalPages(response.data.totalPages); // עדכון מספר העמודים
            } catch (e) {
                alert("Error fetching coupons:");
            }
        };

        getCoupons();
    }, [page]);
    
    const handleNextPage = () => {
        if (page < totalPages - 1) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 0) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <div className="main">
            <div className="couponsContainer">
            <CouponsContainer
            coupons={couponsFromDb}
            updateCoupons={setCouponsFromDb}/>
            </div>
        </div>
    );
}

export default Main;
