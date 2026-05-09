import Sidebar from "../commponent/SideBar";
import Map from "../commponent/Map";
import styles from "./AppLayout.module.css";
import User from "../commponent/User";
export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}
