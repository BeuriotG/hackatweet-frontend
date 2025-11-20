export default function UserCard({ username, firstname }) {
  return (
    <div className="flex flex-col text-white self-center w-1/2">
      <span className="font-bold">{firstname}</span>
      <span>{username}</span>
    </div>
  );
}
