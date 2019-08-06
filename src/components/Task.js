import React from 'react'
import { Card, Col } from 'antd'

const Task = (props) => {
    const { task } = props
    return (
        <Col span={24} style={{paddingLeft: '30px', paddingRight: '30px', backgroundColor: 'Orange'}}>
            <Card style={{backgroundColor: 'yellow', fontSize: '200%'}}>
                {task}
            </Card>
        </Col>
    )
}

export default Task