import { Apps, BookmarkBorder, Create, Drafts, ExpandLess, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt, ExpandMore, Add } from '@mui/icons-material';
import { SidebarContainer, SidebarHeader, SidebarInfo } from './Sidebar.styles';
import { useCollection } from "react-firebase-hooks/firestore";
import SidebarOption from './SidebarOption';
import { db } from "../../firebase";

const Sidebar = () => {
  const [channels, loading, error] = useCollection(db.collection("rooms"));

  return (
    <SidebarContainer>
      {/* sidebar header */}
      <SidebarHeader>
        <SidebarInfo>
          <h2>JPro's Space</h2>
          <h3>
            <FiberManualRecord />
            Johnny Lu
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
      {/* sidebar options */}
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Metions & Reactions" />
      <SidebarOption Icon={Drafts} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel Browser" />
      <SidebarOption Icon={PeopleAlt} title="People & User Groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File Browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Show more" />
      <hr />
      <SidebarOption Icon={Add} title="Add Channel" addChannelOption />

      {channels?.docs.map(doc => (
        <SidebarOption key={doc.id} id={doc.id} addChannelOption title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;
