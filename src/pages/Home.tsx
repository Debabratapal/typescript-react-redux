import React from 'react';
import { connect } from 'react-redux';

const Home = () => {
  return (
    <div>
      over view
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return state;
}

export default connect(mapStateToProps, null)(Home);