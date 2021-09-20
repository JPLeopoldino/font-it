import './App.css';

import Icon from 'react-icons-kit';
import { type } from 'react-icons-kit/feather/type'
import { bold } from 'react-icons-kit/feather/bold'
import { italic } from 'react-icons-kit/feather/italic'
import { code } from 'react-icons-kit/feather/code'
import { list } from 'react-icons-kit/feather/list'
import { underline } from 'react-icons-kit/feather/underline'
import { link2 } from 'react-icons-kit/feather/link2'
import { quote } from 'react-icons-kit/entypo/quote'
// import { copy } from 'react-icons-kit/feather/copy'

function App() {
  return (
    <div className="main">
      <h1 className="title">Font It.</h1>
      <div className="main-box">
        <div className="buttons-row">
          <button className="button">
            <Icon icon={type} />
          </button>
          <button className="button">
            {
            //<Icon icon={bold} />
          }
          </button>
          <button className="button">
            <Icon icon={italic} />
          </button>
          <button className="button">
            <Icon icon={code} />
          </button>
          <button className="button">
            <Icon icon={list} />
          </button>
          <button className="button">
            <Icon icon={underline} />
          </button>
          <button className="button">
            <Icon icon={quote} />
          </button>
          <button className="button">
            <Icon icon={link2} />
          </button>
        </div>
        <textarea className="text-area"/>
      </div>
    </div>
  );
}

export default App;
