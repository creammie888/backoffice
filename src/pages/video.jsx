import React from "react";
import { FaSearch } from "react-icons/fa";

const Video = () => {

    return (
        <div className="main-container">
                    <div className="box-container">
                        <div className="profile-top">
                            <p>Somwang Jaisangma</p>
                            <div className="profile-pic"></div>
                        </div>
                        <div class="search-container">
                            <FaSearch className="search-icon" />
                            <input type="text" placeholder="search..." />
                        </div>
                        <table className="table">
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Time-in</th>
                                <th>Time-out</th>
                                <th>Username</th>
                                <th>Video.mp4</th>
                            </tr>
                            <tr>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>2</td>
                            </tr>
        
                        </table>
                    </div>
                </div>
    )
}
export default Video;