import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("start");
  const [num, SetNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(false);

  const onClickCountUp = () => {
    SetNum(num + 1);
  };

  const onClickSwitchShow = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  // numだけ関心を持ちたい（on/offボタンが効かなくなるため）
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // false の場合だけ右を実行
        faceShowFlg || setFaceShowFlg(true);
      } else {
        // true の場合だけ右を実行
        faceShowFlg && setFaceShowFlg(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気ですよ。</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShow}>face on/off</button>
      <p>{num}</p>
      {faceShowFlg && <p>( ´∀｀) ＜ｻｰﾝ！</p>}
    </>
  );
};

export default App;
