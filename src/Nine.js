


import { useState } from "react";

export default function Nine() {
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState([]);

    const inputText = (e) => {
        setReview(e.target.value);
    }

    const addReview = () => {
        if (review.trim() !== '') {
            setReviews([...reviews, review]);
            setReview(''); 
        }
    }

    return (
        <div>
            <h1>ADD YOUR REVIEW</h1>
            <div>
                <input 
                    className="inp" 
                    type="text" 
                    placeholder="Enter a review" 
                    value={review}
                    onChange={inputText} 
                />
                <button onClick={addReview} className="btn1">Add Review</button>
            </div>
            <ul>
                {reviews.map((rev, index) => (
                    <p key={index}><b>customer</b><br></br>{rev}</p>
                ))}
            </ul>
        </div>
    );
}
