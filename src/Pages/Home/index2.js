import React, { Component } from "react";
import Axios from "axios";
// import Header from '../Components/Header';
// import Footer from '../Components/Footer';
// import Content from './Content';
// import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

class Home extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        Axios.get(`//localhost:8080/profile`)
            .then((res) => {
                this.setState({ data: res.data });
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    render() {
        // const changeName = (value) => {
        //     this.setState({ nama: value })
        // }
        return (
            <>
                <div>halo ini home</div>
                {/* <Header />
                <Router>
                    <Route path='/home' component={Content} />
                </Router>
                <div>halo: {this.state.nama}</div>
                <button onClick={() => changeName('anshoryihsan')}>ubah nama</button>
                <Footer /> */}
            </>
        )
    }
}
export default Home;