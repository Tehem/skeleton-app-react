import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SocialMediaLinks = (props: ButtonGroupProps) => (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
        <IconButton
            as="a"
            href="#"
            aria-label="Facebook"
            icon={<FontAwesomeIcon icon={faFacebook} fontSize="20px" />}
        />
        <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FontAwesomeIcon icon={faTwitter} fontSize="20px" />}
        />
    </ButtonGroup>
);
