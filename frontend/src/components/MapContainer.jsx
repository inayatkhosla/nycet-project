import React, {Component} from 'react'
import { setMapDimensions } from '../actions/index'
import { connect } from 'react-redux';

class MapContainerComponent extends Component{
  constructor(props){
    super(props)
    this.getDimensions = this.getDimensions.bind(this)
  }
  componentShouldMount(){
    let shouldResize = this.node.clientWidth !== this.props.width ||
                       this.node.clientHeight !== this.props.height

    return shouldResize
    
  }
  //this is busted; when you get a chance, figure out a way to be responsive here
  getDimensions(){
    let shouldResize = this.node.clientWidth !== this.props.width
    if (shouldResize) {
      this.props.resize(this.node.clientWidth, this.node.clientHeight)
    }
  }

  componentDidMount(){
    this.getDimensions()
    window.addEventListener('resize', this.getDimensions)
  }

  render() {
    return (
      <div ref={node => this.node = node} className='map-container'>
        <div className='container-header'>Race Margins</div>
          {this.props.children}
      </div>
    )
   }
}

const mapDispatchToProps = (dispatch, ownProps) => (
  {resize: (width, height) => dispatch(setMapDimensions(width, height))}
)

const mapStateToProps = (state) => (
  {width: state.mapDimensions[0],
   height: state.mapDimensions[1]}
)

const MapContainer = connect(mapStateToProps, mapDispatchToProps)(MapContainerComponent)

export default MapContainer;

