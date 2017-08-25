import React from 'react';
import ReactDom from 'react-dom';

const user = {
    name: "Partha",
    quote: "You are the best"
}

const element = (
    <h1>
        Hello {user.name} and {user.quote}
    </h1>
)

ReactDom.render(
    element,
    document.getElementById('root')
)
