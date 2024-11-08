import { useEffect, useState } from "react";
import './main.css';

export default function Main(props) {
    const { handleToggleModal } = props;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date().toDateString()); // State for selected date

    useEffect(() => {
        async function fetchAPIData() {
            setLoading(true);
            const NASA_KEY = process.env.REACT_APP_NASA_API_KEY;
            const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${selectedDate}`;

            const localKey = `NASA-${selectedDate}`;

            if (localStorage.getItem(localKey)) {
                const apiData = JSON.parse(localStorage.getItem(localKey));
                setData(apiData);
                console.log("Fetched from cache for selected date");
                setLoading(false);
                return;
            }
            localStorage.clear();

            try {
                const res = await fetch(url);
                const apiData = await res.json();
                localStorage.setItem(localKey, JSON.stringify(apiData));
                setData(apiData);
                console.log("Fetched from API for selected date");
            } catch (err) {
                console.log(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchAPIData();
    }, [selectedDate]); // Re-fetch data when selectedDate changes

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value); // Update the selected date
    };

    return (
        <div>
            {/* Dropdown for selecting a date */}
            <label htmlFor="dateSelect">Select a date: </label>
            <input
                type="date"
                id="dateSelect"
                value={selectedDate}
                onChange={handleDateChange}
            />

            {loading ? (
                <div className="loadingState">
                    <i className="fa-solid fa-gear"></i>
                </div>
            ) : (
                data && (
                    <div>
                        <div className="imgContainer">
                            <img
                                src={data.hdurl}
                                alt={data.title || "bg-img"}
                                className="bgImage"
                            />
                        </div>
                        <div>
                            <h2>{data.title}</h2>
                            <p>{data?.explanation}</p>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}
