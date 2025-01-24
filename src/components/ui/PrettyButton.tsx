import { styled } from "@mui/system";

export interface ButtonProps {
  color: string;
  text: string;
  href: string;
}

export function PrettyButton({ color, text, href }: ButtonProps) {
  const ButtonWrapper = styled('div')({
    display: 'inline-block',
  });

  const ButtonTop = styled('div')(({ theme }) => ({
    display: 'block',
    boxSizing: 'border-box',
    border: `2px solid ${color}`,
    borderRadius: '0.75em',
    padding: '0.75em 1.5em',
    background: theme.palette.primary.background,
    color: color,
    transform: 'translateY(-0.2em)',
    transition: 'transform 0.1s ease',
    '&:hover': {
      transform: 'translateY(-0.33em)',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
  }));

  const Button = styled('button')({
    display: 'inline-block',
    fontSize: '17px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '0.75em',
    background: color,
    padding: '0.25em',
    paddingTop: 0,
    margin: 0,
  });

  return (
    <ButtonWrapper>
      <Button onClick={() => (window.location.href = href)}>
        <ButtonTop>{text}</ButtonTop>
      </Button>
    </ButtonWrapper>
  );
}