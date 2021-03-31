import React from "react";
import qs from "qs";

const data = {
  adesanya: {
    name: "이스라엘 아데산야",
    description: "정점에 오른 UFC 오타쿠",
  },
  corner: {
    name: "코너 맥그리거",
    description: "2체급을 석권한 UFC 전 챔피언",
  },
};

const Profile = ({ match, location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === "true";

  const { username } = match.params;
  const profile = data[username];
  // console.log(match);
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      {showDetail && <p>detail이 true입니다.</p>}
    </div>
  );
};

export default Profile;
