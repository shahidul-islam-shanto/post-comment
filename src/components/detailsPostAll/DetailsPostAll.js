import React from 'react';

const DetailsPostAll = (props) => {
    const {title, body} = props.detailAll
    return (
        <div className='post-detail'>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default DetailsPostAll;