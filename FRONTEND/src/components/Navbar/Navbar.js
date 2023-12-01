import React, { useState, useEffect } from "react";
import './Navbar.css'
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../url";
import axios from "axios";


function Navbar() {
    const ABC = () => {
        localStorage.removeItem("jwt")
        localStorage.removeItem("id")
        navigate('/login')
    }
    const navigate = useNavigate()
    const token = localStorage.getItem("jwt");


    const uid = localStorage.getItem("id");
    const image = "../image/nprofile.png";

    const [user, setUser] = useState([]);

    const getlist = async () => {
        const data = await axios.get(`${baseUrl}/user/profile/${uid}`).then((res) => {
            // console.log("+++++++++++++++++",res.data.data)
            setUser(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getlist();
    }, []);

    return (
        <header className="MuiPaper-root MuiAppBar-root MuiAppBar-positionFixed MuiAppBar-colorPrimary makeStyles-main-1 mui-fixed MuiPaper-elevation4">


            <div className="main123">
                <a href="#home">
                    <img
                        className="img"
                        src="../image/logo6.png"
                        alt=""
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                </a>
                {token ? (
                    <p
                        className="blog"
                        onClick={() => {
                            navigate("/compiler");
                        }}
                    >
                        Compiler
                    </p>
                ) : (
                    <p className="blog" onClick={ABC}>
                        Compiler
                    </p>
                )}
                <div className="search">
                    <div className="com">
                        <div className="per">
                            <a href="#home">
                                <p
                                    className="p"
                                    onClick={() => {
                                        navigate("/");
                                    }}
                                >
                                    HOME
                                </p>
                            </a>
                            {/* <a href="#blog">
                                <p
                                    className="p"
                                    onClick={() => {
                                        navigate("/blog");
                                    }}
                                >
                                    BLOG
                                </p>
                            </a> */}
                            {/* <a href="#category">
                                <p
                                    className="p"
                                    onClick={() => {
                                        navigate("/");
                                    }}
                                >
                                    CATEGORY
                                </p>
                            </a> */}
                            <a href="#about">
                                <p
                                    className="p"
                                    onClick={() => {
                                        navigate("/about");
                                    }}
                                >
                                    ABOUT
                                </p>
                            </a>
                            <a href="#expert">
                                <p
                                    className="p"
                                    onClick={() => {
                                        navigate("/contact");
                                    }}
                                >
                                    EXPERTS
                                </p>
                            </a>
                            {/* <a href="#founder">
                                <p
                                    className="p"
                                    onClick={() => {
                                        navigate("/admin");
                                    }}
                                >
                                    FOUNDER
                                </p>
                            </a> */}
                            {token ? (
                                <p className="p91" onClick={ABC}>
                                    LOGOUT
                                </p>
                            ) : (
                                <p
                                    className="p91"
                                    onClick={() => {
                                        navigate("/login");
                                    }}
                                >
                                    LOGIN
                                </p>
                            )}
                            {/* {user.map((val) => {
                                return (
                                    <>
                                        {token ? (
                                            <img
                                                src={val._id.image ? val._id.image : image}
                                                className="img5"
                                                onClick={() => {
                                                    navigate("/profile");
                                                }}
                                            />
                                        ) : (
                                            <p className="img5" onClick={ABC}></p>
                                        )}
                                    </>
                                );
                            })} */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
