import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withInfoService } from '../../components/hoc';
import { Author } from '../../components/author';

class AuthorContainer extends Component {
  componentDidMount() {
    const { infoListService, loadingAuthors } = this.props;
    infoListService.getInfo('authors')
      .then((data) => {
        loadingAuthors(data)
      });
  };

  render() {
    const { authors } = this.props;
    console.log(authors);
    return (
      <section className="newspaper-team mb-30">
        <div className="container">
          <div className="row">
            {
              authors.map((author) => {
                const { id, name, position, imageUrl } = author;
                return (
                  <Author
                    key={id}
                    name={name}
                    position={position}
                    imageUrl={imageUrl} />
                )
              })
            }
          </div>
        </div>
      </section>
    )
  };
};

const mapStateToProps = ({ authors }) => {
  return {
    authors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadingAuthors: (authors) => {
      dispatch({
        type: 'LOADING_AUTHORS',
        payload: authors
      })
    }
  };
};

export default compose(
  withInfoService(),
  connect(mapStateToProps, mapDispatchToProps)
)(AuthorContainer);