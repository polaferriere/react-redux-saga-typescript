import * as React from 'react';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, FILTER_TYPES } from '../constants/filters';
import { Row, Nav, ListGroup } from "react-bootstrap";


export default function FooterComponent(props) {

    const FILTER_TITLES = {
        [SHOW_ALL]: 'All',
        [SHOW_ACTIVE]: 'Active',
        [SHOW_COMPLETED]: 'Completed'
    };

    function renderTodoCount() {
        const { activeCount } = props;
        const itemWord = activeCount === 1 ? 'item' : 'items';

        return (
            <span>
                <strong>{activeCount || 'No'}</strong> {itemWord} left
          </span>
        );
    }

    function renderFilterLink(filter: TodoFilterType) {
        const { filter: selectedFilter, onShow } = props;

        return (
            <Nav.Link
                style={{ cursor: 'pointer' }}
                onClick={() => onShow(filter)}>
                {FILTER_TITLES[filter]}
            </Nav.Link>
        );
    }

    function renderClearButton() {
        const { completedCount, onClearCompleted } = props;
        if (completedCount > 0) {
            return (
                <button onClick={onClearCompleted} >
                    Clear completed
            </button>
            );
        }
    }

    return (
        <Row>
            {renderTodoCount()}
            <ListGroup horizontal>
                {FILTER_TYPES.map((filter) =>
                    <ListGroup.Item key={filter}>
                        {renderFilterLink(filter)}
                    </ListGroup.Item>
                )}
            </ListGroup>
            {renderClearButton()}
        </Row>
    );
}

