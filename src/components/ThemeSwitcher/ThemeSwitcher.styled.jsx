import styled from 'styled-components';

const transition = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const Switch = styled.label`
  margin: auto;
  position: relative;
  background-color:white;
`;

export const SwitchInput = styled.input`
  display: block;
  background-color: ${({ theme }) => theme.mainAccent};
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1) inset;
  border-radius: 20px;
  outline: transparent;
  position: relative;
  width: 40px;
  height: 20px;
  -webkit-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color ${transition};
  cursor: pointer;

  /* &:focus  {
    outline: auto;
  } */

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
  }

  &::before {
    background-color: ${({ theme }) => theme.mainAccent};
    border-radius: inherit;
    inset: 0;
    transition: background-color ${transition};
  }
  &::after {
    background-color: ${({ theme }) => theme.themeSwitcher};
    border-radius: 50%;
    top: 1.9px;
    right: 1.9px;
    width: 16.5px;
    height: 16.5px;
    transition:
      background-color ${transition},
      transform ${transition};
    z-index: 1;

    @media screen and (min-width: 768px) {
      top: 1.8px;
    }

    @media screen and (min-width: 1440px) {
      top: 1.6px;
    }
  }

  &:checked:after {
    transform: translateX(-119%);

    /* @media screen and (min-width: 1440px) {
      transform: translateX(-116%);
    } */
  }
`;


// import styled from 'styled-components';

// export const Wrapper = styled.div`
//   height: 100vh;
// `;

// export const Shape = styled.div`
//   position: absolute;
//   top: 20px;
//   left: 20px;
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
// `;

// export const Sun = styled.div`
//   background-color: #fdb813;
//   box-shadow: 0 0 20px 10px #fdb813;
// `;

// export const Moon = styled.div`
//   display: none;
//   background-color: #f2f2f2;
//   box-shadow: 0 0 20px 10px #f2f2f2;
// `;

// export const ToggleContainer = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

// export const ToggleLabel = styled.label`
//   display: block;
//   width: 40px;
//   height: 24px;
//   border-radius: 12px;
//   background-color: #131111;
//   cursor: pointer;
//   position: relative;
//   transition: background-color 0.3s, box-shadow 0.3s;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
// `;

// export const ToggleInput = styled.input`
//   display: none;
// `;

// export const ToggleSwitch = styled.span`
//   &::before {
//     content: "";
//     position: absolute;
//     top: 2px;
//     left: 2px;
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     background-color: #d3e719;
//     transition: transform 0.3s ease;
//   }
// `;

// export const ToggleLabelChecked = styled(ToggleLabel)`
//   &::before {
//     transform: translateX(16px);
//   }
// `;

// export const ToggleLabelHover = styled(ToggleLabel)`
//   &:hover {
//     background-color: #e48989;
//   }
// `;

// export const ChangeText = styled.div`
//   position: absolute;
//   top: -60px;
//   left: -25px;
//   font-size: 24px;
//   color: #ee3b3b;
//   white-space: nowrap;
// `;