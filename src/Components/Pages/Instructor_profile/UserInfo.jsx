import { useState } from 'react';
import './UserInfo.css';
import EditableUserProfile from './Profile_info/EditableUserProfile1';
import UserProfile from './Profile_info/UserProfile1';

function randomFName() {
    return "First Name Anonymous "
}
function randomLName() {
    return "Last Name Anonymous "
}
function randomLinkdin() {
    return "Anonymous26034 " 
}
function randomGitHub() {
    return "Anonymousgithub " 
}
function randomGraduation() {
    return "AnonymousBE in Civil" 
}
function randomPhoneNo() {
    return "9307052498" 
}

function UserInfo() {
    const now = new Date(Date.now());
    const defaultBirthday = new Date(now.getTime() + 86400000);

    const [editMode, setEditMode] = useState(false);

    const [fname, setFName] = useState(randomFName());
    const [lname, setLName] = useState(randomLName());
    const [linkdin, setLinkdin] = useState(randomLinkdin());
    const [github, setGitHub] = useState(randomGitHub());
    const [graduation, setGraduation] = useState(randomGraduation());
    const [phoneno, setPhoneNo] = useState(randomPhoneNo());
    const [month, setMonth] = useState(defaultBirthday.getMonth());
    const [day, setDay] = useState(defaultBirthday.getDate());

    const stored = {fname,lname,linkdin,github,graduation,phoneno, month, day};
    const isBirthdayToday = now.getMonth() === month && now.getDate() === day;

    function handleEditComplete(result) {
        console.log("handleEditComplete", result);
        if (result != null) {
            setFName(result.fname);
            setLName(result.lname);
            setLinkdin(result.linkdin);
            setGitHub(result.github);
            setGraduation(result.graduation);
            setPhoneNo(result.phoneno);
            setMonth(result.month);
            setDay(result.day);
        }        
        setEditMode(false);
    }

    return (
        <div className="containeruser">
            <div className="UserInfo">                 
                {
                    editMode
                        ? <>
                            <EditableUserProfile
                                    stored={stored}
                                    editCompleteCallback={handleEditComplete}                            
                            />
                        </>
                        : <>
                            <UserProfile
                                    stored={stored}
                                    startEditCallback={() => setEditMode(true)}
                            />
                        </>
                }            
            </div>
        </div>
    );
}

export default UserInfo;