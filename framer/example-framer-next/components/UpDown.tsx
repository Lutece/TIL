import styled from '@emotion/styled';
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
    up: { y: '100px' },
    down: { y: '0px'}
};

const variantsPassword = {
    up: { opacity: 1 },
    down: { opacity: 0 }
}

const StyledInput = styled(motion.input)`
    position: relative;
    z-index: 1;
    border: 0;
    border-bottom: 2px solid #FCD429;
    &:hover, &:active, &:focus {
        outline: 0;
    }
`;

const StyledInputPassword = styled(motion.input)`
    position: absolute;
    left: 0;
    top: 0;
    border: 0;
    border-bottom: 2px solid #FCD429;
    &:hover, &:active, &:focus {
        outline: 0;
    }
`;

const UpDown = () => {

    const [isUp, setIsUp] = useState(false);

    return(
        <div style={{ position: 'relative' }}>
            <StyledInputPassword
                animate={isUp ? 'up' : 'down'}
                variants={variantsPassword}
                transition={{duration: 2, ease: 'backOut'}}
                onKeyPress={(e) => {
                    if(e.key === 'Enter') {
                        setIsUp(true);
                    }
                }}
            />
            <StyledInput
                animate={isUp ? 'up' : 'down'}
                variants={variants}
                transition={{duration: 0.6, ease: 'backOut'}}
                onKeyPress={(e) => {
                    if(e.key === 'Enter') {
                        setIsUp(true);
                    }
                }}
            />
        </div>
    )
};

export default UpDown;