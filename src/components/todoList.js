import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../logo.svg';
import '../App.css';
import Task from './Task';
import { Input, Row, Col } from 'antd';
import { addTaskAction } from '../store/tasks/action'

class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      value: ''
    }
  }

  addTask = (e) => {
    const { value, tasks } = this.state
    const { addTaskAction } = this.props
    const task = {
      task:  e.target.value 
    }
    addTaskAction(value)
    this.setState({
      tasks: tasks.concat(task),
      value: ''
    })
  }

  onInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    console.log(this.props)
    const { tasks, value } = this.state
    return (
      <div className="App">
        <Row style={{ padding: '200px' }}>
          <Col span={24}>
            <Input 
              placeholder="What do you want to do?"
              style={{ fontSize: '200%'}}
              onPressEnter={this.addTask}
              onChange = {this.onInputChange}
              value = {value}
            />
          </Col>
          {tasks.map(({ task }, key) => (
            <Task task={task} />
          ))}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => ({
  addTaskAction: (task) => dispatch(addTaskAction(task)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);