
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withInfoService } from '../../components/hoc';

class NavigationListContainer extends Component {
  componentDidMount() {
    const { infoListService, loadingNavigation } = this.props;
    infoListService.getNavigation()
      .then((data) => {
        loadingNavigation(data)
      });
  };

  render() {
    const { navigation } = this.props;
    return (
      <>
        {
          navigation.map((section) => {
            const { name, listLink } = section;
            return (
              <div key={section.name} className="col-12 col-sm-6 col-lg-2">
                <div className="footer-widget-area mt-80">
                  {/* Title */}
                  <h4 className="widget-title">{name}</h4>
                  {/* List */}
                  <ul className="list">
                    {
                      listLink.map((item) => {
                        const { name, link } = item;
                        return (
                          <li key={name}><Link to={link}>{name}</Link></li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            )
          })
        }
      </>
    )
  }
};

const mapStateToProps = ({ navigation }) => {
  return {
    navigation
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadingNavigation: (navigation) => {
      dispatch({
        type: 'LOADING_NAVIGATION',
        payload: navigation
      })
    }
  };
};

export default compose(
  withInfoService(),
  connect(mapStateToProps, mapDispatchToProps)
)(NavigationListContainer);