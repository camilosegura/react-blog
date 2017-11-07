
import React from 'react';
import { connect } from 'react-redux';
import { testAction } from '../actions';

const Default = (props) => (
  <div className="default">  
    Default Componet
    <button onClick={() => props.dispatch(testAction('New Test'))}>Click Me</button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    test: state.test
  }
}

const mapDispatchToPtops = ({

});

export default connect(mapStateToProps)(Default);
