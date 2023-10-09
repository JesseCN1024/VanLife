import { redirect } from "react-router-dom";

export async function requireAuth(request){ // then have to add this request var to route in App.jsx
    // The new URL create a url object that can access it's props 
    const pathname = new URL(request.url).pathname;
    const isLoggedIn = localStorage.getItem("isLoggedIn") || false;
    if (!isLoggedIn){
        let response = redirect(`/login?message=You must log in first&oldpath=${pathname}`);
        response.body = true;
        throw response;
    }
    return null;  
}