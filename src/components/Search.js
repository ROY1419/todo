import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/actions';
import { TextField } from '@mui/material';

const Search = () => {
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        dispatch(setSearchTerm(event.target.value));
    };

    return (
        <TextField label="Search Todos" variant="outlined" onChange={handleSearch} />
    );
};

export default Search;