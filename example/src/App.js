import React from 'react';

import { ReactCollapseSimple } from 'react-collapse-simple';
import 'react-collapse-simple/dist/index.css';

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <h1>This is an example of using the collapse component</h1>

      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toogle (isOpen: {String(isOpen)})
      </button>
      <ReactCollapseSimple isOpen={isOpen}>
        <div style={{ background: '#eee', padding: '20px' }}>
          <h3>Lorem ipsum dolor sit amet consetetur sadipscing elitr</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet.
          </p>
        </div>
      </ReactCollapseSimple>
    </div>
  );
};

export default App;
