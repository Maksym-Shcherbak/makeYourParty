import React from 'react';
import { Button, Image} from './UserLogo.styled'; 

export const UserLogo = ({ avatar, name }) => {
    return (
        <Button type="button">
            <Image 
                src={avatar || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} // Исправлено условие по умолчанию
                alt={name} 
            />
            <span>{name || 'User'}</span>
        </Button>
    );
};
