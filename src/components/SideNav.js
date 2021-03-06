import React from 'react';
import {Link} from 'react-router-dom';

// Fontawesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';

// Components
import ChannelNavLink from './ChannelNavLink';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {collapsed: false}
  }

  render () {
    const channelLinks = [{name: "all"}].map(
      channel => <ChannelNavLink key={channel.name} channel={channel} />
    )
    return (
      <div>
        <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
          <li className="nav-item" data-toggle="tooltip" data-placement="right">
            <Link className="nav-link heading" to="/createChannel">
              <span className="nav-link-text">Channels</span>
              <FontAwesomeIcon icon={faPlusCircle} className="ml-2"/>
            </Link>
          </li>
          {channelLinks}
        </ul>
        <ul className="navbar-nav sidenav-toggler">
          <li className="nav-item">
            <a className="nav-link text-center" id="sidenavToggler"
              onClick={() => this.setState(prevState => {
                return {collapsed: !prevState.collapsed}
              })}>
              <FontAwesomeIcon icon={this.state.collapsed ? faAngleRight : faAngleLeft} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideNav;
