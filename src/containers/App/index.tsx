import * as React from 'react';
import * as TodoActions from '../../actions/todos';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import MainSection from '../../components/MainSection';
import Header from '../../components/Header';
import { Container, Row, Col } from "react-bootstrap";

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    todos: TodoItemData[];
    actions: typeof TodoActions;
  }

  export interface State {
    /* empty */
  }
}

// https://stackoverflow.com/questions/46861839/typescript-connect-react-redux-decorator-with-stateful-component/46934139
@(connect(mapStateToProps, mapDispatchToProps) as any)
export class App extends React.Component<App.Props, App.State> {

  render() {
    const { todos, actions, children } = this.props;
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
