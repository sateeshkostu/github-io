import React from "react";
import { Link } from "react-router-dom";
 
const recommended = [
    {
        id: 1,
        cover: "../images/u1.jpeg",
        name: "Ishque",
        time: "2hr : 38mins",
    },
    {
        id: 2,
        cover: "../images/u2.jpg",
        name: "Supreme",
        time: "2hr : 38mins",
    },
    {
        id: 3,
        cover: "../images/u3.jpg",
        name: "Love story",
        time: "2hr : 38mins",
    },
    {
        id: 4,
        cover: "../images/u4.jpg",
        name: "Uppena",
        time: "2hr : 38mins",
    },
    {
        id: 5,
        cover: "../images/u5.jpg",
        name: "Life is Beautiful",
        time: "2hr : 38mins",
    },
]

export const Upcoming = () => {
    return (
        <>
            <div className="upcoming">
                <h1 style={{ color: 'black' }}>upcoming movies</h1>
                <Link to='/' style={{ color: 'red' }}> Viewall</Link>
            </div>
                <div className='images'>
                    {recommended.map((image) =>(
                        <img src={image.cover} alt="" />
            ))}
                </div>
                {/* maping to the array and enter the parameter and property value in image tag
                result is all the images come in the cover */}
        </>
    )
}

export default Upcoming;