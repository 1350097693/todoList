import React, { Component } from 'react';
import { VisibilityFilters } from '../action'
import Filterbtn from './Filterbtn'

class foot extends Component {
    render() {
        return (
            <div>
                <Filterbtn filter={VisibilityFilters.SHOW_ALL}>所有任务</Filterbtn>
                <Filterbtn filter={VisibilityFilters.SHOW_ACTIVE}> 已完成 </Filterbtn>
                <Filterbtn filter={VisibilityFilters.SHOW_COMPLETED}>未完成</Filterbtn>
            </div>
        )
    }
}

export default foot;