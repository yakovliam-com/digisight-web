type DigisightNode = {
  id: string;
  label: string;
  children: DigisightNode[] | [];
  isProject?: boolean; // if the node is a 'project' (collection of groups)
  isGroup?: boolean; // if the node is a 'group' (can be a collection of groups or a collection of devices)fs
};
export default DigisightNode;
