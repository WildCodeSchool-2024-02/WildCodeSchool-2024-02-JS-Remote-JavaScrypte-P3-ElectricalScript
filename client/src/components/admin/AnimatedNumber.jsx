import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";

function AnimatedNumber({ value }) {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: value },
    config: { duration: 3000 },
  });

  return (
    <animated.span>
      {number.to((n) => n.toFixed(0))}
    </animated.span>
  );
}

AnimatedNumber.propTypes = {
  value: PropTypes.number.isRequired,
};

export default AnimatedNumber;
