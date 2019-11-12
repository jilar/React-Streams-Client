import React from 'react';
import Modal from '../Modal';
import {connect} from 'react-redux';
import {deleteStream,fetchStream} from '../../actions';
import history from '../../history';

class StreamDelete extends React.Component{
  componentDidMount(){
      this.props.fetchStream(this.props.match.params.id);
  };

  onSubmit=()=>{
    this.props.deleteStream(this.props.stream.id);
  }

  actions(){
    return(
      <React.Fragment>
        <button className= 'ui button primary negative' onClick={()=>this.onSubmit()}>Delete</button>
        <button className='ui button'onClick={()=>history.push('/')} >Cancel</button>
      </React.Fragment>
    )
  }

  renderContent(){
    if(!this.props.stream){
      return 'Are you sure you want to delete this stream?'
    }
      return `Are you sure you want to delete the stream: ${this.props.stream.title}?`
  }

  render(){
    return (
        <Modal
          title= 'Delete Stream'
          content={this.renderContent()}
          actions= {this.actions()}
          onDismiss={()=>history.push('/')}
        />
  )};
}

const mapStateToProps=(state, ownProps)=>{
  return {
    stream: state.streams[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps,{deleteStream,fetchStream})(StreamDelete);
