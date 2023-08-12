import React from "react";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import profilePicture from "../../assets/Images/Mohan-muruge.jpg"

const Header = () => {
    return ( 
        <div>
            <header className="header">
                <Trademark />
                <Search />
            </header>
            
            <div className="header__upload">
                <UploadButton />
                <ProfilePicture />
            </div>
        </div>
    );
}
 

const Trademark = () => (
    <div className="header__image">
        <img src={logo} alt="Brainflix-trademark" />
    </div>
);

const Search = () => (
    <div className="Header__form">
        <input type="search" placeholder="Search" />
    </div>

);

const UploadButton = () => (
    <button className="Header__button"> Upload</button>

);

const ProfilePicture = () => (
    <img src={profilePicture} alt=""></img>

);


export default Header ;