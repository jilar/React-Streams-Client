import React from 'react';

class GoogleAuth extend React.Component{
  componentDidMount(){
    window.gapi.load('client:auth2', ()=>{
      window.gapi.client.init({
        clientId:619683487030-a0pkv6q5e0ddbjm6s7r8st9hcrp4de1n.apps.googleusercontent.com,
        scope:'email'
      });
    });
  };

  render(){
    return <div>Goog</div>
  }
}

export default GoogleAuth;
