const baseUrl =
	process.env.NODE_ENV === "production"
		? "???"
		: "http://localhost:1337";

export default baseUrl;
