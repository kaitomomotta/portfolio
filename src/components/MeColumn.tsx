import {Box, styled} from "@mui/system";
import CVButton from "./ui_verse/CVButton.tsx";
import {PrettyButton} from "./ui/PrettyButton.tsx";
import theme from "../assets/theme.ts";

const Text = styled(Box)(({theme}) => ({
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

const CV = styled(Box)({
  padding: '24px',
});

export default function MeColumn() {
  return (
    <>
      <Title>abel</Title>
      <Subtitle>computer science student</Subtitle>
      <Text>Epita 4th student - MTI major</Text>
      <Text>芝浦工業大学 exchange student</Text>
      <CV><CVButton/>
      </CV>
      <PrettyButton color={theme.palette.secondary.accent2Dark} text={'Download my CV'} href={'/portfolio/cv.pdf'} />
    </>
  );
}
