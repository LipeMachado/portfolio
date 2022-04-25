import React from 'react';

export function CardProjects(props) {
    return (
        <a href={props.href} target="_blank">
            <div>
                <img src={props.src} />
            </div>
        </a>
    );
}