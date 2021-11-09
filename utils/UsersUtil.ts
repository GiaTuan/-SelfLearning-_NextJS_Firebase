import API_URL from "../shared/constants/url";

export const createUser = async (user : any) => {
    const response = await fetch(API_URL.signup, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    if(response.ok)
    {
        return true;
    }
    else
    {
        const data = await response.json();
        return data;
    }
}