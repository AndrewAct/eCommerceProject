import React from 'react'
//import { Row } from 'react-bootstrap'
import { Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

const HomeScreen = () => {
    return (
        <>
          <h1>Latest Products</h1>  
          <Row>
              {products.map(product => (
                  <Col sm = {12} md = {6} lg = {4} lg = {3}>
                      <Product product = {product} />
                  <h3>{product.name}</h3>
                  </Col>
              ))}
          </Row>
        </>
    )
}

export default HomeScreen
