'use client';
import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountdownTimer from "./CountDownTimer";

export default function HeroSection() {
    const [showTitle, setShowTitle] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowTitle((prev) => !prev);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: "url(/herobw.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <AnimatePresence mode="wait">
                {showTitle ? (
                    <motion.div
                        key="title"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontFamily: '"Italiana", sans-serif',
                                textAlign: "center",
                                lineHeight: 1,
                                marginBottom: 2,
                            }}
                        >
                            SAVE THE DATE
                        </Typography>
                    </motion.div>
                ) : (
                    <motion.div
                        key="countdown"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <CountdownTimer />
                    </motion.div>
                )}
            </AnimatePresence>
            <Typography
                variant="h6"
                sx={{ fontFamily: '"Antic Didone", serif' }}
            >
                28 augusti 14.00 | Villa Strömfors 1, Svenljunga
            </Typography>
        </Box>
    );
}