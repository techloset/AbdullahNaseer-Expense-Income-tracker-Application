declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}


export interface User {
  id: string;
  email: string;
  // Add more properties as needed, such as name, profile picture, etc.
}
