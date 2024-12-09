import {Box, styled} from '@mui/system';
import MeColumn from "./MeColumn.tsx";
import ProgrammingColumn from "./ProgrammingColumn.tsx";
import ArtColumn from "./ArtColumn.tsx";

const Wrapper = styled(Box)<{ isMobile: boolean }>(({ isMobile }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: isMobile ? '100%' : '66%',
}));

interface AllColumnsProps {
    isMobile: boolean;
}

export default function AllColumns(props: AllColumnsProps) {
    return (
        <Wrapper isMobile={props.isMobile}>
            <MeColumn />
            <ProgrammingColumn />
            <ArtColumn />
        </Wrapper>
    );
}