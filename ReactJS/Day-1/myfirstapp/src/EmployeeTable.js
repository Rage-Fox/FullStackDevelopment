import React, { Component } from 'react';

class EmployeeTable extends Component {
    state = {
        data: [],
        serialNo: 1,
        firstName: '',
        lastName: '',
        email: '',
        salary: '',
        isEditing: false,
        editIndex: -1,
    };

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleAddRow = () => {
        const newRow = {
            serialNo: this.state.serialNo,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            salary: this.state.salary,
        };

        this.setState((prevState) => ({
            data: [...prevState.data, newRow],
            serialNo: prevState.serialNo + 1,
            firstName: '',
            lastName: '',
            email: '',
            salary: '',
        }));
    };

    handleEditRow = (index) => {
        const editedData = [...this.state.data];
        editedData[index] = {
            serialNo: this.state.serialNo,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            salary: this.state.salary,
        };

        this.setState({
            data: editedData,
            isEditing: false,
            editIndex: -1,
            serialNo: this.state.serialNo + 1,
            firstName: '',
            lastName: '',
            email: '',
            salary: '',
        });
    };

    handleDeleteRow = (index) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this row?');
        if (confirmDelete) {
            const updatedData = [...this.state.data];
            updatedData.splice(index, 1);
            this.setState({ data: updatedData });
        }
    };

    handleEditClick = (index) => {
        this.setState({
            isEditing: true,
            editIndex: index,
            serialNo: this.state.data[index].serialNo,
            firstName: this.state.data[index].firstName,
            lastName: this.state.data[index].lastName,
            email: this.state.data[index].email,
            salary: this.state.data[index].salary,
        });
    };

    render() {
        return (
            <div>
                <h1>Employee Data Table</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((row, index) => (
                            <tr key={index}>
                                <td>{row.serialNo}</td>
                                <td>{row.firstName}</td>
                                <td>{row.lastName}</td>
                                <td>{row.email}</td>
                                <td>{row.salary}</td>
                                <td>
                                    <button onClick={() => this.handleEditClick(index)}>Edit</button>
                                    <button onClick={() => this.handleDeleteRow(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <input
                        type="text"
                        name="serialNo"
                        placeholder="Serial No"
                        value={this.state.serialNo}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="text"
                        name="salary"
                        placeholder="Salary"
                        value={this.state.salary}
                        onChange={this.handleInputChange}
                    />
                    {this.state.isEditing ? (
                        <button onClick={() => this.handleEditRow(this.state.editIndex)}>Save Edit</button>
                    ) : (
                        <button onClick={this.handleAddRow}>Add Row</button>
                    )}
                </div>
            </div>
        );
    }
}

export default EmployeeTable;