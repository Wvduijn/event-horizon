import { UserProfile } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex w-screen justify-center'>
      <UserProfile />
    </div>
  );
}
