import React from 'react';
import EntypoIcons from 'react-native-vector-icons/Entypo';

import { NewButton } from './styles';

export default function Button() {
    return (
        <NewButton>
            <EntypoIcons name='plus' size={22} color='#000' />
        </NewButton>
    );
}