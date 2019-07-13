import React from 'react';

const TableData = ({ voteHistory: [] }) => {
    voteHistory ? (
        <tr>
            <td>You have not voted yet.</td>
        </tr>
    ) : ( voteHistory.map((vote, index) => {
        <tr key={index}>
            <td>{vote.id}</td>
            <td>{vote.officeName}</td>
            <td>{vote.candidate}</td>
            <td>{vote.party}</td>
        </tr>
    })
    )
};

export default TableData;
