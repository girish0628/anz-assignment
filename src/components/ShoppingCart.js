import React from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap';

const ShoppingCart = ({productName, index, onClickHandler})=> {
    return (      
            <Card style={{ width: '18rem' }} className="mt-3" data-test="shoppingcart">
                <ListGroup variant="flush">
                    <ListGroup.Item>
                    <span>{productName}</span>
                    <Button 
                        variant="primary"
                        className="btn-remove-cart"
                        onClick={(evt)=>onClickHandler({productName, index})}>
                        Remove
                    </Button>
                    </ListGroup.Item>
                   
                </ListGroup>
            </Card>
    
    )
}
export default ShoppingCart;