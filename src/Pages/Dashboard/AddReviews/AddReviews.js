import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const AddReviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://desolate-crag-02664.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review added successfully');
                }
            });
    };

    const { user } = useAuth();
    console.log(user)

    return (
        <Container>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)} className="order_form">
                    <Typography sx={{ textAlign: 'left', my: 2, color: '#5e5e5e', fontFamily: 'Montserrat', fontWeight: 'medium' }} variant="h5">
                        Write Your Revires
                    </Typography>
                    <input defaultValue={user.displayName} {...register("displayName", { required: true })} />

                    <input defaultValue={user.email} {...register("email", { required: true })} />

                    <input placeholder="User image url" defaultValue={user.photoURL} {...register("img")} />

                    <textarea placeholder="Write Your Review" {...register("description", { required: true })} />
                    <input style={{ background: '#1976d2 !importent' }} className="btn_regular" type="submit" value="Add New Bike" />
                </form>
            </Box>
        </Container>
    );
};

export default AddReviews;