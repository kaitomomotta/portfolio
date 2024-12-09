import {Box, styled} from "@mui/system";

const Title = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.accentDark,
}));

export default function ArtColumn() {
  return(
      <>
        <Title>aaa</Title>
      </>
  );
}
