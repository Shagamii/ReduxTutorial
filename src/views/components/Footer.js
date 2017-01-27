import React, { Component } from 'react';
import Link from '../components/Link';

export default class Footer extends Component {
  render() {
    return(
      <p>
        Show:
        {" "}
        <Link filter="SHOW_ALL">
          All
        </Link>
        {", "}
        <Link filter="SHOW_ACTIVE">
          Active
        </Link>
        {", "}
        <Link filter="SHOW_COMPLETED">
          Completed
        </Link>
      </p>
    )
  }
}
