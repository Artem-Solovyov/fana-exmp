import AnimatedCounter from "@/components/AnimatedCounter/AnimatedCounter";

export const Possibilities = () => {
  return (
    <div className="possibilities" id="about">
      <div className="possibilities__container">
        <div className="possibilities__title">Capture, maintain and support every lead</div>
        <div className="possibilities__body">
          <div className="possibilities__item">
            <div className="possibilities__count">
              <AnimatedCounter targetNumber={2} duration={2000} />X
            </div>
            <p className="possibilities__text">More efficient conversations</p>
          </div>
          <div className="possibilities__item">
            <div className="possibilities__count">
              <AnimatedCounter targetNumber={500} duration={2000} />%
            </div>
            <p className="possibilities__text">Increased customer satisfaction</p>
          </div>
          <div className="possibilities__item">
            <div className="possibilities__count">
              <AnimatedCounter targetNumber={3} duration={2000} />X
            </div>
            <p className="possibilities__text">BETTER CONVERSIONS</p>
          </div>
        </div>
      </div>
    </div>
  );
};
