import { Box } from "@mui/material";

const PageImage = props => {
  const { image } = props;
  return (
    <Box
      component={"img"}
      src={image}
      className="pageImage"
      sx={{}}
    />
  );
};

export default PageImage;
