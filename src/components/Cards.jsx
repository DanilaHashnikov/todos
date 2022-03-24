import React, { useState } from 'react';
import Card from './Card';

export default function Cards({ data, setData }) {
    return (
        <>
            {
                data.map(({ name, descr, id }) => (
                    <Card setData={setData} key={id} data={data} name={name} descr={descr} id={id}/>
                ))
            }
        </>
    );
}