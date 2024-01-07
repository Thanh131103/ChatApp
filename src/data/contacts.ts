import avatar1 from "../assets/images/users/avatar-1.jpg";
import avatar2 from "../assets/images/users/avatar-2.jpg";
import avatar3 from "../assets/images/users/avatar-3.jpg";
import avatar4 from "../assets/images/users/avatar-4.jpg";
import avatar5 from "../assets/images/users/avatar-5.jpg";
import avatar6 from "../assets/images/users/avatar-6.jpg";
import avatar7 from "../assets/images/users/avatar-7.jpg";
import avatar8 from "../assets/images/users/avatar-8.jpg";
import avatar9 from "../assets/images/users/avatar-9.jpg";
import avatar10 from "../assets/images/users/avatar-10.jpg";
import img1 from "../assets/images/small/img-1.jpg";
import img2 from "../assets/images/small/img-2.jpg";
import img3 from "../assets/images/small/img-3.jpg";
import img4 from "../assets/images/small/img-4.jpg";

// interfaces
import { ChannelTypes } from "./chat";
import { MediaTypes, AttachedfileTypes } from "./myProfile";
import { STATUS_TYPES } from "../constants";
export interface ContactTypes {
  id: string | number;
  firstName: string;
  lastName: string;
  profileImage?: any;
  about?: string;
  email: string;
  location: string;
  channels?: Array<ChannelTypes>;
  media?: MediaTypes;
  attachedFiles?: AttachedfileTypes;
  status?: STATUS_TYPES;
  isFavourite?: boolean;
  isArchived?: boolean;
}
let contacts: ContactTypes[] = [
  {
    id: "614ecab426f59ce2863e106e",
    firstName: "Thu",
    lastName: "Hoang",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
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
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
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
  },
  {
    id: "614ecab4aeecaa03e8244d57",
    firstName: "Huy",
    lastName: "Nguyen",
    profileImage: avatar1,
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
    ],
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
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab44abffd0867521196",
    firstName: "Thanh",
    lastName: "Ngo",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: img1,
        },

        {
          id: 4,
          url: img1,
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
      ],
    },
  },
  {
    id: "614ecab463eda97c2df4fe9a",
    firstName: "Khanh",
    lastName: "Tran",
    profileImage: avatar2,
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
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
      ],
    },
  },
  {
    id: "614ecab4ac946a9bdafa4e3b",
    isFavourite: true,
    firstName: "Minh",
    lastName: "Thu",
    profileImage: avatar4,
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "Thu@Campbell.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
    ],
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
          url: img3,
        },
        {
          id: 4,
          url: img4,
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
  },
  {
    id: "614ecab41f60c4fdffe639c8",
    firstName: "Khai",
    lastName: "Ho",
    profileImage: avatar3,
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.AWAY,
    isFavourite: true,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
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
          url: img4,
        },
        {
          id: 4,
          url: img1,
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
  },
  {
    id: "614ecab400931b0aba9d0d76",
    firstName: "Huy",
    lastName: "Quang",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    isArchived: true,
    isFavourite: true,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
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
          url: img4,
        },
        {
          id: 4,
          url: img1,
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
  },
  {
    id: "614ecab4c2a5e35f32f78659",
    firstName: "Anh ",
    lastName: "Thu",
    profileImage: avatar5,
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    isFavourite: true,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
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
          url: img4,
        },
        {
          id: 4,
          url: img1,
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
  },
  {
    id: "614ecab4fd445a537e2bb2b5",
    firstName: "Bao",
    lastName: "Tran",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    isArchived: true,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
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
          url: img4,
        },
        {
          id: 4,
          url: img1,
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
  },
  {
    id: "614ecab4ebb18e740e372e80",
    firstName: "Thanh",
    lastName: "Nhat",
    profileImage: avatar5,
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
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
          url: img4,
        },
        {
          id: 4,
          url: img1,
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
  },
  {
    id: "614ecab4fec7ab1ffb2a497d",
    firstName: "Khanh",
    lastName: "Minh",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    isArchived: true,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
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
          url: img4,
        },
        {
          id: 4,
          url: img1,
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
  },
  {
    id: "614ecab4363b167c147a422b",
    firstName: "Thanh",
    lastName: "Thu",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
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
          url: img4,
        },
        {
          id: 4,
          url: img1,
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
  },
  {
    id: "614ecab44fe4db874560b822",
    firstName: "Hoang",
    lastName: "Yen",
    profileImage: avatar6,
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
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
          url: img4,
        },
        {
          id: 4,
          url: img1,
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
  },
  {
    id: "614ecab49b13ce36ad017914",
    firstName: "Vy",
    lastName: "Yen",
    profileImage: avatar7,
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
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
          url: img4,
        },
        {
          id: 4,
          url: img1,
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
  },
  {
    id: "614ecab48c8cc404a0604fc4",
    firstName: "Kim",
    lastName: "Ngan",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
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
          url: img4,
        },
        {
          id: 4,
          url: img1,
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
  },
  {
    id: "614ecab45f5f3e45d25d5bbd",
    firstName: "Thanh",
    lastName: "Thuy",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,

    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
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
          url: img4,
        },
        {
          id: 4,
          url: img1,
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
  },
  {
    id: "614ecab49785656f162d67db",
    firstName: "Vy",
    lastName: "Oanh",
    profileImage: avatar8,
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,

    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
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
          url: img4,
        },
        {
          id: 4,
          url: img1,
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
  },
  {
    id: "614ecab4a4666b6ff5f7864f",
    firstName: "Son",
    lastName: "Tung",
    profileImage: avatar9,
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.DO_NOT_DISTURB,

    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
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
          url: img4,
        },
        {
          id: 4,
          url: img1,
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
  },
  {
    id: "614ecab43dbce45d6d996d9f",
    firstName: "Thanh",
    lastName: "Thien",
    profileImage: avatar10,
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
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
          url: img4,
        },
        {
          id: 4,
          url: img1,
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
  },
  {
    id: "614ecab41b1f288b60a9f5c9",
    firstName: "My",
    lastName: "Tran",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
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
          url: img4,
        },
        {
          id: 4,
          url: img1,
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
  },
  {
    id: "614ecab413673c7385945500",
    firstName: "Phuong",
    lastName: "Linh",
    about: "Nothind to Display!",
    email: "ShawnaWright@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
      {
        id: 3,
        name: "Brand Suggestion",
      },
    ],
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
          url: img4,
        },
        {
          id: 4,
          url: img1,
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
  },
];

const onChangeContacts = (newData: Array<ContactTypes>) => {
  contacts = newData;
};
export { contacts, onChangeContacts };
