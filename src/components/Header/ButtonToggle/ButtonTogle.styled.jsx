import styled from 'styled-components';

export const ButtonToggle = styled.button`
    
        padding: 14px 40px;
    
        border: none;
        border-radius: 42px;
        border: 2px solid transparent;
        background-color: $mainBtnBackgroundColor;
    
        color: $accentColor;
        font-size: $mainFontSize;
        line-height: 18px;
        font-weight: $fontWeightSemiBold;
    
        transition-property: border, background-color, color;
        transition-duration: $transitionDuration;
        transition-timing-function: $transitionTimingFunction;
    
        &:hover {
            color: $mainBtnBackgroundColor;
            background-color: $accentColor;
        }
    
        &:active {
            border: 2px solid $outlinBtnBackgroundColor;
        }
    
        &:disabled {
            color: $outlinBtnBackgroundColor;
            background-color: $disabledBtnBackgroundColor;
            border: 2px solid $disabledBtnBackgroundColor;
        }
}`;