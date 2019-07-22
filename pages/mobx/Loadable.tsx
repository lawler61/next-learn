import React from 'react';
import Loadable, { LoadingComponentProps } from 'react-loadable';

class LoadingComponent extends React.PureComponent<LoadingComponentProps> {
  render() {
    const { error, isLoading, pastDelay, timedOut } = this.props;
    return (
      <div>
        {error}
        {isLoading}
        {pastDelay}
        {timedOut}
      </div>
    );
  }
}

export default Loadable({
  loader: () => import(/* webpackChunkName: "mobx" */ './index'),
  loading: LoadingComponent,
  delay: 100,
  timeout: 10000,
});
