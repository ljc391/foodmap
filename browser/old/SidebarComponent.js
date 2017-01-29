'use strict';

import { connect } from 'react-redux';
import Sidebar from './Sidebar';

const mapStateToProps = ({ selectedAlbum }) => ({
  selectedAlbum
});

export default connect(
  mapStateToProps
)(Sidebar);