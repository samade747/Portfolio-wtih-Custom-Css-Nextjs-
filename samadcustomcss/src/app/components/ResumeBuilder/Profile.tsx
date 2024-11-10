// src/components/ResumeBuilder/Profile.tsx
import Image from 'next/image';

const Profile = () => {
  return (
    <div className="flex justify-center mb-6">
      <Image
        src={`/samad.jpg`}
        width={160}
        height={160}
        alt="profile pic"
        className="rounded-full w-40 h-40"
      />
    </div>
  );
};

export default Profile;
