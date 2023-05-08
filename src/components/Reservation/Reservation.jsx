import React, { useState } from "react";
import "./Reservation.css";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
    const initialValue = {
        name: "",
        lastName: "",
        phone: "",
        date: "",
    };
    const [data, setData] = useState(initialValue);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    const navigate = useNavigate();
    
    const handleInputChange = (event) => {
        if (
            data.name.length + 1 < 3 ||
            data.lastName.length + 1 < 3 ||
            data.phone.length + 1 < 10 ||
            data.date.length === 0
        ) {
            setMessage("Name, Last Name, and date are required");
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const userInfo = {
            name: data.name,
            lastName: data.lastName,
            phone: data.phone,
            date: data.date,
        };
        let userList = [];
        try {
            const existingUsers = localStorage.getItem("userList");
            if (existingUsers) {
                userList = JSON.parse(existingUsers);
            }
        } catch (error) {
            console.log("Error loading user list from local storage:", error);
        }


        userList.push(userInfo);
        localStorage.setItem("userList", JSON.stringify(userList));
        setData(initialValue);
        navigate("/");
    }

    return (
        <div className="container-form">
            <div className="form-container">
                <h1 className="text-form">Reservation</h1>
                <form onSubmit={onSubmit}>
                    <div className="input-container">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            onChange={handleInputChange}
                            name="name"
                            value={data.name}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter your last name"
                            onChange={handleInputChange}
                            name="lastName"
                            value={data.lastName}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="phone">phone</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone"
                            onChange={handleInputChange}
                            name="phone"
                            value={data.phone}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="date">date</label>
                        <input
                            type="date"
                            onChange={handleInputChange}
                            name="date"
                            value={data.date}
                        />
                    </div>
                    <button type="submit" className="submit-btn" disabled={btnDisabled}>
                        Submit
                    </button>
                </form>
                {message && <span className="alert-message">{message}</span>}
            </div>
        </div>
    );
};

export default Reservation;
