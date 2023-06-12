import DigisightNode from "../../types/DigisightNode";

const tree: DigisightNode = {
  id: "root",
  label: "My-Project-Name",
  children: [
    {
      id: "[1] [1]",
      label: "[1] [1]",
      children: [
        {
          id: "[1] [1] [1]",
          label: "[1] [1] [1]",
          children: [],
        },
        {
          id: "[1] [1] [2]",
          label: "[1] [1] [2]",
          children: [],
        },
        {
          id: "[1] [1] [3]",
          label: "[1] [1] [3]",
          children: [
            {
              id: "[1] [1] [3] [1]",
              label: "[1] [1] [3] [1]",
              children: [],
            },
            {
              id: "[1] [1] [3] [2]",
              label: "[1] [1] [3] [2]",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "[1] [2]",
      label: "[1] [2]",
      children: [
        {
          id: "[1] [2] [1]",
          label: "[1] [2] [1]",
          children: [],
        },
        {
          id: "[1] [2] [2]",
          label: "[1] [2] [2]",
          children: [],
        },
      ],
    },
    {
      id: "[1] [3]",
      label: "[1] [3]",
      children: [
        {
          id: "[1] [3] [1]",
          label: "[1] [3] [1]",
          children: [],
        },
        {
          id: "[1] [3] [2]",
          label: "[1] [3] [2]",
          children: [
            {
              id: "[1] [3] [2] [1]",
              label: "[1] [3] [2] [1]",
              children: [],
            },
            {
              id: "[1] [3] [2] [2]",
              label: "[1] [3] [2] [2]",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

export default tree;
