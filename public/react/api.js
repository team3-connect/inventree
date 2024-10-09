let apiURL;

if (process.env.NODE_ENV === "development") {
  apiURL = process.env.REACT_APP_API_URL || "/api" ;
} else {
  apiURL = "http://localhost:3000/api";
}

export default apiURL;
