import {
  MdLocalFireDepartment,
  MdBolt,
  MdOnlinePrediction,
} from "react-icons/md";

const exploreRouterMenu = [
  {
    sectionId: "Movies",
    sectionLabel: "Movies",
    sectionItems: [
      {
        path: "movie",
        label: "Popular",
        Icon: MdLocalFireDepartment,
      },
      {
        path: "movie",
        label: "Latest",
        Icon: MdBolt,
      },
      {
        path: "movie",
        label: "Upcoming",
        Icon: MdOnlinePrediction,
      },
    ],
  },
];

export default exploreRouterMenu;
