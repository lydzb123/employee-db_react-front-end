import React,{Component} from 'react';
import styled from 'styled-components';

const EmployeeListWrapper = styled.div`
    background: grey;
    width: 600px;
    margin: 0 auto;
    padding: 12px;
    display: flex;
    flex-direction: column;

`;

const Employee = styled.div`
    background: white;
    border: 1px solid grey;
    width: 100%;
    display: flex;
    justify-content: space-between;
    ul {
        margin: 0;
        padding: 10px;
    }
`;

class EmployeeList extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <EmployeeListWrapper>
                {this.props.employees.length === 0 ?
                <Employee><ul>There are no matching records found.</ul></Employee> :
                this.props.employees.map((employee, index) => (
                    <Employee key={index}>
                        <ul><strong>{employee.name}</strong>, {employee.age}</ul>
                        <ul>{employee.department}</ul>
                        {/* idea for later: implement on click filter for department and age text */}
                    </Employee>
                ))}
            </EmployeeListWrapper>
        )
    }
}

export default EmployeeList