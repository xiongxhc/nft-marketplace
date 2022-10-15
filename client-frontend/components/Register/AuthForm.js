import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import jwt from "jsonwebtoken";
import baseUrl from "../../utils/baseUrl";
import { handleLogin, redirectUser } from "../../utils/auth";

const INITIAL_USER = {
	username: "",
	email: "",
	password: "",
};

const AuthForm = () => {
	const [user, setUser] = React.useState(INITIAL_USER);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prevState) => ({ ...prevState, [name]: value }));
	};

	/**
	 *
	 * @param {username, email, password} e
	 * registration form
	 */

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(user)
		try {
			const url = `${baseUrl}/auth/local/register`;
			const payload = {
				username: user.username,
				email: user.email,
				password: user.password,
			};
			const response = await axios.post(url, payload);
			// console.log("####=>", response.data);
			setUser(INITIAL_USER);

			const token = jwt.sign(
				{ user: response.data },
				process.env.JWT_SECRET,
				{}
			);

			handleLogin(token);
			redirectUser("", "/");

			// console.log(token);
		} catch (error) {
			const { data } = error.response.data;
			// console.log(data);
			if (data) {
				toast.error(data[0].messages[0].message);
			}
		}
	};

	return (
		<form id="contactForm" onSubmit={handleSubmit}>
			<div className="row">
				<div className="col-lg-12">
					<div className="form-group">
						<label>Your Name</label>
						<input
							type="text"
							className="form-control"
							name="username"
							value={user.username}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="col-lg-12 ">
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							name="email"
							type="email"
							value={user.email}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="col-12">
					<div className="form-group">
						<label>Password</label>
						<input
							className="form-control"
							name="password"
							type="password"
							value={user.password}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="col-lg-12 col-md-12 text-center">
					<button type="submit" className="default-btn">
						Register Now
					</button>
				</div>

				<div className="col-12">
					<div className="sub-title">
						<span>Or</span>
					</div>
				</div>

				<div className="login-with-account">
					<ul>
						<li>
							<a href="https://www.facebook.com/" target="_blank">
								<i className="ri-facebook-line"></i>
								Login with Facebook
							</a>
						</li>

						<li>
							<a href="https://www.google.com/" target="_blank">
								<i className="ri-google-line"></i>
								Login with Google
							</a>
						</li>
					</ul>
				</div>
			</div>
		</form>
	);
};

export default AuthForm;
