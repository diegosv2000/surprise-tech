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
      <div className="heart-1">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-2">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-3">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-4">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-5">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-6">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-7">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-8">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-9">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-10">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>

      <div className="heart-11">
        <div className="heart-animated">
          <div className="border-global"></div>
          <div className="heart"></div>
        </div>
      </div>
    </div>
  );
};
