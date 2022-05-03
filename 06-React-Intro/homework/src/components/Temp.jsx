import React from 'react';

export default function  Temp ({label, value}) {
    return (
        <div>
            <span>{label}</span>
            <span>{value}</span>
        </div>
    )
};