import React, { useState } from "react";
import { Form, Button, FormControl, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate(`/`);
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Row>
        <Col xs="auto">
          <FormControl
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search products..."
            className="p-2 mr-2"
          ></FormControl>
        </Col>
        <Col xs="auto">
          <Button type="submit" variant="outline-success" className="p-2">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
