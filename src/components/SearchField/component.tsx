import React, { Ref, useState } from 'react';

import './styles.scss';

export default function SearchField() {
  const [text, setText] = useState('');

  const inputRef: Ref<HTMLInputElement> = React.createRef();

  const hasText = () => text.trim().length > 0;
  const focusInput = () => inputRef.current?.focus();

  // the host element's classes. We want it to stay expanded if we have text
  const classes = `search-field ${hasText() ? 'has-text' : ''}`;

  return (
    <div className={classes} onClick={focusInput}>
      <div className="input-field">
        <i className="icon material-icons">search</i>
        <input
          className="browser-default"
          type="text"
          value={text}
          onChange={(evt) => setText(evt.target.value)}
          ref={inputRef}
        />
        {hasText() && (
          <i className="tiny material-icons" onClick={() => setText('')}>
            close
          </i>
        )}
      </div>
    </div>
  );
}
