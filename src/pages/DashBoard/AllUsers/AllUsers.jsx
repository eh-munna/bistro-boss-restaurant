import { useQuery } from '@tanstack/react-query';
import UsersRow from './UsersRow';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get(`/users`);
    return res.data;
  });

  return (
    <div className="">
      <h2 className="text-xl text-center">Total users : {users.length}</h2>

      <div className="grid grid-cols-5 pt-6 justify-center items-center">
        <div>Sl</div>
        <div>Name</div>
        <div>Email</div>
        <div>Role</div>
        <div>Action</div>
      </div>
      <div>
        {users.map((user, idx) => (
          <UsersRow idx={idx} key={user._id} user={user} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
