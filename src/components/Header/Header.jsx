import React from "react";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import profilePicture from "../../assets/Images/Mohan-muruge.jpg";
import "../Header/Header.css";

const Header = () => {
  return (
    <header className="header">
      <Trademark />
      <div className="header__middle">
        <Search />
        <ProfilePicture />
      </div>
      <div className="header__upload">
        <UploadButton />
      </div>
    </header>
  );
};

const Trademark = () => (
  <div className="header__image">
    <img src={logo} alt="Brainflix-logo" className="header__logo" />
  </div>
);

const Search = () => (
  <div className="header__form">
    <input type="search" placeholder="Search" className="header__search" />
  </div>
);

const UploadButton = () => <button className="header__button"> Upload</button>;

const ProfilePicture = () => (
  <img
    src={profilePicture}
    alt="Mohan"
    className="header__profile-picture"></img>
);

export default Header;
