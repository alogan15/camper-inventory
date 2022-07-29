import { useEffect, useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate } from "react-router-dom";
import * as camperService from '../services/CamperService';
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from '@mui/material';
  
export const CamperTable = () => {
    //making a new object in a array
    //setCampers updates campers
    //when loaded, page is empty
    const [campers, setCampers]= useState([]);
    const navigate = useNavigate();

    //when drawn to screen, this code is run
    //setCampers loads
    useEffect(()=> {
        camperService.getAllCampers()
        .then(res => {
            setCampers(res.data);
        }).catch()
    }, [])

    const goToUpdate = (id) => {
        navigate(`/${id}`);
    }

    const deleteCamper = (id) => {
        console.log(id);
    }

    return (
        <div >
            <Table sx={{minWidth:700}}>
                <TableHead sx={{}}>
                <TableRow>
                    <TableCell>
                        Id
                    </TableCell>                        
                    <TableCell>
                        First Name
                    </TableCell>
                    <TableCell>
                        Last Name
                    </TableCell>
                    <TableCell>
                        Email
                    </TableCell>
                    <TableCell>
                        Type
                    </TableCell>
                    <TableCell align="right">
                        Actions
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        campers.map((camper)=> {
                            return(
                                <TableRow
                                    hover
                                    key={camper.id}
                                >
                                    <TableCell>
                                        {camper.id}
                                    </TableCell>
                                    <TableCell>
                                        {camper.firstName}
                                    </TableCell>
                                    <TableCell>
                                        {camper.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {camper.email}
                                    </TableCell>
                                    <TableCell>
                                        {camper.type}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton component="a" onClick={()=> goToUpdate(camper.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton component="a" onClick={()=> deleteCamper(camper.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ) 
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}