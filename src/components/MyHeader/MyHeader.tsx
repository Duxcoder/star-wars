import { Component } from 'react';
import { HeaderProps } from '../../types';
import cl from './MyHeader.module.css';
import MyButton from '../UI/MyButton/MyButton';
import MyInput from '../UI/MyInput/MyInput';
class MyHeader extends Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
  }
  private _containerClasses = [cl.container, 'container'];
  render() {
    return (
      <header className={cl.header}>
        <div className={this._containerClasses.join(' ')}>
          <a href="/" className={cl.logo}>
            <span className={cl.logoName}>{this.props.logo}</span>
          </a>
          <div className={cl.searchContainer}>
            <MyInput type={'search'} disabled={false} placeholder={'Find anything...'} />
            <MyButton name={'Search'} disabled={false} />
          </div>
        </div>
      </header>
    );
  }
}

export default MyHeader;
