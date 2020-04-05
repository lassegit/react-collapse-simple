import * as React from 'react';
import PropTypes from 'prop-types';

interface Props {
  transition?: string;
  isOpen: boolean;
  children: any;
}

export const ReactCollapseSimple = ({ transition, children, isOpen }: Props) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const [maxHeight, setMaxHeight] = React.useState('0');
  const style = {
    transition: transition,
    overflow: 'hidden',
    // For the collapse animation to work we need a fixed max-height,
    // therefore we simply pass the actual height of the element when the user collapses it (isOpen === false)
    maxHeight: maxHeight === 'none' && !isOpen ? ref.current?.clientHeight : maxHeight,
  };

  React.useEffect(() => {
    setMaxHeight(isOpen ? `${ref.current?.clientHeight}px` : '0');
  }, [isOpen]);

  return (
    <div
      className="react-collapse-simple-wrapper"
      style={style}
      onTransitionEnd={() => {
        if (isOpen) {
          // To avoid problems when resizing the screen we simply reset max-height to default after ended transition
          setMaxHeight('none');
        }
      }}
    >
      <div
        className="react-collapse-simple-inner"
        style={{ display: 'inline-block' }}
        ref={ref}
      >
        {children}
      </div>
    </div>
  );
};

ReactCollapseSimple.defaultProps = {
  transition: 'max-height 350ms ease-in-out',
  isOpen: false,
};

ReactCollapseSimple.propTypes = {
  transition: PropTypes.string,
  isOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default ReactCollapseSimple;
