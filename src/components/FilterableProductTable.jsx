import React from 'react';
import SearchBar from './SearchBar'


const PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function ProductRow ({product}) {
  const name = product.stocked? product.name : <span className="text-warning">{product.name}</span>
  return <tr>
    <td>{name}</td>
    <td>{product.price}</td>
  </tr>
}

function ProductCategoryRow ({category}) {
  return <tr>
    <th colSpan="2">{category}</th>
  </tr>
}

function ProductTable (inStockOnly, filterText) {
  const rows = []
  let lastCategory = null
  PRODUCTS.forEach(product => {
    if (
    (inStockOnly && !product.stocked) 
    || product.name.indexOf(filterText) === -1
    ){
    }

    if (product.category !== lastCategory) {
      lastCategory = product.category
      rows.push(<ProductCategoryRow key={lastCategory} category={product.category}/>)
    }
    rows.push(<ProductRow key={product.name} product={product}/>)
  })
  return <table className="table">
    <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
    </thead>
    <tbody>{rows}</tbody>

  </table>
}

class FilterableProductTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filterText: '',
      inStockOnly: false
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleInStockChange = this.handleInStockChange.bind(this)
  }

  handleFilterTextChange (filterText) {
    this.setState({filterText})
  }

  handleInStockChange (inStockOnly) {
    this.setState({inStockOnly})
  }

  render () {
    const {products} = this.props
    return <>
      <SearchBar
        filterText={this.state.filterText}
        inStockOnly={this.state.filterText}
        onFilterTextChange={this.handleFilterTextChange}
        onStockChange={this.handleInStockChange}
      />
    <ProductTable 
      products={products}
      filterText={this.state.filterText}
      inStockOnly={this.state.inStockOnly}
    />
    </>
  }
}

export default FilterableProductTable