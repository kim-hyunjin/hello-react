import React from "react";
import ReactDOMServer from 'react-dom/server';

//TODO 서버코드 작성하기
const html = ReactDOMServer.renderToString(
    <div>Hello Server Side Rendering!</div>
);

console.log(html);