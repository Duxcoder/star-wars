import { Component } from 'react';
import cl from './MyCardList.module.css';
import { CardListProps } from '../../types';
import MyCard from '../MyCard/MyCard';
import { RiFileExcelLine } from 'react-icons/ri';

class MyCardList extends Component<CardListProps> {
  constructor(props: CardListProps) {
    super(props);
  }
  static defaultProps = {
    cards: [],
  };

  renderCards() {
    return this.props.cards.map((card, i) => <MyCard key={i} data={card} />);
  }

  renderNotFound() {
    return (
      <span className={cl.noResult}>
        <RiFileExcelLine />
        {'No results found...'}
      </span>
    );
  }
  render() {
    return (
      <div className={cl.cardList}>
        {this.props.cards.length ? this.renderCards() : this.renderNotFound()}
      </div>
    );
  }
}
export default MyCardList;
