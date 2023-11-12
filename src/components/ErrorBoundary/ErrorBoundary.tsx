import { Component, ErrorInfo } from 'react';
import { ChildProps, ErrorBoundaryState } from '../../types';
import cl from './ErrorBoundary.module.css';
import BaseButton from '../UI/BaseButton/BaseButton';
export default class ErrorBoundary extends Component<ChildProps, ErrorBoundaryState> {
  constructor(props: ChildProps) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="container" style={{ marginTop: '10%' }}>
          <h1 className={cl.title}>Something went wrong.</h1>
          <details className={cl.details}>
            <summary className={cl.summary}>
              {this.state.error && this.state.error.toString()}
            </summary>
            <p>{this.state.errorInfo.componentStack}</p>
          </details>
          <a href="./">
            <BaseButton>Reload page</BaseButton>
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}
