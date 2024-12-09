import {Box, styled} from "@mui/system";

const Title = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.accent2Dark,
}));

export default function MeColumn() {
  return(
      <>
        <Title>aaa</Title>
      </>
  );
}
