import users from "./users";

export default posts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1620766165457-a8025baa82e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwb2YlMjBpbmRpYXxlbnwwfHwwfHw%3D&w=1000&q=80",
    user: users[0].name,
    likes: 100,
    caption: "Beatiful Nature around us",
    dp: users[0].image,
    comments: [
      {
        user: "Sivarama Dasa",
        comment:
          "Haribol! super excited about it. Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare",
      },
      {
        user: "Ananta Padmanabha",
        comment: "God's nature is so beautiful",
      },
      {
        user: "Raja Rama Dasa",
        comment: "Wonderful and mesmerising creation of God",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://assets.hongkiat.com/uploads/100-absolutely-beautiful-nature-wallpapers-for-your-desktop/blue-sea-sunset.jpg",
    user: users[1].name,
    likes: 1000,
    caption: "Beatiful Nature around us",
    dp: users[1].image,
    comments: [
      {
        user: "Sivarama Dasa",
        comment: "Haribol! super excited about it",
      },
      {
        user: "Ananta Padmanabha",
        comment: "God's nature is so beautiful",
      },
    ],
  },
  {
    id: 3,
    image:
      "https://assets.hongkiat.com/uploads/100-absolutely-beautiful-nature-wallpapers-for-your-desktop/blue-sea-sunset.jpg",
    user: users[2].name,
    likes: 2548,
    caption: "Beatiful Nature around us",
    dp: users[2].image,
    comments: [
      {
        user: "Sivarama Dasa",
        comment: "Haribol! super excited about it",
      },
      {
        user: "Ananta Padmanabha",
        comment: "God's nature is so beautiful",
      },
    ],
  },
];
