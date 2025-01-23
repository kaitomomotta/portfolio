import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button onClick={() => window.location.href = '/portfolio/cv.pdf'}>
        <span className="button_top"> Download my CV </span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
    /* Variables */
    --button_radius: 0.75em;
    --button_color: #EEE;
    --button_outline_color: #F25E8D;

    button {
        font-size: 17px;
        font-weight: bold;
        border: none;
        cursor: pointer;
        border-radius: 0.75em;
        background: #F25E8D;
    }

    .button_top {
        display: block;
        box-sizing: border-box;
        border: 2px solid #F25E8D;
        border-radius: 0.75em;
        padding: 0.75em 1.5em;
        background: #EEE;
        color: #F25E8D;
        transform: translateY(-0.2em);
        transition: transform 0.1s ease;
    }

    button:hover .button_top {
        /* Pull the button upwards when hovered */
        transform: translateY(-0.33em);
    }

    button:active .button_top {
        /* Push the button downwards when pressed */
        transform: translateY(0);
    }
`;

export default Button;