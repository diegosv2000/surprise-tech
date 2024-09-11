import { FC } from "react";

interface HeartsProps {
  text: string
}
export const Hearts:FC<HeartsProps> = ({text}) => {
  return (
    <div className="hearts-container">
      {/* TEXTO */}
      <div className="text-heart">
        <p>{text}</p>
      </div>

      {/* CORAZONES */}
      <div className="heart-global-1">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-global-2">
        <div className="heart-animated-2">
          <div className="border-global-2"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-global-3">
        <div className="heart-animated-3">
          <div className="border-global-3"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-global-4">
        <div className="heart-animated-4">
          <div className="border-global-4"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-global-5">
        <div className="heart-animated-5">
          <div className="border-global-5"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-global-6">
        <div className="heart-animated-6">
          <div className="border-global-6"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-global-7">
        <div className="heart-animated-7">
          <div className="border-global-7"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-global-8">
        <div className="heart-animated-8">
          <div className="border-global-8"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-global-9">
        <div className="heart-animated-9">
          <div className="border-global-9"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-global-10">
        <div className="heart-animated-10">
          <div className="border-global-10"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-global-11">
        <div className="heart-animated-11">
          <div className="border-global-11"></div>
          <div className="heart"></div>
        </div>
      </div>
    </div>
  );
};
