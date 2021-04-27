import React, { FunctionComponent } from 'react';

import { MDXProvider } from '@mdx-js/react';

import 'github-markdown-css/github-markdown.css';
import '../styles/vs-code.css';

const MdxLayout: FunctionComponent = (props) => {
  return <MDXProvider components={{}}>{props.children}</MDXProvider>;
};

export default MdxLayout;
