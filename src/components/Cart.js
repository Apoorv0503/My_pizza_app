import React from "react";
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Segment,
} from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { increaseItem, decreaseItem } from "../actions/cart";

const getToppings = (item) => {
  const {
    item: { toppings },
    checkedTopping,
  } = item;

  const [tops] = toppings;
  console.log(tops);
  let tps = [];

  tops.items.map((t, index) => {
    if (checkedTopping[index]) tps.push(t);
  });

  return tps;
};

const Cart = ({ cart, increaseItem, decreaseItem }) => {
  const { items } = cart;
  let price = 0;

  return (
    <Container>
      <Item.Group divided>
        {items.length !== 0
          ? items.map(({ item, quantity, siz, checkedTopping }, index) => {
              const tops = getToppings({ item, checkedTopping });
              price += quantity * item.price;
              console.log(tops);
              return (
                <Item>
                  <Item.Image src={item.img_url} />

                  <Item.Content>
                    <Item.Header>{item.name} </Item.Header>
                    <Item.Meta>
                      <span className="cinema">{siz}</span>
                      <Header as="h4">
                        <Icon name="rupee" />
                        {quantity * item.price}
                      </Header>
                    </Item.Meta>

                    <Item.Extra>
                      {tops.map((topping) => (
                        <Label>{topping.name}</Label>
                      ))}

                      <Button
                        primary
                        floated="right"
                        icon
                        onClick={() => increaseItem(index)}
                      >
                        <Icon name="plus" />
                      </Button>
                      <Segment vertical floated="right">
                        <Header>{quantity}</Header>
                      </Segment>
                      <Button
                        primary
                        floated="right"
                        icon
                        onClick={() => decreaseItem(index)}
                      >
                        <Icon name="minus" />
                      </Button>
                    </Item.Extra>
                  </Item.Content>
                </Item>
              );
            })
          : "NO ITEMS"}
        {items.length !== 0 ? (
          <Header as="h2" textAlign="right">
            Total: <Icon name="rupee" size="tiny" fitted /> {price}
          </Header>
        ) : null}
      </Item.Group>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  increaseItem: PropTypes.func.isRequired,
  decreaseItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { increaseItem, decreaseItem })(Cart);
