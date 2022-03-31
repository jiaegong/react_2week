import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addWordFB } from "./redux/modules/dictionary";
import { useHistory } from "react-router-dom";

const Add = (props) => {
  const history = useHistory();
  const ref = React.useRef([]);
  const dispatch = useDispatch();

  const addWord = () => {
    const word = ref.current[0].value;
    const pron = ref.current[1].value;
    const meaning = ref.current[2].value;
    const eg = ref.current[3].value;
    // dispatch(createWord(obj));
    if (!word || !pron || !meaning || !eg) {
      return window.alert("빈칸을 채워주세요!");
    }
    dispatch(addWordFB({ word, pron, meaning, eg, check: false }));
    ref.current[0].value = "";
    ref.current[1].value = "";
    ref.current[2].value = "";
    ref.current[3].value = "";
  };

  return (
    <Wrap>
      <div>
        <h4 style={{ fontSize: "xx-large", marginBottom: "20px" }}>
          단어 추가하기
        </h4>
        <h5 style={{ fontSize: "x-large" }}>단어</h5>
        <Input
          style={{
            fontFamily: "Zen Maru Gothic",
            fontSize: "medium",
            fontWeight: "Bold",
          }}
          ref={(el) => (ref.current[0] = el)}
        />
        <h5 style={{ fontSize: "x-large" }}>발음</h5>
        <Input
          style={{
            fontFamily: "Zen Maru Gothic",
            fontSize: "medium",
            fontWeight: "Bold",
          }}
          ref={(el) => (ref.current[1] = el)}
        />
        <h5 style={{ fontSize: "x-large" }}>의미</h5>
        <Input
          style={{ fontFamily: "Cute Font", fontSize: "x-large" }}
          ref={(el) => (ref.current[2] = el)}
        />
        <h5 style={{ fontSize: "x-large" }}>예문</h5>
        <Input
          style={{
            fontFamily: "Zen Maru Gothic",
            fontSize: "medium",
            fontWeight: "Bold",
          }}
          ref={(el) => (ref.current[3] = el)}
        />
      </div>
      <Btns>
        <Save onClick={addWord}>저장하기</Save>
        <Back
          onClick={() => {
            history.goBack();
          }}
        >
          뒤로 가기
        </Back>
      </Btns>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin: 60px auto 0px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "Cute Font";
`;

const Input = styled.input`
  &:focus {
    outline: none;
  }
  border: none;
  border-bottom: 2px solid #ff6f61;
  margin-bottom: 20px;
  height: 30px;
`;

const Btns = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const Save = styled.button`
  border: 2px solid #ff6f61;
  border-radius: 10px;
  background-color: #ff6f61;
  color: #fff;
  width: 80px;
  font-family: "Cute Font";
  font-size: x-large;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Back = styled.button`
  border: 2px solid #ff6f61;
  border-radius: 10px;
  background-color: #ff6f61;
  color: #fff;
  width: 80px;
  font-family: "Cute Font";
  font-size: x-large;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export default Add;
