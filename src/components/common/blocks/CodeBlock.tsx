'use client';

import type { FC } from 'react';
import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

type CodeBlockType = {
  code: string;
  language: string;
  showLineNumbers: boolean;
};

const CodeBlock: FC<CodeBlockType> = ({ code, language, showLineNumbers }) => {
  return (
    <div className="my-8">
      <CopyBlock
        language={language}
        text={code}
        showLineNumbers={showLineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
};

export default CodeBlock;
