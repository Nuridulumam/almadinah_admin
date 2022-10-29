import {useNavigate} from "react-router-dom";


export function handleResponse(response: { data: { status: number; }; }) {
    const navigate = useNavigate();
    if ([401, 403].indexOf(response?.data?.status) !== -1) {
        localStorage.removeItem('user_almadinah');
        localStorage.removeItem("persist:root");
        localStorage.setItem("session_end", String(true));
        navigate('/')

        return false;
    } else {
        return true;
    }
}
