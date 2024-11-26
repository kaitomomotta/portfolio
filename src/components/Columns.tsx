import {styled} from '@mui/system';

const Wrapper = styled('div')<{ isMobile: boolean }>(({ isMobile }) => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    width: '100%'
}));

const Column = styled('div')({
    border: '1px solid red',
    flexDirection: 'column',
    flexGrow: '1',
    backgroundColor: 'white'
});

interface ColumnsProps {
    isMobile: boolean
}

export default function Columns({isMobile}: ColumnsProps) {

    return (
        <Wrapper isMobile={isMobile}>
            <Column>aaa</Column>
            <Column>bbb</Column>
            <Column>ccc</Column>
        </Wrapper>
    );
}