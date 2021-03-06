import React, { Component } from "react";
import {Card, Image} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Cookies from 'js-cookie'

class UserCard extends Component {
    constructor(props) {
        super(props)
        var name = Cookies.get("username");
        var score = Cookies.get("score");
        var submited = Cookies.get("submited");
        var passed = Cookies.get("passed");
        var createdtime = Cookies.get("createdtime");
        this.state = {
            username: name,
            score: score,
            submited: submited,
            passed: passed,
            createdtime: createdtime.substr(0, 10),
        }
    }

    componentDidMount() {
        var name = Cookies.get("username");
        var score = Cookies.get("score");
        var submited = Cookies.get("submited");
        var passed = Cookies.get("passed");
        var createdtime = Cookies.get("createdtime");
        // console.log(name)
        this.setState({
          username: name,
          score: score,
          submited: submited,
          passed: passed,
          createdtime: createdtime.substr(0, 10),
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
          username: nextProps.username,
          score: nextProps.score,
          submited: nextProps.submited,
          passed: nextProps.passed,
          createdtime: nextProps.createdtime
        });
      }

    render() {    
        return (
            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={true} />
                <Card.Content>
                    <Card.Header>{this.state.username}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in {this.state.createdtime}</span>
                    </Card.Meta>
                    <Card.Description content={"Score: "+this.state.score}/>
                    <Card.Description content={"Submit: "+this.state.submited}/>
                    <Card.Description content={"Pass: "+this.state.passed}/>
                </Card.Content>
            </Card>
        );
  }
}
export default UserCard
