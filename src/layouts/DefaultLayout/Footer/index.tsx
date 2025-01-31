import React, { FC } from 'react';

import { FooterText, FooterWrapper, Line } from './index.style';

const Footer: FC = () => {
  return (
    <div>
      <Line />
      <FooterWrapper>
        <FooterText>&copy; 2025 Все права защищены</FooterText>
        <FooterText>Телефон для связи: +1 (555) 987-6543</FooterText>
        <FooterText>Поддержка: flightforge@gmail.com</FooterText>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
