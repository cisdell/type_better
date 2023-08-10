import userData from "../userData.json";
const userInfo = userData.uuid1;
export default function Profile() {
  console.log(userInfo);
  const { user, total_time, highest_clear_count, times_played, last_time } =
    userInfo;
  return <div className="profile">HELLO</div>;
}
