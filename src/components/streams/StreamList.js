import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions';
import {Link} from 'react-router-dom';

class StreamList extends React.Component{
  componentDidMount(){
    this.props.fetchStreams();
  }

  renderAdmin(stream){
    if(this.props.userId === stream.userId)
    return(
      <div className='right floated content'>
        <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>
          Edit
        </Link>
        <Link to={`/streams/delete/${stream.id}`} className ='ui button negative' >
          Delete
        </Link>
      </div>
    )
  }

  renderCreate(){
    if (this.props.isSignedIn){
    return(
      <div style ={{textAlign:'right'}}>
        <Link to='/streams/new' className='ui button primary'>Create Stream</Link>
      </div>
    )};
  }

  renderList(){
    return this.props.streams.map(stream=>{
      return(
        <div className= "item" key= {stream.id}>
          {this.renderAdmin(stream)}
          <i className='large middle aligned icon camera'/>
          <div className='content'>
            <Link to= {`/streams/${stream.id}`} className='header'>
            {stream.title}
            </Link>
            <div className='description'>{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render(){
    return (
      <div>
        <h2>Streams</h2>
        <div className='ui celled list'>
          {this.renderList()}
        </div>
        {this.renderCreate()}
      </div>
  )};
};

const mapStateToProps=(state)=>{
  //Object.values takes an object and places all values inside object into array
  return {
    streams: Object.values(state.streams),
    userId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps,{fetchStreams})(StreamList);
