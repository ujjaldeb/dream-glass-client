import React from 'react';
import { useParams } from 'react-router';

const ManageProducts = () => {

    let { topicId } = useParams();
    return (
        <div>
           <h3>ManageProducts</h3>
        </div>
    );
};

export default ManageProducts;