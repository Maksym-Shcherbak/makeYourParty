import { LuTrash2 } from 'react-icons/lu';
import { IconContext } from 'react-icons';

export const DeleteIcon = () => {
  return (
    <IconContext.Provider
      value={{ color: '#F3F3F3', className: 'global-class-name', size: 24 }}
    >
      <LuTrash2 />
    </IconContext.Provider>
  );
};
