'use client';
import { Box, Typography } from "@mui/material";

export default function HeroSection() {
    // const [showTitle, setShowTitle] = useState(true);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setShowTitle((prev) => !prev);
    //     }, 6000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <Box
            sx={{
                height: "80vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: "url(/heroimg.jpg)",
                backgroundSize: "cover",
                overlayColor: "rgba(0, 0, 0, 0.5)",
                backgroundPosition: { xs: "center 30%", sm: "center" },
                textAlign: "center",
                paddingX: { xs: 2, sm: 4 },
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontFamily: '"Italiana", sans-serif',
                    textAlign: "center",
                    lineHeight: 1,
                    marginBottom: 2,
                    fontSize: { xs: '5rem', sm: '6rem' },
                }}
            >
                SAVE THE DATE
            </Typography>

            <Typography
                variant="h6"
                sx={{
                    fontFamily: '"Antic Didone", serif',
                    fontSize: { xs: '1.25rem', sm: '1.5rem' }
                }}
            >
                28 augusti 14.00 | Villa Strömfors 1, Svenljunga
            </Typography>
        </Box>
        // <Box
        //     sx={{
        //         height: "100vh",
        //         display: "flex",
        //         flexDirection: "column",
        //         justifyContent: "center",
        //         alignItems: "center",
        //         backgroundImage: "url(/herobw.png)",
        //         backgroundSize: "cover",
        //         backgroundPosition: { xs: "center 30%", sm: "center" },
        //         textAlign: "center",
        //         paddingX: { xs: 2, sm: 4 },
        //     }}
        // >
        //     <AnimatePresence mode="wait">
        //         {showTitle ? (
        //             <motion.div
        //                 key="title"
        //                 initial={{ y: 50, opacity: 0 }}
        //                 animate={{ y: 0, opacity: 1 }}
        //                 exit={{ y: -50, opacity: 0 }}
        //                 transition={{ duration: 0.5 }}
        //             >
        //                 <Typography
        //                     variant="h1"
        //                     sx={{
        //                         fontFamily: '"Italiana", sans-serif',
        //                         textAlign: "center",
        //                         lineHeight: 1,
        //                         marginBottom: 2,
        //                         fontSize: { xs: '5rem', sm: '6rem' },
        //                     }}
        //                 >
        //                     SAVE THE DATE
        //                 </Typography>
        //             </motion.div>
        //         ) : (
        //             <motion.div
        //                 key="countdown"
        //                 initial={{ y: 50, opacity: 0 }}
        //                 animate={{ y: 0, opacity: 1 }}
        //                 exit={{ y: -50, opacity: 0 }}
        //                 transition={{ duration: 0.5 }}
        //             >
        //                 <CountdownTimer />
        //             </motion.div>
        //         )}
        //     </AnimatePresence>
        //     <Typography
        //         variant="h6"
        //         sx={{
        //             fontFamily: '"Antic Didone", serif',
        //             fontSize: { xs: '1.25rem', sm: '1.5rem' }
        //         }}
        //     >
        //         28 augusti 14.00 | Villa Strömfors 1, Svenljunga
        //     </Typography>
        // </Box>
    );
}