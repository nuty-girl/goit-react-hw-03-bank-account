import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ),
  };

  static defaultProps = {
    items: [],
  };

  state = { indexPublication: 0 };

  handleNextPublication = () => {
    this.setState(prevState => ({
      indexPublication: prevState.indexPublication + 1,
    }));
  };

  handlePrevPublication = event => {
    event.preventDefault();
    this.setState(prevState => ({
      indexPublication: prevState.indexPublication - 1,
    }));
  };

  render() {
    const { indexPublication } = this.state;
    const { items } = this.props;
    const publicationQuantity = items.reduce(
      (acc, item) => 1 + items.indexOf(item),
      0,
    );
    const item = items[indexPublication];

    return (
      <div className={styles.reader}>
        <Controls
          onDecrement={this.handlePrevPublication}
          onIncrement={this.handleNextPublication}
          indexPublication={indexPublication + 1}
          publicationQuantity={publicationQuantity}
        />
        <Counter
          indexPublication={indexPublication + 1}
          publicationQuantity={publicationQuantity}
        />
        <Publication
          publication={item}
          indexPublication={indexPublication + 1}
        />
      </div>
    );
  }
}
