import { Component } from 'react';
import cl from './MyCard.module.css';
import { CardProps, CardState } from '../../types';
import getCard from './identifyCardCategory';

class MyCard extends Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.setState({
      data: getCard(this.props.data),
    });
  }

  renderCard() {
    const cardData = this.state.data;
    if (cardData !== null) {
      return Object.entries(cardData).map((card, i) => {
        return (
          <div className={cl.cardRow} key={i}>
            <span className={cl.cardRowName}>{card[0].split('_').join(' ')}</span>
            <span className={cl.cardRowValue}>{card[1]}</span>
          </div>
        );
      });
    }
    return <div className={cl.cardRow}> Data is empty </div>;
  }
  render() {
    return <div className={cl.card}>{this.renderCard()}</div>;
  }
}

export default MyCard;
