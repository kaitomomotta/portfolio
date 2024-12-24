import {Box, styled} from "@mui/system";

const Text = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.accent2Dark,
}));

const Title = styled(Text)({
  fontSize: '128px',
  fontWeight: '800'
});

const Subtitle = styled(Text)({
  fontSize: '24px',
  fontWeight: '800'
});

const Link = styled('a')(({ theme }) => ({
  color: theme.palette.secondary.accent2Dark,
  fontWeight: '600'
}));

export default function MeColumn() {
  return(
      <>
        <Title>abel</Title>
        <Subtitle>computer science student</Subtitle>
        <Text>Epita 4th student - MTI major</Text>
        <Text>芝浦工業大学 exchange student</Text>
        <Link href='/portfolio/cv.pdf'>Download my CV {'>'}</Link>
      </>
  );
}
