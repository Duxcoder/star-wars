import { Component } from 'react';
import { HeaderProps } from '../../types';
import cl from './MyHeader.module.css';
import MyButton from '../UI/MyButton/MyButton';
import MyInput from '../UI/MyInput/MyInput';
import { RiSearch2Line } from 'react-icons/ri';
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
            <MyInput type={'search'} placeholder={'Find anything...'} />
            <MyButton name={'Search'}>
              <RiSearch2Line />
            </MyButton>
          </div>
        </div>
      </header>
    );
  }
}

export default MyHeader;
