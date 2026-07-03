import PortalBanner from "./PortalBanner";
import SideMenu from "./SideMenu";
import ContentPanel from "./ContentPanel";
import RightPanel from "./RightPanel";
import "./PortalLayout.css";

function PortalLayout({ activeSection, onChangeSection, title, children }) {
  return (
    <main className="portal-layout" id="portal">
      <section className="portal-layout-container">
        <PortalBanner />

        <div className="portal-layout-body">
          <SideMenu
            activeSection={activeSection}
            onChangeSection={onChangeSection}
          />

          <ContentPanel title={title}>
            {children}
          </ContentPanel>

          <RightPanel />
        </div>
      </section>
    </main>
  );
}

export default PortalLayout;