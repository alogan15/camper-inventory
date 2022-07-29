import {CamperTable} from "../components/CamperTable";
import Button from '@mui/material/Button';
import {useNavigate } from "react-router-dom";

export const Camper =() => {
    const navigate = useNavigate();

    function addUser(){
        navigate("/add")
    }

    return(
        <>
            <Button variant="contained" style={{padding:'15px', margin:'10px'}} onClick={e => addUser()}>Add Camper</Button>
            <CamperTable />
        </>
    )
}
