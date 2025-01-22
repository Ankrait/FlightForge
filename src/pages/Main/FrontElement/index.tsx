import React, { FC } from 'react';

import Flex from '../../../ui-kit/Flex';
import { AnimatedBackgroundText, Line, LogoStyled } from './index.style';

const FrontElement: FC = () => {
    return (
        <Flex dir="column" gap={30}>
            <Line/>
            <AnimatedBackgroundText>
                <LogoStyled>Сервис поиска авиабилетов</LogoStyled>
            </AnimatedBackgroundText>
            <Line/>
        </Flex>
    )
}

export default FrontElement;

