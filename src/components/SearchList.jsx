import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __addFriend } from "../redux/modules/friendsSlice";

function SearchList() {
  const { searchResult } = useSelector((state) => state.searchResult);

  const dispatch = useDispatch();

  const onAddFriend = (friendId) => {
    dispatch(__addFriend(friendId));
  };

  // const { friends } = useSelector((state) => state.friends);

  return (
    <StFriendsList>
      <h3 style={{ marginBottom: "10px" }}>Peoples</h3>
      {searchResult.map((sr) => (
        <StFriend>
          <StSearchLeft>
            <StFriendImgDiv>
              <StFriendImg src={sr.profileImg} />
            </StFriendImgDiv>
            <StFriendName>{sr.nickname}</StFriendName>
          </StSearchLeft>

          <StButton onClick={() => onAddFriend(sr.id)}>+</StButton>
        </StFriend>
      ))}
    </StFriendsList>
  );
}

export default SearchList;

const StFriendsList = styled.div`
  padding: 1rem;
  top: 74px;
  left: 100px;
  width: 340px;
  position: fixed;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StFriend = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  border-radius: 5px;
  padding: 7px 10px;
  color: #333;
  justify-content: space-between;
`;

const StSearchLeft = styled.div`
  display: flex;
  align-items: center;
`;

const StFriendImgDiv = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  background: #7b83c7;
`;

const StFriendImg = styled.img`
  width: 100%;
  background: #7b83c7;
`;

const StFriendName = styled.p`
  font-size: 18px;
  cursor: pointer;
  margin-left: 8px;
`;

const StButton = styled.button`
  border: none;
  background-color: white;

  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
`;
