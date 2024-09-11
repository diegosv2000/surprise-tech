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
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-global-3">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-global-4">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-global-5">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-global-6">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-global-7">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-global-8">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-global-9">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-global-10">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-global-11">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>
    </div>
  );
};
