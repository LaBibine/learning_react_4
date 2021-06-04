import React from 'react';

class SearchBar extends React.Component {

  constructor (props) {
    super(props)
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleInStockChange = this.handleInStockChange.bind(this)
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value)
  }

  handleInStockChange(e) {
    this.props.onStockChange(e.target.checked)
  }

  render () {
    const {filterText, inStockOnly} = this.props
    return <>
      <div className="form-group">
        <input type="text" className="form-control" value={filterText} placeholder="Rechercher" onChange={this.handleFilterTextChange}/>
      </div>
      <div className="form-check">
        <label htmlFor="checkbox" className="form-check-label">Produit en stock seulement</label>
        <input type="checkbox"  checked={inStockOnly} className="form-check-input" id="stock" onChange={this.handleInStockChange}/>
      </div>
    </>
  }
}

export default SearchBar;