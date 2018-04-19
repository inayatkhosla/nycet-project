import React, {Component} from 'react';
import { connect } from 'react-redux';
import Competitiveness from './components/Competitiveness'
import {loadMapData} from './actions/index'
import './App.css';

//can add more complexity here in the children eventually
class AppContainer extends Component {
  componentWillMount() {
    let parentDistType = (typeof(this.props.match.params.parentDistType) === 'undefined') ? 'AD' : this.props.match.params.parentDistType 
    let parentDistId = (typeof(this.props.match.params.parentDistId) === 'undefined') ? 0 : this.props.match.params.parentDistId
    this.props.loadMap({parentDistType, parentDistId})
  }

  render() {
  return (
    <div className='App'>
      <Competitiveness mapComponents={this.props.mapData}
                       districtType={this.props.districtType} />
    </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  mapData: state.mapData,
  districtType: state.districtType
})

const App = connect(mapStateToProps, { loadMap: loadMapData })(AppContainer)

export default App
