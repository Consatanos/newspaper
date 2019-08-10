import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withInfoService } from '../../components/hoc';
import { Fact } from '../../components/fact';

class FactContainer extends Component {
  componentDidMount() {
    const { infoListService, loadingFacts } = this.props;
    infoListService.getInfo('facts')
      .then((data) => {
        loadingFacts(data)
      });
  };

  render() {
    const { facts } = this.props;
    return (
      <div className="row align-items-center mt-80">
        {
          facts.map((fact) => {
            const { id, counter, title, text } = fact;
            return (
              <Fact
                key={id}
                counter={counter}
                title={title}
                text={text} />
            )
          })
        }
      </div>
    )
  };
};

const mapStateToProps = ({ facts }) => {
  return {
    facts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadingFacts: (facts) => {
      dispatch({
        type: 'LOADING_FACTS',
        payload: facts
      })
    }
  };
};

export default compose(
  withInfoService(),
  connect(mapStateToProps, mapDispatchToProps)
)(FactContainer);