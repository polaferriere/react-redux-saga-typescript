import * as React from 'react';
import * as classNames from 'classnames';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, FILTER_TYPES } from '../../constants/filters';

export const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

export namespace Footer {
  export interface Props {
    filter: TodoFilterType;
    activeCount: number;
    completedCount: number;
    onShow: (filter: TodoFilterType) => any;
    onClearCompleted: () => any;
  }

  export interface State {
    /* empty */
  }
}

export class Footer extends React.Component<Footer.Props, Footer.State> {

  renderTodoCount() {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <span>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    );
  }

  renderFilterLink(filter: TodoFilterType) {
    const { filter: selectedFilter, onShow } = this.props;

    return (
      <a
        style={{ cursor: 'pointer' }}
        onClick={() => onShow(filter)}>
        {FILTER_TITLES[filter]}
      </a>
    );
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props;
    if (completedCount > 0) {
      return (
        <button onClick={onClearCompleted} >
          Clear completed
        </button>
      );
    }
  }

  render() {
    return (
      <footer>
        {this.renderTodoCount()}
        <ul>
          {FILTER_TYPES.map((filter) =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }
}
