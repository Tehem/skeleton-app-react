import { faSpinner } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Loading = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faSpinner} size="lg" spin />
            Loading...
        </div>
    );
};

export default Loading;
