import React from "react";
import {
  Grid,
  Image,
  Segment,
  Item,
  Button,
  Label,
  Rating,
  Icon,
} from "semantic-ui-react";
import PropTypes from "prop-types";
import CustomizePopup from "./Modal";

const PizzaCard = ({ item }) => {
  const { id, description, img_url, name, price, rating, isVeg } = item;

  return (
    <Grid.Column key={id}>
      <Segment>
        <Item.Group divided>
          <Item>
            <Item.Image src={img_url} rounded size="small" wrapped />

            <Item.Content verticalAlign="middle">
              <Item.Header>
                {name} <Icon color={isVeg ? "green" : "red"} name="circle" />
              </Item.Header>
              <Item.Description>{description}</Item.Description>
            </Item.Content>
            {/* <Item.Extra></Item.Extra> */}
          </Item>
        </Item.Group>
        <Label basic>
          {rating} <Icon color="yellow" name="star" />
        </Label>
        <Label as="a" tag>
          <Icon name="rupee" />
          {price}
        </Label>
        <CustomizePopup item={item} />
      </Segment>
    </Grid.Column>
  );
};

// PizzaCard.propTypes = {}

export default PizzaCard;
