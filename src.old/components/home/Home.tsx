import React, { useEffect, useState } from "react";
import { ICoupon } from "../coupon/Coupon";
import CouponsContainer from "../couponsContainer/CouponsContainer";
import axios from "axios";
import "./Home.css";
import { jwtDecode } from "jwt-decode";

function Home() {
    const [couponsFromDb, setCouponsFromDb] = useState<ICoupon[]>([]);
    const [page, setPage] = useState(0); // משתנה לעמוד הנוכחי
    const [totalPages, setTotalPages] = useState(1); // משתנה לסך כל העמודים
    const size = 4; // מספר הקופונים בכל עמוד

    const [decodedToken, setDecodedToken] = useState<any>(null); // שמירת נתונים מהטוקן


    useEffect(() => {
        const fetchCoupons = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/coupons?page=${page}&size=${size}`);
                setCouponsFromDb(response.data.content); // עדכון הקופונים
                setTotalPages(response.data.totalPages); // עדכון מספר העמודים
            } catch (e) {
                alert("Error fetching coupons:");
            }
        };

        fetchCoupons();
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
        <div className="Home">
            <CouponsContainer
            coupons={couponsFromDb}
            updateCoupons={setCouponsFromDb}            /> 

            <div className="pagination-buttons">
                <button
                    onClick={handlePrevPage}
                    className="pagination-button"
                    disabled={page === 0} // השבתה אם זה העמוד הראשון
                >
                    דף קודם
                </button>
                <button
                    onClick={handleNextPage}
                    className="pagination-button"
                    disabled={page >= totalPages - 1} // השבתה אם זה העמוד האחרון
                >
                    דף הבא
                </button>
            </div>
        </div>
    );
}

export default Home;
