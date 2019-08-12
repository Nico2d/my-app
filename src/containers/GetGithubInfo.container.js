import { connect } from 'react-redux'
import React from 'react'
import GetGithubInfo from '../components/GetGithubInfo.component';
import { getGithubInfo } from '../actions';


class GetGithubInfoContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      repoName: '',
    };

    this.handleGetInfoButtonClicked = this.handleGetInfoButtonClicked.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleRepoNameChange = this.handleRepoNameChange.bind(this);
  }

  handleGetInfoButtonClicked(e) {
    this.props.getGithubInfo(this.state);
  }
  handleUserNameChange(e) {
    this.setState({ userName: e.target.value });
  }
  handleRepoNameChange(e) {
    this.setState({ repoName: e.target.value });
  }

  render() {
    return (
      <GetGithubInfo
        onGetInfoButtonClicked={this.handleGetInfoButtonClicked}
        onUserNameChange={this.handleUserNameChange}
        onRepoNameChange={this.handleRepoNameChange}
      />  
    );
  }
}


export default connect(null, d => ({ getGithubInfo: getGithubInfo(d) }))(GetGithubInfoContainer);
