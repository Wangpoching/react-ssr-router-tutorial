import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="other">Other page</Link>
    </li>
  </ul>
);

export default Header