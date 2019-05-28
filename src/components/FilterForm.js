import React, { Fragment, Component } from 'react';


class FilterForm extends Component {


  render(){

    return (
      <div className="FilterHolder" >
        <p>Instructor's Name: <input type="text" value={this.props.term} onChange={this.props.handleSearch} placeholder="Find by Name"/></p>
      </div>
    );
  }
}
export default FilterForm;
