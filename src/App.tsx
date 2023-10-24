import { Component } from 'react';
import cl from './App.module.css';
import MyInput from './components/UI/MyInput/MyInput';
import MyButton from './components/UI/MyButton/MyButton';
import MyCardList from './components/MyCardList/MyCardList';
import Sword from './components/Spinners/Sword';
import ApiService from './components/API/ApiService';
import { RiSearch2Line } from 'react-icons/ri';
import { AppProps, AppState } from './types';

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      search: '',
      data: [],
      fetching: false,
    };
    this.setSearch = this.setSearch.bind(this);
  }
  private _containerClasses = [cl.container, 'container'];
  private async getContent(searchText: string) {
    this.setState({ fetching: false });
    const data = await ApiService.getSearchAllData(searchText);
    this.setState({ data, fetching: true });
  }
  setSearch(text: string) {
    this.setState({
      search: text.trim(),
    });
  }
  componentDidMount() {
    this.getContent(this.state.search);
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
              <MyInput type={'search'} placeholder={'Find anything...'} callback={this.setSearch} />
              <MyButton name={'Search'} callback={() => this.getContent(this.state.search)}>
                <RiSearch2Line />
              </MyButton>
            </div>
          </div>
        </header>
        <main className={cl.main}>
          <section className="container">
            <h1 className={cl.title}> {'Star Wars'} </h1>
            {this.state.fetching ? <MyCardList cards={this.state.data} /> : <Sword />}
          </section>
        </main>
      </>
    );
  }
}

export default App;
