import { connect } from 'react-redux'
import React from 'react'
import GithubInfoComponent from '../components/GithubInfo.component';

export default connect(s => ({ githubInfo: s }))(({ githubInfo }) => (
  <GithubInfoComponent
    {...githubInfo}
  />
));
