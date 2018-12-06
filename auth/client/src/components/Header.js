import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { Button, Container, Row, Col } from "reactstrap";

const Block = styled.header`
  padding: 10px 0;
  background-color: #37474f;
  margin-bottom: 25px;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BtnsWrap = styled.div`
  .btn {
    margin-left: 10px;
  }
`;

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <BtnsWrap>
          <Button color="danger" tag="div">
            <Link to="/signout">Sign Out</Link>
          </Button>
          <Button color="info" tag="div">
            <Link to="/feature">Feature</Link>
          </Button>
        </BtnsWrap>
      );
    } else {
      return (
        <BtnsWrap>
          <Button color="info" tag="div">
            <Link to="/signup">Sign Up</Link>
          </Button>
          <Button color="info" tag="div">
            <Link to="/signin">Sign In</Link>
          </Button>
        </BtnsWrap>
      );
    }
  }
  render() {
    return (
      <Block>
        <Container>
          <Row>
            <Col>
              <Inner>
                <Button color="danger" tag="div">
                  <Link to="/">Home</Link>
                </Button>
                {this.renderLinks()}
              </Inner>
            </Col>
          </Row>
        </Container>
      </Block>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
