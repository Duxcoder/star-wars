import { Component } from 'react';
import { HeaderProps } from '../../types';
import cl from './MyHeader.module.css';
class MyHeader extends Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
  }
  private _containerClasses = [cl.container, 'container'];
  render() {
    return (
      <header className={cl.header}>
        <div className={this._containerClasses.join(' ')}>
          <div className={cl.logo}>
            <img className={cl.logoImg} src={this.props.logoImg} alt={'logotype'} />
            <span className={cl.logoName}>{this.props.logo}</span>
          </div>
          <h1>Navigation</h1>
        </div>
      </header>
    );
  }
}

export default MyHeader;
