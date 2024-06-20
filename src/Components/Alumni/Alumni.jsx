import React from 'react';
import ProfileCard from './ProfileCard'; 

const Alumni = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard className="md:col-span-2" />
            <ProfileCard className="md:col-span-2" />
            <ProfileCard />
        </div>
    );
};

export default Alumni;
