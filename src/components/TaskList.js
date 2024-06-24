import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../actions/taskActions';
import { Modal, Button, Form } from 'react-bootstrap';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    const [updatedText, setUpdatedText] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (task) => {
        setCurrentTask(task);
        setUpdatedText(task.text);
        setShow(true);
    };

    const handleSave = () => {
        dispatch(editTask(currentTask.id, updatedText));
        handleClose();
    };

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    const handleToggle = (id) => {
        dispatch(toggleTask(id));
    };

    return (
        <>
            <ul className="list-group">
                {tasks.map((task) => (
                    <li key={task.id} className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-success' : ''}`}>
                        <div>
                            <input
                                type="checkbox"
                                className="mr-3"
                                checked={task.completed}
                                onChange={() => handleToggle(task.id)}
                            />
                            {task.text}
                        </div>
                        <div>
                            <Button variant="secondary" size="sm" onClick={() => handleShow(task)}>Edit</Button>
                            <Button variant="danger" size="sm" style={{ marginLeft: '10px' }} onClick={() => handleDelete(task.id)}>Delete</Button>
                        </div>


                    </li>
                ))}
            </ul>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formTaskText">
                            <Form.Label>Task</Form.Label>
                            <Form.Control
                                type="text"
                                value={updatedText}
                                onChange={(e) => setUpdatedText(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleSave}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default TaskList;
