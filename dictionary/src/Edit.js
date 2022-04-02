import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addWordFB } from "./redux/modules/dictionary";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

const Edit = (props) => {
  const history = useHistory();
  const ref = React.useRef([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const lists = location.state.list;
  // console.log(lists);
  React.useEffect(() => {
    ref.current[0].value = lists.word;
    ref.current[1].value = lists.pron;
    ref.current[2].value = lists.meaning;
    ref.current[3].value = lists.eg;
  }, []);

  const addWord = () => {
    const word = ref.current[0].value;
    const pron = ref.current[1].value;
    const meaning = ref.current[2].value;
    const eg = ref.current[3].value;
    // const check = false;
    // dispatch(createWord(obj));
    if (!word || !pron || !meaning || !eg) {
      return window.alert("빈칸을 채워주세요!");
    }
    dispatch(addWordFB({ word, pron, meaning, eg, check: false }));
  };

  return (
    <Wrap>
      <div>
        <h4 style={{ fontSize: "xx-large", marginBottom: "20px" }}>
          단어 수정하기
        </h4>
        <h5 style={{ fontSize: "x-large" }}>단어</h5>
        <Input
          style={{
            fontFamily: "Zen Maru Gothic",
            fontSize: "medium",
            fontWeight: "Bold",
          }}
          ref={(el) => (ref.current[0] = el)}
          readOnly
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
        <Save
          onClick={() => {
            addWord();
            history.goBack();
          }}
        >
          저장하기
        </Save>
      </Btns>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 500px;
  height: 500px;
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

export default Edit;
