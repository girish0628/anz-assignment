import React, { Component } from 'react'
import { connect } from 'react-redux';
import  { fetchProductList} from '../actions';
import { Container, Row, Col} from 'react-bootstrap';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import ShoppingCart from '../components/ShoppingCart';


class ShoppingSite extends Component {
  constructor(props){
    super(props);

    this.state ={
      product_info: [], // All product List
      product_name: [] // Product Name which is  selected by user ( Added to cart)
    }
  }

    //Handler function to add the selected product to cart
    onAddToCart = ({...product_name})=>{
      const {product_info} = this.state;
            product_info[product_name.index].isPublished = "false";

            this.setState(prevState => ({
                product_info,
                product_name: [...prevState.product_name, {...product_name}]
            }));
    }
//Handle function to remove the selected product from cart
    onRemoveCart = ({...product_list}) =>{
      const { product_info, product_name} = this.state;
              product_info[product_list.index].isPublished = "true";

      let filtered_product_name =  product_name.filter((value, index, arr)=>{
        return value.productName !== product_list.productName;
      })
    this.setState({ product_info, product_name: [...filtered_product_name]});
    }

    componentWillReceiveProps(nextProps){
      //Get the product list from JSON file
      if(nextProps.productList.product_info.length){
        const {product_info} = nextProps.productList;
              this.setState({product_info});
      }
    }

  componentDidMount(){
    //Call the function define in action creator to fetch the list of product info in JSON.
    this.props.fetchProductList();
  }


  render() {
    const { product_info, product_name} = this.state;
    //Add dynamically product list based on status of published (true/false).
    const productList = product_info.map((product, index)=>{
      return <ProductCard {...product} index={index} key={index} onClickHandler={this.onAddToCart}/>
    });
    //Add the product to cart as per user selected product
    const productCart = product_name.map((name, index)=>{
      return <ShoppingCart {...name} key={index} onClickHandler={this.onRemoveCart}/>
    });
    return (
      <div data-test="shoppingsite">
          <Header/>
          
          <Container fluid>
            <Row>
              <Col>
                <Row>
                  {product_info.length !== 0 && productList}
                </Row>
              </Col>
              <Col>
                {product_name.length !== 0 && productCart}
              </Col>
            </Row>
          </Container>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
      productList: state.productList
  }
};

const mapDispatchToProps = {
 fetchProductList
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingSite);
