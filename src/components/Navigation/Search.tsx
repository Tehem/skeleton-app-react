import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

import { faSearch } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchInput = () => {
    return (
        <InputGroup>
            <InputLeftElement>
                <FontAwesomeIcon icon={faSearch} />
            </InputLeftElement>
            <Input
                focusBorderColor="blue.500"
                width="full"
                fontSize="sm"
                variant="filled"
                type="text"
                placeholder="What are you looking for?"
                autoComplete="off"
            />
        </InputGroup>
    );
};
