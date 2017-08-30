import React from 'react';

export const wrapper = WrappedComponent => ({immutables, ...wrappedComponentProps}) => {
  const propsJS = immutables.toJS();

  return <WrappedComponent {...propsJS} {...wrappedComponentProps} />
}
