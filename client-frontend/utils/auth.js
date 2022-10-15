import cookie from "js-cookie";
import Router from "next/router";
import toast from "react-hot-toast";

/**
 *
 * @param {jwt} token
 * After login then jwt stores on cookies
 */
export const handleLogin = (token) => {
	cookie.set("backendAuthToken", token);
	toast.success("Login successful");
	Router.push("/");
};

/**
 *
 * @param {*} ctx
 * @param {*} location
 * Redirect user
 */
export const redirectUser = (ctx, location) => {
	if (ctx.req) {
		ctx.res.writeHead(302, { Location: location });
		ctx.res.end();
	} else {
		Router.push(location);
	}
};

/**
 * Logout
 */
export const handleLogout = () => {
	cookie.remove("backendAuthToken");
	toast.success("Logout successful");
	Router.push("/login");
};
