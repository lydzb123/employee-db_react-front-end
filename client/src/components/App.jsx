import React, {Component} from 'react';
import styled from 'styled-components';
import EmployeeList from './EmployeeList.jsx';


const AppWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    height: auto;
    font-family: sans-serif;
    h1{
        text-align: center;
    }
`;

const Filters = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 12px;
    width: 600px;
    font-family: 10px;
    background: #3e3e3e;
    color: #fff;
    vertical-align: center;

    #search {
        height: 32px;
        width: 350px;
    }

    #age {
        width: 40px;
    }
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            department: "All",
            age: 0,
            filteredEmployees: this.props.employee_data.employee_data
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        var state = this.state;
        state[event.target.id] = event.target.value;
        state.filteredEmployees = this.props.employee_data.employee_data;

            if(state.department.toLowerCase() === "all") {
                state.filteredEmployees = this.props.employee_data.employee_data
            } else {
                state.filteredEmployees =  this.props.employee_data.employee_data.filter(employee => {
                    console.log('1, state: ', state);
                    return employee.department === state.department;
                });
            }

            if(state.search !== "") {
                console.log('here', state);

                state.filteredEmployees = state.filteredEmployees.filter(employee => {
                    return employee.name.toLowerCase().includes(state.search.toLowerCase())
                });
            }

            if(parseInt(state.age) !== 0 && state.age !== ""){
                state.filteredEmployees = state.filteredEmployees.filter(employee => {
                    return employee.age == state.age
                });
            }

        this.setState({state});
    }
    

    render() {
        const departments = [ ...new Set(this.props.employee_data.employee_data.map(employee => employee.department)) ];



      return (
        <AppWrapper>
            <h1>Employee Hub</h1>

            <Filters>
                <input id="search" type="text" placeholder="Search by Name..." onChange={this.handleChange} value={this.state.search}></input>
                
                <label htmlFor="age">Age: 
                    <input id="age" type="number" placeholder="0" min="0" onChange={this.handleChange} value={this.state.age}></input>
                </label>
                
                <label htmlFor="departments">Dept: 
                    <select name="departments" id="department" onChange={this.handleChange}>
                        <option value="all">View All</option>
                        {departments.map((dept, i) => (<option key={i} value={dept}>{dept}</option>))}
                    </select>
                </label>
            </Filters>
            <EmployeeList employees={this.state.filteredEmployees}></EmployeeList>
            

        </AppWrapper>
      )
    
      ;
    }
}

export default App