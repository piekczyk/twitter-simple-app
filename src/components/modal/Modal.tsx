import React from 'react';

import './styles.scss';

type ModalProps = {
  message: string;
  close?: () => void;
  btnText?: string;
};

export const Modal: React.FC<ModalProps> = ({message, close, btnText}): JSX.Element => {
  return (
    <div className="modal">
      <p>{message}</p>
      {close && <button onClick={close}>{btnText ? btnText : 'Close'}</button>}
    </div>
  );
};
