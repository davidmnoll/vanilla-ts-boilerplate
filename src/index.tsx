/** @jsx createElement */
/*** @jsxFrag createFragment */

import './index.css';
import { createElement, createFragment } from './allowTsx'



const UsingFragment = () => (
    <div>
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
console.log('body', body);
body.appendChild(<UsingFragment name="foo" />); 


export default function test1(){ console.log("loaded ") }