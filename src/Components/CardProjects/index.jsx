import React from 'react';

export function CardProjects(props) {
    return (
        <a href={props.href}>
            <div>
                <img src={props.src} />
            </div>
        </a>
    );
}