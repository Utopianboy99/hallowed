'use client'
import React from "react";
import { Box, Grid, Button, MenuItem, Menu } from "@mui/material";
import styles from './navbar.module.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { useState } from "react";
import Link from "next/link";



const Navbar = () =>{

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <Box className={styles.nav}>
            <Link href="/"><img src="HALLOWED CRAFTSLOGO.svg" alt="" className={styles.logo}/></Link>
            <Grid className={styles.options}>

            <Link href="products" className={styles.link}>Products</Link>
            <Link href="aboutus" className={styles.link}>About us</Link>
            <Link href="contact" className={styles.link}>Contact</Link>
            <Link href="events" className={styles.link}>Events</Link>
            </Grid>
            <Button
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        onClick={handleClick}
    >
        <MenuSharpIcon className={styles.menuIcon}/>
    </Button>
    <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
    >
        <MenuItem onClick={handleClose}>Sign up</MenuItem>
        <MenuItem onClick={handleClose}>Log in</MenuItem>
        <MenuItem onClick={handleClose}>Item 3</MenuItem>
    </Menu>
        </Box>
    )
}

export default Navbar