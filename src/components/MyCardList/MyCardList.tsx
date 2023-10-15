import { Component } from 'react';
import cl from './MyCardList.module.css';
import { CardListProps } from '../../types';
import MyCard from '../MyCard/MyCard';
class MyCardList extends Component<CardListProps> {
  constructor(props: CardListProps) {
    super(props);
  }
  static defaultProps = {
    cards: [],
  };
  render() {
    return (
      <div className={cl.cardList}>
        {this.props.cards.map((card, i) => (
          <MyCard key={i} data={card} />
        ))}
      </div>
    );
  }
}
export default MyCardList;
