import { ActionList, Box } from "@primer/react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { AiFillSetting, AiOutlineNodeIndex } from "react-icons/ai";
import { GiTeePipe } from "react-icons/gi";
import { RxCaretRight } from "react-icons/rx";
const SidePanel = () => {
  return (
    <Box
      display={["none", "none", "none", "flex"]}
      flex={1}
      flexDirection={"column"}
      bg={"canvas.inset"}
      p={4}
    >
      <ActionList>
        <ActionList.Item>
          <ActionList.LeadingVisual>
            <BsFillLightningChargeFill />
          </ActionList.LeadingVisual>
          Get Started
          <ActionList.TrailingVisual>
            <RxCaretRight />
          </ActionList.TrailingVisual>
        </ActionList.Item>
        <ActionList.Item>
          <ActionList.LeadingVisual>
            <AiFillSetting />
          </ActionList.LeadingVisual>
          Project Settings
          <ActionList.TrailingVisual>
            <RxCaretRight />
          </ActionList.TrailingVisual>
        </ActionList.Item>
        <ActionList.Item>
          <ActionList.LeadingVisual>
            <GiTeePipe />
          </ActionList.LeadingVisual>
          Action Pipeline
          <ActionList.TrailingVisual>
            <RxCaretRight />
          </ActionList.TrailingVisual>
        </ActionList.Item>
        <ActionList.Item>
          <ActionList.LeadingVisual>
            <AiOutlineNodeIndex />
          </ActionList.LeadingVisual>
          Node Editor
          <ActionList.TrailingVisual>
            <RxCaretRight />
          </ActionList.TrailingVisual>
        </ActionList.Item>
      </ActionList>
    </Box>
  );
};

export default SidePanel;
