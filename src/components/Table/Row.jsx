import React from 'react';

const Row = ({id, image, name, phone, email, dob}) => {
    return (
        <tr>
            <td>
                <img src={image} alt={name}/>
            </td>
            <td>
                {name}
            </td>
            <td>
                {phone}
            </td>
            <td>
                {email}
            </td>
            <td>
                {dob}
            </td>
        </tr>
    );
};

export default Row;