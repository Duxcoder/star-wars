import { Component } from 'react';
import cl from './MyContent.module.css';
import MyInput from '../UI/MyInput/MyInput';
import MyButton from '../UI/MyButton/MyButton';
import MyCardList from '../MyCardList/MyCardList';
import Sword from '../Spinners/Sword';
import ApiService from '../API/ApiService';
import { RiSearch2Line, RiErrorWarningLine } from 'react-icons/ri';
import { ContentState, EmptyProps } from '../../types';
import { LocalStorage } from '../../settings';

class MyContent extends Component<EmptyProps, ContentState> {
  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      search: localStorage.getItem(LocalStorage.searchText) ?? '',
      data: [],
      fetching: false,
      error: '',
    };
    this.setSearch = this.setSearch.bind(this);
    this.setError = this.setError.bind(this);
  }
  private _containerClasses = [cl.container, 'container'];
  private async getContent(searchText: string) {
    this.setState({ fetching: true });
    localStorage.setItem(LocalStorage.searchText, searchText);
    const data = await ApiService.getSearchAllData(searchText);
    this.setState({ data, fetching: false });
  }
  setSearch(text: string) {
    this.setState({
      search: text.trim(),
    });
  }
  setError(error: string) {
    this.setState({ error });
  }
  componentDidUpdate() {
    if (this.state.error) throw new Error(this.state.error);
  }
  componentDidMount() {
    this.getContent(this.state.search).catch((err) => this.setError(err));
  }
  render() {
    return (
      <>
        <header className={cl.header}>
          <div className={this._containerClasses.join(' ')}>
            <a href="/" className={cl.logo}>
              <span className={cl.logoName}>{'Star Wars'}</span>
            </a>
            <div className={cl.searchContainer}>
              <MyInput
                value={this.state.search}
                disabled={this.state.fetching}
                type={'search'}
                placeholder={'Find anything...'}
                callback={this.setSearch}
              />
              <MyButton
                disabled={this.state.fetching}
                name={'Search'}
                callback={() => this.getContent(this.state.search)}
              >
                <RiSearch2Line />
              </MyButton>
              <MyButton name={'Error'} callback={() => this.setError('Oops! This is fatal error')}>
                <RiErrorWarningLine />
              </MyButton>
            </div>
          </div>
        </header>
        <main className={cl.main}>
          <section className="container">
            <h1 className={cl.title}> {'Star Wars'} </h1>
            {this.state.fetching ? <Sword /> : <MyCardList cards={this.state.data} />}
          </section>
        </main>
      </>
    );
  }
}

export default MyContent;
