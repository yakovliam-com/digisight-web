import { Box, Text, Heading } from "@primer/react";
import ReactFlow, { Background, Controls, Edge, Node } from "reactflow";
import tree from "./tree";
import dagre from "dagre";
import DigisightNode from "../../types/DigisightNode";

const nodes: Node[] = [];
const edges: Edge[] = [];

const digisightNodeToReactFlowNode = (
  node: DigisightNode,
  hasParent: boolean,
  hasChildren: boolean
): Node => {
  return {
    id: node.id,
    data: { label: node.label },
    position: { x: 0, y: 0 },
    type: hasParent ? (hasChildren ? "default" : "output") : "input",
  };
};

// flatten tree
const flatten = (tree: DigisightNode, parent?: DigisightNode) => {
  if (tree.children) {
    tree.children.forEach((child: DigisightNode) => {
      edges.push({
        id: `${tree.id}-${child.id}`,
        source: tree.id,
        target: child.id,
      });
      flatten(child, tree);
    });
  }
  nodes.push(
    digisightNodeToReactFlowNode(
      tree,
      parent !== null,
      tree.children !== null && tree.children.length > 0
    )
  );
};

flatten(tree);

// use dagre auto layout
const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[],
  direction = "TB"
) => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node: Node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge: Edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node: any) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? "left" : "top";
    node.sourcePosition = isHorizontal ? "right" : "bottom";

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};

const layoutedElements = getLayoutedElements(nodes, edges, "TB");

const Dashboard = () => {
  return (
    <Box flex={5}>
      <Box height="100%" display={"flex"} flexDirection={"column"}>
        <Box
          p={4}
          bg="canvas.inset"
          border={"1px solid"}
          borderColor={"border.subtle"}
        >
          <Heading>Group Node Editor</Heading>
          <Text fontSize={"14px"} color={"fg.subtle"}>
            Customize project groups.
          </Text>
        </Box>
        <Box flex={1}>
          <ReactFlow
            proOptions={{ hideAttribution: true }}
            nodes={layoutedElements.nodes}
            edges={layoutedElements.edges}
            fitView={true}
          >
            <Background />
            <Controls />
          </ReactFlow>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
