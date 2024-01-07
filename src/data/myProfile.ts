import avatar1 from "../assets/images/users/avatar-11.jpg";
import image4 from "../assets/images/small/img-4.jpg";
import img1 from "../assets/images/small/img-1.jpg";
import img2 from "../assets/images/small/img-2.jpg";

export interface BasicDetailsTypes {
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  fullName: string;
  email: string;
  location: string;
  avatar: string;
  coverImage: string;
}

export interface MediaListItemTypes {
  id: number;
  url: string;
}

export interface MediaTypes {
  total: number;
  list: MediaListItemTypes[];
}

export interface AttachedfileTypes {
  total: number;
  list: AttachedfileItemTypes[];
}

export interface AttachedfileItemTypes {
  id: number;
  fileName: string;
  size: string;
  downloadUrl: string;
  icon: string;
}

export interface ProfileDetailsTypes {
  basicDetails: BasicDetailsTypes;
  media: MediaTypes;
  attachedFiles: AttachedfileTypes;
}

const profileDetails: ProfileDetailsTypes = {
  basicDetails: {
    firstName: "Tinh",
    lastName: "Do",
    title: "Front end Developer",
    description: "Hi i'm from UIT",
    fullName: "Do Trong Tinh",
    email: "tinhdo@gmail.com",
    location: "HoChiMinh,Vietnam",
    avatar: avatar1,
    coverImage: image4,
  },
  media: {
    total: 17,
    list: [
      {
        id: 1,
        url: img1,
      },
      {
        id: 2,
        url: img2,
      },
      {
        id: 3,
        url: img1,
      },
      {
        id: 4,
        url: img2,
      },
    ],
  },
  attachedFiles: {
    total: 4,
    list: [
      {
        id: 1,
        fileName: "design-phase-1-approved.pdf",
        size: "12.5 MB",
        downloadUrl: "#",
        icon: "bx bx-file",
      },
      {
        id: 2,
        fileName: "Image-1.jpg",
        size: "4.2 MB",
        downloadUrl: "#",
        icon: "bx bx-image",
      },
      {
        id: 3,
        fileName: "Image-2.jpg",
        size: "3.1 MB",
        downloadUrl: "#",
        icon: "bx bx-image",
      },
      {
        id: 4,
        fileName: "Landing-A.zip",
        size: "6.7 MB",
        downloadUrl: "#",
        icon: "bx bx-file",
      },
    ],
  },
};

let user: any = localStorage.getItem("authUser");
user = JSON.parse(user);

const myData = {
  uid: user && user.uid ? user.uid : 1,
  username: "admin",
  role: "admin",
  password: "123456",
  email: profileDetails.basicDetails.email,
  profileImage: profileDetails.basicDetails.avatar,
};

const updateProfile = (newProfileDetails: BasicDetailsTypes) => {
  profileDetails.basicDetails = { ...profileDetails.basicDetails, ...newProfileDetails };
  // Add logic to persist the updated profile details if necessary
};

export { profileDetails, myData, updateProfile };
