import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '../../../store';
import MainSection from './MainSection';
import Header from './Header';
import { Container, Row, Col } from "react-bootstrap";
import * as TodoActions from '../todoSlice';

export function App(props) {

  const { todos, actions, children } = props;

  return (
    <Container fluid>
      <Row className="mt-5 justify-content-md-center" >
        <Col className="col-md-4">
          <Header addTodo={actions.addTodo} />
          <MainSection todos={todos} actions={actions} />
          {children}
        </Col>
      </Row>
    </Container>
  );
}

function mapStateToProps(state: RootState) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions as any, dispatch)
  };
}

export default (connect(mapStateToProps, mapDispatchToProps) as any)(App)