'use client'
import React from "react";
import { Box, Grid, Button, MenuItem, Menu, Typography } from "@mui/material";
import styles from './banner.module.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { useState } from "react";
import Link from "next/link";


const Banner = () => {
    return (
        <Box className={styles.banner}>
            <Grid className={styles.box1}>
                <Typography className={styles.text}>SUMMER STEEZZ SALE</Typography>
                <Typography className={styles.text}>25% OFF ALL JORTS</Typography>
                <Typography className={styles.text}>01 - 13 SEPT</Typography>
            </Grid>
        </Box>
    )
}

export default Banner


