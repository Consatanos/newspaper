import React from 'react';
import { Link } from 'react-router-dom';

const PagerPage = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination mt-50">
        <li className="page-item active"><Link to="/" className="page-link">1</Link></li>
        <li className="page-item"><Link to="/" className="page-link">2</Link></li>
        <li className="page-item"><Link to="/" className="page-link">3</Link></li>
        <li className="page-item"><Link to="/" className="page-link">4</Link></li>
        <li className="page-item"><Link to="/" className="page-link">5</Link></li>
        <li className="page-item"><Link to="/" className="page-link">...</Link></li>
        <li className="page-item"><Link to="/" className="page-link">10</Link></li>
      </ul>
    </nav>
  )
};

export default PagerPage;