import React from 'react';

type AvatarProps = {
    src?: string;
    srOnly?: string;
    alt?: string;
};

export const Avatar = ({
    src = '',
    srOnly = 'profile avatar',
    alt = 'profile picture',
}: AvatarProps) => {
    return (
        <div className="avatar">
            <div className="rounded-full w-10 h-10 m-1">
                {src ? (
                    <img src={src} alt={alt} aria-hidden="true" />
                ) : (
                    <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                )}
                {srOnly && <span className="sr-only">{srOnly}</span>}
            </div>
        </div>
    );
};
