import React from 'react';
import { useStorybookApi } from '@storybook/api';
import SyntaxHighlighter from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/esm/styles/hljs/github';

export function Code() {
  const state = useStorybookApi();
  const channel = state?.getChannel('args') || {};
  const rendered = channel?.data?.['storybook/docs/snippet-rendered']?.[1] || 'No code found';
  
  return (
    <SyntaxHighlighter language="html" style={theme} showLineNumbers={true}>
      {rendered}
    </SyntaxHighlighter>
  );
}