/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar";
import K from "../../../constants";
import PrimaryButton from "./PrimaryButton";

const PageHeader = ({
  title,
  searchPlaceholder,
  buttonText,
  buttonIcon,
  onClick,
}) => {
  return (
    <div className="mb-10">
      <div className="flex align-middle mb-4 justify-between items-center">
        <h2 className="page-title">{title}</h2>

        <div className="nav-bottom flex justify-center align-middle items-center gap-2">
          <div className="profile-image rounded-full w-[60px] h-[40px]">
            <img
              src={K.USER.profilePic}
              alt=""
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="profile-info flex flex-col w-full ">
            <p className="text-gray-700 text-sm">{K.USER.name}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-20 align-middle ">
        <SearchBar placeholder={searchPlaceholder} />
        {buttonText ? (
          <PrimaryButton
            text={buttonText}
            icon={buttonIcon}
            onClick={onClick}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PageHeader;
