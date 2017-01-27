import React, { PropTypes, Component } from 'react'

// const Link = ({ active, children, onClick }) => {
//   if (active) {
//     return <span>{children}</span>
//   }
//
//   return (
//     <a href="#"
//       onClick={e => {
//         e.preventDefault()
//         onClick()
//       }}
//       >
//       {children}
//     </a>
//   )
// }
//
// Link.propTypes = {
//   active: PropTypes.bool.isRequired,
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func.isRequired
// }
//
// export default Link;

export default class Link extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { filter, children } = this.props;

    return (
      <a href="#">
        {children}
      </a>
    )
  }
}
