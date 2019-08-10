import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withInfoService } from '../../components/hoc';

const TestItem = ({ test }) => {
  const { id, title } = test;
  return (
    <>
      <span>{id}</span>
      <span>{title}</span>
    </>
  )
};

class TestList extends Component {
  componentDidMount() {
    const { infoListService, testActions } = this.props;
    infoListService.getTests()
      .then((data) => {
        testActions(data)
      });
  };

  render() {
    const { tests } = this.props;
    return (
      <>
        {
          tests.map((test) => {
            return (
              <div key={test.id}>
                <TestItem
                  test={test} />
              </div>
            )
          })
        }
      </>
    );
  };
};

const mapStateToProps = ({ tests }) => {
  return {
    tests
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    testActions: (testsList) => {
      dispatch({
        type: 'TEST_ACTIONS',
        payload: testsList
      })
    }
  };
};

export default compose(
  withInfoService(),
  connect(mapStateToProps, mapDispatchToProps)
)(TestList);