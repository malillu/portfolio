import React, { FC, useState, useEffect } from "react";

type Props = {};

export const TwitterIcon: FC<Props> = (props) => {
  const {} = props;

  return (
    <svg viewBox="0 0 27 27" width="30" height="30">
      <path
        fill="currentColor"
        d="M23.1 8.7v.7c0 8-6.4 14.5-14.4 14.6h-.2C5.7 24 3 23.2.6 21.7c.4 0 .8.1 1.2.1 2.3 0 4.6-.8 6.3-2.1C6 19.6 4 18.2 3.3 16c.3.1.7.1 1 .1.5 0 .9-.1 1.4-.2-2.4-.5-4.1-2.6-4.1-5.1v-.1c.7.4 1.5.6 2.3.7-1.5-1-2.2-2.5-2.2-4.3 0-.9.2-1.8.7-2.6C5 7.8 8.8 9.7 13 9.9c-.1-.4-.1-.8-.1-1.2 0-2.8 2.2-5.2 5.2-5.2 1.5 0 2.8.6 3.8 1.7C23 5 24 4.6 25 4.1c-.4 1.2-1.2 2.1-2.2 2.8 1-.1 2-.4 2.9-.8-.8 1-1.7 1.8-2.6 2.6z"
      ></path>
    </svg>
  );
};
