import React from 'react'
import {Card, Collapse} from 'antd'
import Common from './CommonQ'
import Extra from './ExtraQ'

const {Panel} = Collapse

const Responses = (props) => {
    return (
        <Collapse
            bordered={false}
            defaultActiveKey={['1']}
        >
            <Panel header='Common Questions' key='1'>
                <Common ans = {props.commonQuestions}/>
            </Panel>
            <Panel header='Extra Questions' key='2'>
                <Extra ans = {props.extraQuestions}/>
            </Panel>
        </Collapse>
    )
}

export default Responses