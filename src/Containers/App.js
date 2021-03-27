import React, {Component} from "react";
import './App.css';
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
import Scroll from "../Components/Scroll";
import { robots } from '../robots';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchFiled: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchFiled: event.target.value.toLowerCase()});
    }

    render() {
        const robotsList = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchFiled);
        })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={robotsList} />
                </Scroll>
            </div>
        );
    }
}

export default App;