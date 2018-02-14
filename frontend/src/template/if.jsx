import React from 'react';

export default props => {
if (props.hide) {
        return props.children
    }
    else {
        return false
    }
}