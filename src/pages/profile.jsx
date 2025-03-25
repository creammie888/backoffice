import React from "react";

const Profile = () => {

    return (
        <div className="main-container">
            <div className="box-container">
                <div className="profile-header">
                    <div className="profile-picture"></div>
                    <div className="profile-info">
                        <h1>Somwang Jaisangma</h1>
                        <p>security operation</p>
                    </div>
                </div>
                <div className="profile-container">
                    <div className="vertical-line"></div>
                    <div className="profile-info">
                        <table>
                            <tr>
                                <th>name</th>
                                <td>Somwang Jaisangma</td>
                                
                            </tr>
                            <tr>
                                <th>password</th>
                                <td>123456</td>
                                <td> <button id="edit-password">edit</button> </td>
                            </tr>
                            <tr>
                                <th>email</th>
                                <td>somwang@gmail.com</td>
                                
                            </tr>
                            <tr>
                                <th>phone number</th>
                                <td>0911233456</td>
                                
                            </tr>

                        </table>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Profile;