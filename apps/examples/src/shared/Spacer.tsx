import React, { ReactNode } from 'react';
import { View } from 'react-native';

interface Props {
  children: ReactNode;
}

export const Spacer = ({ children }: Props): React.JSX.Element => (
  <View style={{ margin: 10 }}>{children}</View>
);
