import { Component } from 'react';
import cl from './MyContent.module.css';
import { ContentProps, ContentState } from '../../types';
import ApiService from '../API/ApiService';
import MyCardList from '../MyCardList/MyCardList';
import Sword from '../Spinners/Sword';
class MyContent extends Component<ContentProps, ContentState> {
  constructor(props: ContentProps) {
    super(props);
    this.state = {
      data: [],
      fetching: false,
    };
  }
  static defaultProps = {
    title: 'Star Wars',
  };
  private async getContent(searchText: string) {
    const data = await ApiService.getSearchAllData(searchText);
    this.setState({ data, fetching: true });
  }
  componentDidMount() {
    this.getContent('');
  }
  render() {
    return (
      <main className={cl.main}>
        <section className="container">
          <h1 className={cl.title}> {this.props.title} </h1>
          {this.state.fetching ? <MyCardList cards={this.state.data} /> : <Sword />}
        </section>
      </main>
    );
  }
}

export default MyContent;
