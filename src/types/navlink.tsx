import { FunctionComponent } from 'react';

export interface IconProps {
    className?: string;
}

export interface Navlink {
    href: string;
    label: string;
    icon?: FunctionComponent<IconProps>; // Update to accept a React functional component
}
