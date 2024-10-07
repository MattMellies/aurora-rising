import { Box } from "@mui/material";

const PageImage = props => {
  const { image } = props;
  return (
    <Box
      component={"div"}
      className="pageImage"
      sx={{
        display: { xs: "none", lg: "block" },
        position: "fixed",
        top: "32.5%",
        left: "0"
      }}
    >
      <Box
        component={"img"}
        src={image}
        sx={{
          width: "440px",
          height: "auto"
        }}
      />
    </Box>
  );
};

export default PageImage;
