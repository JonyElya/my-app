import React from "react";
import style from "./ProfileInfo.module.css";
import Lines from "react-preloaders/lib/Lines/Lines";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Lines time={0} />;
  }
  return (
    <div>
      <div className={style.description_image}>
        <img
          src="https://www.decoidees.be/wp-content/uploads/2019/07/bleumajorelleslider-1000x650.jpg"
          alt=""
        />
      </div>
      <div className={style.description_block}>
        <div>
          <img src={props.profile.photos.large} />
        </div>
        <div className="">{props.profile.aboutMe}</div>
        <div className="">{props.profile.fullName}</div>
        {/* {props.profile.profile.map(i => (
          <div className="">
            <div className="">{i.email}</div>
            <div className="">{i.phone}</div>
            <div className="">{i.userId}</div>
            <div className="">{i.id}</div>
          </div>
        ))} */}
      </div>
    </div>
  );
};
export default ProfileInfo;
