import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Dropdown,
  Segment,
  Header,
  Radio,
  Button,
} from "semantic-ui-react";
import { connect } from "react-redux";
import { loadItems, sortRating, sortPrice, vegOnly } from "../actions/menu";
import PizzaCard from "./PizzaCard";

const CardGrid = ({
  menu: { items },
  loadItems,
  sortRating,
  sortPrice,
  vegOnly,
}) => {
  useEffect(() => {
    loadItems();
  }, []);

  return items !== null ? (
    <Segment>
      <Segment>
        <Dropdown
          text="Sort/Filter"
          icon="filter"
          floating
          floated="right"
          labeled
          button
          className="icon"
        >
          <Dropdown.Menu>
            <Dropdown.Header icon="tags" content="Sort/FIlter" />
            <Dropdown.Item onClick={sortRating}>Rating</Dropdown.Item>
            <Dropdown.Item onClick={sortPrice}>Price</Dropdown.Item>
            <Dropdown.Item onClick={vegOnly}>Veg-Only</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>{" "}
      </Segment>

      <Grid doubling stackable columns={3}>
        {items.map((item) => (
          <PizzaCard item={item} key={item.id} />
        ))}
      </Grid>
    </Segment>
  ) : (
    <Header>Loading</Header>
  );
};

CardGrid.propTypes = {
  menu: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  menu: state.menu,
});

export default connect(mapStateToProps, {
  loadItems,
  sortRating,
  sortPrice,
  vegOnly,
})(CardGrid);
