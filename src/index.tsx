/** @jsx createElement */
/*** @jsxFrag createFragment */

import style from './index.module.css';
import { createElement, createFragment } from './allowTsx'



const UsingFragment = () => (
    <div className={`test 1 ${style.main1}`} >
      <p>This is regular paragraph</p>
      <div>
        <p>This is a paragraph in a fragment</p>
        <>
          <p>Hello</p>
        </>
        <ul>
          {[1, 2, 3].map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
  
const body = document.getElementById("root")
console.log('body', body, style, Object.entries(style));
body.appendChild(<UsingFragment name="foo" />); 


export default function test1(){ console.log("loaded ") }