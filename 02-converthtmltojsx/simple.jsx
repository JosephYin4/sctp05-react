import React from 'react';


const MyPage = () => {
    return (
<div>
    <h1 className="title">Welcome to My Page</h1>
    <p>This is a simple paragraph.</p>
    <label for="name">Name:</label>
    <input type="text" id="name" />
    <img src="image.jpg" alt="A beautiful image" />
</div>
    );
};

export default MyPage;