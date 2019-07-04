import React from 'react'
import { Col, Card, Button } from 'react-bootstrap';

const ProductCard = ({isPublished, price, productImage, productName, index, onClickHandler})=> {
    return (
        <Col xs md className="mt-3" style={{display: isPublished === 'true' ? 'inline': 'none'}} data-test="productcard">
            <Card style={{ width: '12rem' }} className="mt-3 card shadow mb-4">
            <Card.Header className="align-items-center">{productName}</Card.Header>
            <Card.Img variant="top" src={productImage} className="product-img"/>
            <Card.Body>
                <Card.Title>{`$${price}`}</Card.Title>
                
                <Button 
                    variant="primary"
                    className="btn-add-cart"
                    onClick={()=>onClickHandler({productName, index})}>
                    Add to cart
                </Button>
            </Card.Body>
            </Card>
        </Col>
    )
}
export default ProductCard;