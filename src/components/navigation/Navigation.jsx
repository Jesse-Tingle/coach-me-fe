import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UIContext from "../../../utils/context/UIContext";
import { ReactComponent as Logo } from "../.././assets/coachmelogo-white.svg";
import "./navigation.scss";
import { FormikProvider } from "formik";
import axiosWithCred from "../../../utils/axiosWithCred";

const Navigation = (props) => {
	const { backdropHandler, drawerOpen } = useContext(UIContext);
	const logout = () => {
		axiosWithCred
			.post(`${process.env.REACT_APP_BACKEND}/auth/logout`)
			.then((res) => {
				window.location = "/";
			});
	};
	return (
		<nav className="navigation">
			<Logo />
			<div className="nav-links">
				<Link to="/">Home</Link>
				<Link to="/dashboard">Dashboard</Link>
				<Link to="/">Support</Link>
				<Link onClick={logout} to="/">
					Logout
				</Link>
			</div>
			<i
				onClick={backdropHandler}
				className={
					drawerOpen
						? "fas fa-bars fa-3x rotate"
						: "fas fa-bars fa-3x"
				}
			></i>
		</nav>
	);
};

export default Navigation;