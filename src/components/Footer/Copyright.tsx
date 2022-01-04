import { Text, TextProps } from '@chakra-ui/react';

export const Copyright = (props: TextProps) => (
    <Text fontSize="sm" {...props}>
        &copy; {new Date().getFullYear()} Tehem.net All rights reserved.
    </Text>
);
