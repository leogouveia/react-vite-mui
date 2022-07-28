import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import Header from "./layout/Header";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Vite.js Example {count}
          </Typography>
        </Box>
        <Box sx={{ my: 4 }}>
          <Button variant="contained" onClick={handleClick}>
            Click
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
