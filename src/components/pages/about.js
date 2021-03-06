import React from 'react';
import { FactContainer } from '../../containers/fact-container';
import { AuthorContainer } from '../../containers/author-container';

const About = () => {
  return (
    <>
      <section className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>A young and professional team</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lec tus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, purus imperdiet volutpat tincidunt, eros sem mollis quam, ut placerat urna neque at massa. Proin vitae pulvinar justo. Donec vel placerat enim, at ultricies risus.</p>
            </div>
            <div className="col-12 col-lg-6">
              <p>Donec gravida non metus blandit facilisis. Cras tincidunt, lorem aliquam molestie eleifend, libero dui volutpat dui, nec sodales massa libero ut metus. Mauris pretium elit ut dapibus consequat. Nam ut lorem nec sem dignissim gravida. Duis fringilla.</p>
              <p>Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellentesque lectus et accumsan aliquam. Fusce lobortis cursus quam, id mattis sapien. Aliquam erat volutpat. Aliquam placerat, est quis sagittis tincidunt, ipsum eros posuere mi, ut finibus quam sem eget ex.</p>
            </div>
          </div>
          <FactContainer />
        </div>
      </section>
      <AuthorContainer />
    </>
  )
};

export default About;