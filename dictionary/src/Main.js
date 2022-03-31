import React from "react";
import styled from "styled-components";
import { BsPatchCheck, BsPatchPlus } from "react-icons/bs";
import { HiPencilAlt } from "react-icons/hi";
import { CgCloseR } from "react-icons/cg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { loadWordFB } from "./redux/modules/dictionary";
import { useHistory } from "react-router-dom";
import { updateWordFB, deleteWordFB } from "./redux/modules/dictionary";

const Main = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadWordFB());
  }, []);

  const lists = useSelector((state) => state.dictionary.list);

  return (
    <>
      <Cards>
        {lists.map((list, index) => {
          return (
            <Card list={list}>
              <Buttons>
                <BsPatchCheck
                  className="check"
                  onClick={() => {
                    dispatch(updateWordFB(lists[index]));
                  }}
                  size={20}
                />
                <HiPencilAlt
                  className="edit"
                  size={20}
                  onClick={() => {
                    history.push({
                      pathname: "/edit/" + lists[index].id,
                      state: { list: lists[index] },
                    });
                  }}
                />
                <CgCloseR
                  className="delete"
                  size={20}
                  onClick={() => {
                    if (window.confirm("정말 삭제할까요?") === true) {
                      dispatch(deleteWordFB(lists[index]));
                    }
                  }}
                />
              </Buttons>
              <h4 style={{ fontFamily: "Zen Maru Gothic", fontSize: "medium" }}>
                {list.word}
              </h4>
              <h5 style={{ fontFamily: "Zen Maru Gothic", fontSize: "medium" }}>
                {list.pron}
              </h5>
              <h5 style={{ fontFamily: "Cute Font", fontSize: "x-large" }}>
                {list.meaning}
              </h5>
              <h5
                style={{
                  fontFamily: "Zen Maru Gothic",
                  fontSize: "medium",
                  color: "#0983E3",
                }}
              >
                {list.eg}
              </h5>
            </Card>
          );
        })}
      </Cards>
      <BsPatchPlus
        className="plus"
        onClick={() => {
          history.push("/add");
        }}
        size={60}
      />
    </>
  );
};

const Cards = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 60px auto 0 auto;
  width: 80%;
`;

const Card = styled.div`
  border: 2px solid #ff6f61;
  border-radius: 10px;
  padding: 20px;
  color: #000;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) =>
    props.list.check === true ? "#ff6f61" : "#fff"};
`;

const Buttons = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export default Main;
