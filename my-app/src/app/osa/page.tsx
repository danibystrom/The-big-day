"use client";

import CheckIcon from "@mui/icons-material/Check";
import SplitSectionLeft from "@/app/components/SplitSectionLeft";
import WeddingButton from "@/app/components/WeddingButton";
import { Box, TextField, Typography, Alert, Snackbar } from "@mui/material";
import { FormEvent, useState } from "react";

export default function OsaPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [allergies, setAllergies] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  /** Ljus hjälptext i fältet – döljs vid fokus (klick) */
  const placeholderColor = "rgba(28, 26, 24, 0.32)";
  const bodyFont = '"Antic Didone", serif';

  const fieldSx = {
    marginTop: 0,
    "& .MuiInputLabel-root": {
      fontFamily: bodyFont,
      color: "#1C1A18",
      letterSpacing: 0.2,
      transform: "none",
      position: "static",
      marginBottom: "2px",
    },
    "& .MuiInputLabel-shrink": {
      transform: "none",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#1C1A18",
    },
    "& .MuiInput-root": {
      marginTop: 0,
    },
    "& .MuiInputBase-root": {
      fontFamily: '"Antic Didone", serif',
      color: "#1C1A18",
      fontSize: { xs: 16, sm: 18 },
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0,
    },
    "& .MuiInputBase-input::placeholder": {
      color: placeholderColor,
      opacity: 1,
      fontFamily: bodyFont,
    },
    /* Textarea-placeholder följer inte alltid input-regeln i alla webbläsare */
    "& textarea.MuiInputBase-input::placeholder": {
      fontFamily: bodyFont,
    },
    "& .MuiInputBase-input:focus::placeholder": {
      opacity: 0,
      transition: "opacity 0.15s ease",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#1C1A18",
      borderBottomWidth: "1px",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottom: "1px solid #1C1A18",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "1px solid #1C1A18",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#1C1A18",
      borderBottomWidth: "1px",
    },
    "& textarea.MuiInputBase-input": {
      padding: 0,
      fontFamily: bodyFont,
    },
  } as const;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !phone) {
      setErrorOpen(true);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          allergies: allergies.trim() || null,
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setSuccessOpen(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setAllergies("");
    } catch (e) {
      setErrorOpen(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(to bottom, rgba(28, 26, 24, 0.62) 0%, rgba(28, 26, 24, 0.18) 20%, transparent 42%), url(/Tezza-0266.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Italiana", sans-serif',
            color: "#fff",
            textAlign: "center",
            lineHeight: 1,
            mb: 4,
          }}
        >
          ANMÄL DIG TILL BRÖLLOPET
        </Typography>
      </Box>

      <Box
        component="section"
        sx={{
          minHeight: "90vh",
          backgroundColor: "#F2EDE4",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "85vw",
            px: { xs: 3, sm: 6, md: 8 },
            py: { xs: 6, md: 6 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Italiana", sans-serif',
              color: "#1C1A18",
              textAlign: "left",
              lineHeight: 1.05,
              mb: 3,
              letterSpacing: 0.5,
            }}
          >
            FYLL I DINA UPPGIFTER NEDAN
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Italiana", sans-serif',
              color: "#1C1A18",
              textAlign: "left",
              lineHeight: 1.05,
              mb: 3,
              letterSpacing: 0.5,
            }}
          >
            OM ER INBJUDAN INNEHÅLLER TVÅ NAMN BEHÖVER VI ATT NI FYLLER I ANMÄLAN SEPARAT.
          </Typography>

          <Box component="form" noValidate autoComplete="off" sx={{ mt: 8 }} onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                columnGap: { xs: 4, md: 10 },
                rowGap: 2,
                mb: 6,
              }}
            >
              <TextField
                variant="standard"
                label="Förnamn:"
                fullWidth
                InputLabelProps={{ shrink: true }}
                placeholder="Skriv ditt förnamn här"
                sx={fieldSx}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />

              <TextField
                variant="standard"
                label="Efternamn:"
                fullWidth
                InputLabelProps={{ shrink: true }}
                placeholder="Skriv ditt efternamn här"
                sx={fieldSx}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />

              <TextField
                variant="standard"
                label="Epost:"
                type="email"
                fullWidth
                InputLabelProps={{ shrink: true }}
                placeholder="namn@exempel.se"
                sx={fieldSx}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <TextField
                variant="standard"
                label="Telefonnummer:"
                fullWidth
                InputLabelProps={{ shrink: true }}
                placeholder="T.ex. 070 123 45 67"
                sx={fieldSx}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Box>

            <TextField
              variant="standard"
              label="Om du har någon form av allergi eller önskemål om specialkost, fyll i nedan:"
              fullWidth
              multiline
              minRows={1}
              InputLabelProps={{ shrink: true }}
              placeholder="Lämna tomt om inget gäller, eller beskriv kort här…"
              sx={{
                ...fieldSx,
                mb: 6,
                "& .MuiInputBase-root": {
                  paddingTop: 0,
                  paddingBottom: 0,
                  marginTop: 1,
                },
                "& textarea": {
                  padding: 0,
                },
              }}
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
            />

            <WeddingButton
              text={submitting ? "Skickar..." : "Anmäl dig här"}
              background="light"
              variant="filled"
              type="submit"
              disabled={submitting}
              width="50%"
            />
          </Box>
        </Box>
      </Box>
      <SplitSectionLeft
        title="DEN SOM VÄNTAR PÅ NÅGOT GOTT..."
        text="Vi har skrivit många kapitel, men det största ligger framför oss. Nu vill vi säga ja till varandra med er vid vår sida, för en kärlek som växer och blomstrar i evighet. Den här sidan är vår lilla hörna för er. Här hittar ni allt ni behöver veta inför den stora dagen. Från praktisk information till schemalagda festligheter, vi hoppas att ni känner er välkomna, förberedda och lika förväntansfulla som vi."
        imageSrc="/Tezza-5686.jpg"
        buttonText="Mer om bröllopet"
        buttonHref="/brollopet"
        bgColor="#1C1A18"
      />

      <Snackbar
        open={successOpen}
        autoHideDuration={4000}
        onClose={() => setSuccessOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSuccessOpen(false)}
          severity="success"
          variant="filled"
          icon={<CheckIcon sx={{ fontSize: "1.35rem", opacity: 0.95 }} />}
          sx={{
            width: "100%",
            maxWidth: 420,
            alignItems: "center",
            backgroundColor: "#1C1A18",
            color: "#F2EDE4",
            fontFamily: bodyFont,
            fontSize: "1rem",
            letterSpacing: 0.02,
            borderRadius: 0,
            border: "1px solid rgba(242, 237, 228, 0.2)",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.35)",
            "&.MuiAlert-filled.MuiAlert-filledSuccess": {
              backgroundColor: "#1C1A18",
            },
            "& .MuiAlert-icon": {
              color: "#F2EDE4",
              opacity: 0.9,
            },
            "& .MuiAlert-message": {
              padding: "4px 0",
            },
            "& .MuiAlert-action": {
              color: "#F2EDE4",
              paddingTop: 0,
              alignItems: "center",
            },
            "& .MuiAlert-action .MuiIconButton-root": {
              color: "#F2EDE4",
            },
          }}
        >
          Tack för din anmälan!
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorOpen}
        autoHideDuration={4000}
        onClose={() => setErrorOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setErrorOpen(false)}
          severity="error"
          variant="filled"
          sx={{
            width: "100%",
            maxWidth: 420,
            alignItems: "center",
            backgroundColor: "#1C1A18",
            color: "#F2EDE4",
            fontFamily: bodyFont,
            fontSize: "1rem",
            letterSpacing: 0.02,
            borderRadius: 0,
            border: "1px solid rgba(224, 180, 180, 0.35)",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.35)",
            "&.MuiAlert-filled.MuiAlert-filledError": {
              backgroundColor: "#1C1A18",
            },
            "& .MuiAlert-icon": {
              color: "#e8c4c4",
            },
            "& .MuiAlert-message": {
              padding: "4px 0",
            },
            "& .MuiAlert-action": {
              color: "#F2EDE4",
              paddingTop: 0,
              alignItems: "center",
            },
            "& .MuiAlert-action .MuiIconButton-root": {
              color: "#F2EDE4",
            },
          }}
        >
          Något gick fel. Kontrollera fälten och försök igen.
        </Alert>
      </Snackbar>
    </Box>
  );
}
