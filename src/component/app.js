import React, { Component } from 'react';
import Search from './search';
import List from './list'
import Foot from './foot'

class app extends Component {
    render() {
        return (
            <div>
                <Search/>
                <List/>
                <Foot/>
            </div>
        );
    }
}

export default app;