import React from 'react';
import ReactDOM from 'react-dom/client';
import {XtifyIconAvatar} from "xtify-icons";
import "xtify-icons/css";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <XtifyIconAvatar></XtifyIconAvatar>
        <i className={'xtify-icon ascii-to-hex'}></i>
    </React.StrictMode>,
);
