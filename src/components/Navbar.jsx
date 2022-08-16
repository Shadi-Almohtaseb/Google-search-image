import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputBase, Typography } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.60),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.60),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Navbar = ({setSearchTerm , searchTerm}) => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <Box className='h-20 navbar-bg-color opacity-90 w-9/12 rounded-lg flex items-center justify-between px-3 fixed top-0 z-10 mt-3'>
                <Typography className='font-bold text-white text-2xl'>Search API</Typography>
                <Search defaultValue={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Box>
        </div>
    )
}

export default Navbar
