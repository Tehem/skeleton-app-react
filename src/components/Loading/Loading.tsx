import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/pro-regular-svg-icons';

export default function Loading() {
    return (
        <div>
            <FontAwesomeIcon icon={faSpinner} size="lg" spin />
            Loading...
        </div>
    );
}
