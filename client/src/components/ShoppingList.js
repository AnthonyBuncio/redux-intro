import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//REDUX STATE COMPONENTS
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

//`item` key comes from rootReducer
//KEYS FROM BOTH OBJECTS HAVE TO MATCH
//`state.item` value comes from itemReducer of matching action type
//VALUE HAS TO MATCH AFTER `state.item.` + name of payload val
const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);