import React from "react";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import profilePicture from "../../assets/Images/Mohan-muruge.jpg";
import "../Header/Header.scss";
import uploadIcon from "../../assets/Icons/upload.svg"
import { NavLink } from 'react-router-dom'

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
        <ProfilePictureTab />
      </div>
    </header>
  );
};

const Trademark = () => (
  <div className="header__image">
    <NavLink to="/"><img src={logo} alt="Brainflix-logo" className="header__logo" /></NavLink>
  </div>
);

const Search = () => (
  <div className="header__form">
    <input type="search" placeholder="Search" className="header__search" />
  </div>
);

const UploadButton = () => (
  <NavLink to="/upload" className="header__btn-link">
    <button className="button header__btn">
      <img src={uploadIcon} alt="upload icon" className="button__icon" />
      <span className="button__text">UPLOAD</span>
    </button>
  </NavLink>
);

const ProfilePicture = () => (
  <img
    src={profilePicture}
    alt="Mohan"
    className="header__profile-picture"></img>
);


const ProfilePictureTab = () => (
  <img
    src={profilePicture}
    alt="Mohan"
    className="header__profile-picture-tab"></img>
);

export default Header;
