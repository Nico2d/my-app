import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, Accordion, Card, ListGroup, } from 'react-bootstrap';
import {useSelector} from 'react-redux'


class App extends Component {
doSomething = userInfo =>{
  console.log(userInfo)
}
  constructor(props) {
    super(props);

    this.state = {
      myJson: {
        id: null,
        size: null,
        defaultBranch: null,
        stargazersCount: null,
      }
    }
  }
  
  displayGitValue(){
    const gitValue = useSelector(state => state)
    return(
      <div >
        <h1> ID: {gitValue.id}</h1>
        <h1> size: {gitValue.size}</h1>
        <h1> defaultBranch: {gitValue.defaultBranch}</h1>
      </div>
    )
  }
  

  /*
    Wrócilem do wcześniejszego zapisu, bo przy tym nie działa
    const result = await fetch(`https://api.github.com/repos/${username}/${repo}`);
    const json = result.json();
  }*/
  
  async handleFormSubmit(e){
    e.preventDefault();
  
    const username =  this.state.username;
    const repo =  this.state.repo;
    
    await fetch(`https://api.github.com/repos/${username}/${repo}`)
      .then(function(response) {
        return response.json();
      })
      .then((myJson) => {
        this.setState({ myJson: {
          id: myJson.id,
          size: myJson.size,
          defaultBranch: myJson.default_branch,
          stargazersCount: myJson.stargazers_count
        }})
        console.log(this.state.myJson)
      }); 
  }
  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        <Form>
          <Form.Group>
            
            <Form.Label>User name:</Form.Label>
            <Form.Control placeholder="Nico2d" type="text" name="username" onChange={(e) => {
              this.setState({ username: e.target.value });
            }} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Repository name:</Form.Label>
            <Form.Control placeholder="test1" type="text" name="repo" onChange={(e) => {
              this.setState({ repo: e.target.value });
            }} /> <br />
          </Form.Group>
          
        </Form>
        
        <Accordion defaultActiveKey="1">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} eventKey="0" variant="dark" onClick={this.handleFormSubmit.bind(this)}>
                Send
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card>
                <ListGroup variant="flush" >
                  <ListGroup.Item>
                    Id: {this.state.myJson.id}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Size: {this.state.myJson.size}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Default branch: {this.state.myJson.defaultBranch}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Stars: {this.state.myJson.stargazersCount}
                  </ListGroup.Item>
                  <this.displayGitValue />
                  
                </ListGroup>
              </Card>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default App;
