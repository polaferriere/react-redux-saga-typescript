import * as React from 'react';
import { VisibilityFilters, setVisibilityFilter } from '../filterSlice';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const mapDispatch = {setVisibilityFilter};

const FooterComponent = ({setVisibilityFilter, activeCount, completedCount, onClearCompleted}) => {

    const FILTER_TITLES = {
        [VisibilityFilters.SHOW_ALL]: 'All',
        [VisibilityFilters.SHOW_ACTIVE]: 'Active',
        [VisibilityFilters.SHOW_COMPLETED]: 'Completed'
    };

    function renderTodoCount() {
        const itemWord = activeCount === 1 ? 'item' : 'items';
        return (
            <span>
                <strong>{activeCount || 'No'}</strong> {itemWord} left
          </span>
        );
    }

    function renderFilterLink(filter: string) {
        return (
            <Button onClick={() => setVisibilityFilter(filter)}>
                {FILTER_TITLES[filter]}
            </Button>
        );
    }

    function renderClearButton() {
        if (completedCount > 0) {
            return (
                <Button onClick={onClearCompleted} >
                    Clear completed
            </Button>
            );
        }
    }

    return (
        <Box>
            {renderTodoCount()}
            <Grid container spacing={3}>
                    <Grid item key={VisibilityFilters.SHOW_ALL}>
                        {renderFilterLink(VisibilityFilters.SHOW_ALL)}
                    </Grid>
                    <Grid item key={VisibilityFilters.SHOW_ACTIVE}>
                        {renderFilterLink(VisibilityFilters.SHOW_ACTIVE)}
                    </Grid>
                    <Grid item key={VisibilityFilters.SHOW_COMPLETED}>
                        {renderFilterLink(VisibilityFilters.SHOW_COMPLETED)}
                    </Grid>
            </Grid>
            {renderClearButton()}
        </Box>
    );
}

export default connect(null, mapDispatch)(FooterComponent)

