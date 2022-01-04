import classNames from 'classnames';
import React from 'react';

export type ButtonProps = {
    srOnly?: JSX.Element | string;
    ariaLabel?: string;
    onClick?: () => void;
    type?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'link' | 'neutral';
    icon?: JSX.Element;
    label?: JSX.Element | string;
    outline?: boolean;
    disabled?: boolean;
    circle?: boolean;
    square?: boolean;
    loading?: boolean;
};

export const Button = (props: ButtonProps) => {
    return (
        <button
            type="button"
            className={classNames(
                'btn',
                props.type && `btn-${props.type}`,
                props.outline && 'btn-outline',
                props.circle && 'btn-circle',
                props.square && 'btn-square',
                props.loading && 'loading'
            )}
            onClick={props.onClick}
            aria-label={props.ariaLabel}
            disabled={props.disabled || false}
        >
            {props.srOnly && <span className="sr-only">{props.srOnly}</span>}
            {props.icon}
            {props.label}
        </button>
    );
};
