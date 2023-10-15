import { Component } from 'react';
import cl from './MyContent.module.css';
import { ContentProps, ContentState } from '../../types';
import ApiService from '../API/ApiService';
import MyCardList from '../MyCardList/MyCardList';
class MyContent extends Component<ContentProps, ContentState> {
  constructor(props: ContentProps) {
    super(props);
    this.state = {
      data: [],
    };
  }
  static defaultProps = {
    title: 'Star Wars',
  };
  private async getContent(searchText: string) {
    const data = await ApiService.getSearchAllData(searchText);
    this.setState({ data });
  }
  componentDidMount() {
    this.getContent('Skywalker');
  }
  render() {
    return (
      <main className={cl.main}>
        <section className="container">
          <h1 className={cl.title}> {this.props.title} </h1>
          <MyCardList cards={this.state.data} />
        </section>
      </main>
    );
  }
}

export default MyContent;
