import { LuTrash2 } from 'react-icons/lu';
import { IconContext } from 'react-icons';
import styled from 'styled-components';

const StyledDeleteIcon = styled(LuTrash2)`
  color: #f3f3f3;

  &:hover,
  &:focus {
    color: #161f37;
  }
`;

export const DeleteIcon = () => {
  return (
    <IconContext.Provider value={{ className: 'global-class-name', size: 24 }}>
      <StyledDeleteIcon />
    </IconContext.Provider>
  );
};
