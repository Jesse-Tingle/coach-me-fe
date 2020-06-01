import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import SideOne from "../SideOne";
import CoachForm from "./CoachForm";

// Redux Action
import { registerCoach } from "../../../actions/authActions";

//Styling
import "./coachRegistration.scss";

function CoachRegistration(props) {
	const dispatch = useDispatch();
	const [coachCredentials, setCoachCredentials] = useState({
		first_name: "",
		last_name: "",
		email: "",
		phone: "",
		dob: "",
		password: "",
		confirm_password: "",
		height: "",
		sex: "",
	});
	const handleChange = (e) => {
		setCoachCredentials({
			...coachCredentials,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(registerCoach(coachCredentials)).then((res) => {
			console.log(res);
			props.history.push("/dashboard");
		});
	};
	return (
		<div className="Register-Wrapper">
			<SideOne />
			<div className="side-two">
				<h4 className="coach-text">
					Thank you for your interest in becoming a health coach!
					Please create your account to get started!
				</h4>
				<CoachForm
					coachCredentials={coachCredentials}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
				<div className="login-container">
					Already have an account?{" "}
					<Link className="login" to="/coach-login">
						Login
					</Link>
				</div>
			</div>
		</div>
	);
}
export default CoachRegistration;
