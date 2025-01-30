import styled from '@emotion/styled';

const Button = styled.button`
    padding: 12px 24px;
    background: linear-gradient(135deg, #007bff, #0056b3);
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.3s ease, opacity 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
        opacity: 0.9;
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 6px rgba(0, 123, 255, 0.3);
    }

    &:disabled {
        background: #ccc;
        cursor: not-allowed;
        opacity: 0.7;
    }
`;

export default Button;
