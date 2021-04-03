import React from 'react';
import Card from './Card';

const CardList = ({ employees }) => {
    return (
        <>
            {
                employees.map((user, i) => {
                    return (
                        <Card
                        key={i}
                        id={user.id}
                        title = {user.name.title}
                        firstName={user.name.first}
                        lastName ={user.name.last}
                        email={user.email}
                        phone = {user.phone}
                        picture = {user.picture.large}
                        />
                    );
                })
            }
        </>
    );
}

export default CardList;