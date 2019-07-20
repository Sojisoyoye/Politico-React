import React from 'react';

const TableData = ({ votehistory: { } }) => {
    votehistory ? (<tr>
        <td>
            You have not voted yet
        </td>
    </tr>) : (<tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
    </tr>)
}

