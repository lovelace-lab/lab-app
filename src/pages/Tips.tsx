import React, {} from 'react';
import TipsInput from '../components/TipsInput';
import TipsList from '../components/TipsList' ;

const TipsPage: React.FC = () => {
    return <>
        <TipsInput />
        <TipsList />
        <div>TipsPage</div>
    </>
};

export default TipsPage;