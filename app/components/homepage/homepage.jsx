import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import styles from './homepage.module.css'


const Homepage = () => {

    var proSkater = [
        "Nyjah Huston",
        "Tyshawn Jones",
        "Louie Lopez",
        'Shane O Neill',
        'Ishod Wair',
        'Zion Wright'
    ]

    return (
        <Box className={styles.bigbox}>
            <Grid className={styles.box1}>
                <Grid className={styles.topsmallbox1}>
                    <Typography className={styles.skateText1}>
                        THEE PRODOGY OF SKATE !!!!
                    </Typography>
                </Grid>
                <Grid className={styles.topsmallbox2}>
                    <Grid className={styles.box2row1}>
                        <Grid className={styles.vids1}>
                            <iframe
                                title="YouTube Video"
                                width="195"
                                height="119"
                                src="https://www.youtube.com/embed/1Mr-WBN14bI"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </Grid>
                        <Grid className={styles.vidstext1}>
                            <h3 className={styles.bigtext1}>
                                2023 SLS Sydney:
                                <br/>
                                <span>Practice Recap - Tune in LIVE today </span>
                            </h3>
                        </Grid>
                    </Grid>
                    <Grid className={styles.box2row2}>
                        <Grid className={styles.vids1}>
                            <iframe
                                title="Skate Video"
                                width="195"
                                height="119"
                                src="https://www.youtube.com/embed/MuZZml2ffFo"
                                frameborder="0"
                                allowfullscreen
                            ></iframe>
                        </Grid>
                        <Grid className={styles.vidstext2}>
                        <h3 className={styles.bigtext1}>
                                All the 9's -
                                <br/>
                                <span>SLS Tokyo 2023 </span>
                            </h3>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
            <Grid className={styles.box2}>
                <Grid className={styles.profSkaters}>
                    <h3>Proffesional Skaters</h3>
                        {proSkater.map((skater, index) =>(
                        <Typography className={styles.proSkater} key={index}>
                            {skater}
                        </Typography>
                        ))}
                </Grid>
                <Grid className={styles.reviews}>
                    <Typography>
                        Reviews
                    </Typography>
                </Grid>
                <Grid className={styles.advert}></Grid>
            </Grid>
        </Box>

    )
}

export default Homepage