import * as React from 'react';
import { VisibilityFilters } from '../filterSlice';
import { Row, Nav, ListGroup } from "react-bootstrap";


export default function FooterComponent(props) {

    const FILTER_TITLES = {
        [VisibilityFilters.SHOW_ALL]: 'All',
        [VisibilityFilters.SHOW_ACTIVE]: 'Active',
        [VisibilityFilters.SHOW_COMPLETED]: 'Completed'
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

    function renderFilterLink(filter: string) {
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
                    <ListGroup.Item key={VisibilityFilters.SHOW_ALL}>
                        {renderFilterLink(VisibilityFilters.SHOW_ALL)}
                    </ListGroup.Item>
                    <ListGroup.Item key={VisibilityFilters.SHOW_ACTIVE}>
                        {renderFilterLink(VisibilityFilters.SHOW_ACTIVE)}
                    </ListGroup.Item>
                    <ListGroup.Item key={VisibilityFilters.SHOW_COMPLETED}>
                        {renderFilterLink(VisibilityFilters.SHOW_COMPLETED)}
                    </ListGroup.Item>
            </ListGroup>
            {renderClearButton()}
        </Row>
    );
}

