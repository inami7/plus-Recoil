import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `301-${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "dewadea@deae.com",
    phone: "455-0000-0000",
    company: {
      name: "テスト"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
//レスポンシブ
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
