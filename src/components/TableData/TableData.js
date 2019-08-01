import React from 'react';

const TableData = ({ partyContent: [] }) => {
    partyContent ? (
        <tr>
            <td>No party available at the moment.</td>
        </tr>
    ) : ( partyContent.map((party, index) => {
        <tr key={index}>
            <td>{party.id}</td>
            <td>{party.name}</td>
            <td>{party.hqaddress}</td>
            <td><img src={party.logourl} alt={party.name} /></td>
        </tr>
    })
    )
};

export default TableData;
