import React, { useState } from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Form,
  Radio,
  Checkbox,
  Segment,
  Grid,
} from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addItem } from "../actions/cart";

function CustomizePopup({ item, addItem }) {
  const {
    id,
    description,
    img_url,
    name,
    price,
    rating,
    isVeg,
    size,
    toppings,
  } = item;
  const [open, setOpen] = useState(false);
  const [siz, setSiz] = useState("Regular");
  const [checkedTopping, setCheckedTopping] = useState(
    new Array(toppings[0].items.length).fill(false)
  );

  const updateTopping = (position) => {
    const updatedTopping = checkedTopping.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedTopping(updatedTopping);
  };

  const handleSubmit = () => {
    addItem({ item, siz, checkedTopping });
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button floated="right" primary>
          <i class="shop icon"></i> Add to Cart
        </Button>
      }
    >
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={img_url} wrapped />
        <Modal.Description>
          <Header>Size</Header>

          <Form.Field>
            Selected value: <b>{siz}</b>
          </Form.Field>
          {size[0].items.map((s, index) => (
            <Form.Field key={index}>
              <Radio
                label={s.size}
                name="radioGroup"
                value={s.size}
                checked={siz === s.size}
                onChange={() => setSiz(s.size)}
              />
            </Form.Field>
          ))}

          <Header style={{ marginBottom: "2em" }}>Toppings</Header>
          <Grid columns={3}>
            {toppings[0].items.map(({ name }, index) => (
              <Checkbox
                label={<label>{name}</label>}
                key={index}
                checked={checkedTopping[index]}
                onChange={() => updateTopping(index)}
              />
            ))}
          </Grid>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Add"
          labelPosition="right"
          icon="checkmark"
          onClick={handleSubmit}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

CustomizePopup.prototype = {
  item: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired,
};

export default connect(null, { addItem })(CustomizePopup);
