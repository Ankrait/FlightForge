import styled from "@emotion/styled";

export const LogoStyled = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

export const AnimatedBackgroundText = styled.div`
  display: flex;           
  justify-content: center;  
  align-items: center;      
  background: linear-gradient(45deg,rgb(183, 208, 244),rgb(0, 41, 155));
  background-size: 200% 200%;
  color: transparent;
  font-size: 36px;
  font-weight: bold;
  background-clip: text;
  animation: gradientAnimation 3s ease infinite;

  @keyframes gradientAnimation {
    0% {
      background-position: 200% 0%;
    }
    50% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 200% 0%;
    }
  }
`;

export const Line = styled.hr`
  border: 0;
  border-top: 1px solid rgb(0, 32, 91); 
  margin: 5px 0;
  box-shadow: 0px 2px 5px rgba(62, 73, 176, 0.1);
`;