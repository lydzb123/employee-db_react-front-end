import React,{Component} from 'react';
import styled from 'styled-components';



const AppWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    border: 1px solid grey;
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
    width: 580px;
    font-family: 10px;
    background: #3e3e3e;
    color: #fff;
    vertical-align: center;

    #searchInput {
        height: 32px;
        width: 350px;
    }

    #filterAge {
        width: 40px;
    }
`;

const EmployeeList = styled.div`
    background: white;
    width: 600px;
    border: 2px solid palevioletred;
    margin: 0 auto;
    padding: 0;
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
        this.searchBy = this.searchBy.bind(this);

    }

    handleChange(event) {
        if(event.target.id === 'searchInput'){
            this.setState({search: event.target.value});
        }
        if(event.target.id === 'filterAge'){
            this.setState({age: event.target.value});
        }

        if(event.target.id === 'filterDepartments'){
            this.setState({department: event.target.value});
        }
    }

    componentDidMount(){
        //get all employee data
    }


    searchBy(name, age, department) {
        // console.log('change detected', name, age, department);
return
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.search !== prevState.search ||
            this.state.age !== prevState.search ||
            this.state.department !== prevState.search) {
                this.searchBy(this.state.search, this.state.age, this.state.department);
        }
    }

    render() {
        const departments = [ ...new Set(this.props.employee_data.employee_data.map(employee => employee.department)) ];



      return (
        <AppWrapper>
            <h1>Employee Hub</h1>

            <Filters>
                <input id="searchInput" type="text" placeholder="Search by Name..." onChange={this.handleChange} value={this.state.search}></input>
                
                <label htmlFor="age">Age: 
                    <input id="filterAge" type="number" placeholder="0" min="0" onChange={this.handleChange} value={this.state.age}></input>
                </label>
                
                <label htmlFor="departments">Dept: 
                    <select name="departments" id="filterDepartments" onChange={this.handleChange}>
                        <option value="all">View All</option>
                        {departments.map((dept, i) => (<option key={i} value={dept}>{dept}</option>))}
                    </select>
                </label>
            </Filters>

            <EmployeeList>
                {this.state.filteredEmployees.map((employee, index) => (
                    <Employee key={index}>
                    <ul>{employee.name}, {employee.age}</ul>
                    <ul>{employee.department}</ul>
                    </Employee>
                ))}
            </EmployeeList>

        </AppWrapper>
      )
    
      ;
    }
}

export default App