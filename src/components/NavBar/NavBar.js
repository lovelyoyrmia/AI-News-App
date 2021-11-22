import React, { useState } from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as Icons from "react-icons/ai";
import { NavItems } from "./NavItems";
import image from "../../images/images.png";
import Dropdown from "./Dropdown";

function NavBar() {
  const [onClick, setOnClick] = useState(false);
  const [onHover, setOnHover] = useState(false);

  const classes = useStyles();

  const handleOnClick = () => setOnClick(!onClick);

  const onMouseEnter = () => setOnHover(true);

  const onMouseLeave = () => setOnHover(false);

  const NavStyles = styled.nav`
    height: 10vh;
    background-color: #fff2cc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 0.5rem;

    i {
      font-size: 22px;
      cursor: pointer;
      margin-left: 0.7rem;
    }
    .menu-icons {
      display: none;
    }
    .itemsNav {
      display: grid;
      list-style: none;
      grid-template-columns: repeat(5, auto);
      text-align: center;
      width: 70vw;
      justify-content: flex-end;
      margin-right: 1rem;
      margin-bottom: 0.5rem;
    }
    .nav-link-hover:hover {
      color: rgb(138, 117, 114);
    }

    @media (max-width: 1000px) {
      .menu-icons {
        display: flex;
        width: 53vw;
        justify-content: flex-end;
        margin-right: 1rem;
      }
      i {
        font-size: 2rem;
      }
      .items-active-nav {
        background-color: rgba(255, 242, 204, 0.85);
        height: 45%;
        width: 90%;
        position: absolute;
        top: 60px;
        z-index: 1;
        right: 5%;
        border-radius: 20px;
        box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.3);
      }
      .itemsNav {
        display: none;
      }
      .item-mobile {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 40vh;
      }
      .itemNav {
        font-size: 30px;
        margin-top: 2rem;
        list-style: none;
      }
      .itemHTU-mobile {
        font-size: 30px;
        display: flex;
        width: 12rem;
        align-items: space-between;
        list-style: none;
        margin-top: 1rem;
      }
      .navLink {
        height: 5.2vh;
        margin-top: 1rem;
        text-decoration: none;
        color: black;
      }
    }
  `;
  const linkStyles = {
    textDecoration: "none",
    color: "black",
    onHover: "rgb(138, 117, 114)",
  };

  return (
    <>
      <NavStyles>
        <Link to="/" style={linkStyles} className={classes.titleNav}>
          <img src={image} alt="TitleNav" />
          <Icons.AiOutlineRobot />
        </Link>
        <div className="menu-icons" onClick={handleOnClick}>
          <i className={onClick ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <div className={onClick && "item-mobile"}>
          <ul className={onClick ? "items-active-nav" : "itemsNav"}>
            <li
              className={onClick ? "itemHTU-mobile" : classes.itemHTU}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/how-to-use"
                className={onClick ? "navLink" : classes.navLink}
              >
                How to Use
                <i className="fas fa-angle-down" />
              </Link>
              {onHover && <Dropdown classes={classes} />}
            </li>
            {NavItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className={onClick ? "itemNav" : classes.itemNav}
                >
                  <Link to={item.url} style={linkStyles}>
                    <div className="nav-link-hover">{item.title}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </NavStyles>
    </>
  );
}

export default NavBar;
