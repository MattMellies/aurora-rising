import { Box, Grid2 } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <Box
        component={"div"}
        sx={{
          background: "#1d1640",
          display: { xs: "none", lg: "block" },
          height: "100vh",
          width: "16%",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          zIndex: -1
        }}
      />
      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 0, lg: 2 }} />
        <Grid2 size={{ xs: 12, lg: 10 }}>
          <h1>Mission Statement</h1>
          <p>
            At Aurora Rising Ltd., our mission is to empower individuals of all
            abilities through personalized psychological and behavioral support.
            We are committed to providing a safe, inclusive environment that
            fosters growth, resilience, independence, and well-being. By
            collaborating with clients, families, and communities, we strive to
            unlock potential, enhance quality of life, and promote understanding
            and acceptance. Together, we envision a world where everyone can
            thrive, celebrating their unique strengths and contributions.
          </p>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default HomePage;
