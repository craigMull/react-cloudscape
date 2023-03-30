import React, { useRef, useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Box from "@cloudscape-design/components/box";

import AppLayout, { AppLayoutProps } from '@cloudscape-design/components/app-layout';
import Button from '@cloudscape-design/components/button';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Grid from '@cloudscape-design/components/grid';

import '@cloudscape-design/global-styles/dark-mode-utils.css';
import './styles/base.scss';

import { appLayoutAriaLabels } from './i18n-strings';

import { DashboardHeader, DashboardMainInfo } from './components/header';
import { DashboardSideNavigation } from './components/side-navigation';
import { Breadcrumbs, Notifications, HelpPanelProvider } from './commons';


function Content() {
  return (
    <Grid
      gridDefinition={[
        { colspan: { l: 8, m: 8, default: 12 } },
        { colspan: { l: 4, m: 4, default: 12 } },
        { colspan: { l: 6, m: 6, default: 12 } },
        { colspan: { l: 6, m: 6, default: 12 } },
        { colspan: { l: 6, m: 6, default: 12 } },
        { colspan: { l: 6, m: 6, default: 12 } },
        { colspan: { l: 6, m: 6, default: 12 } },
        { colspan: { l: 6, m: 6, default: 12 } },
        { colspan: { l: 8, m: 8, default: 12 } },
        { colspan: { l: 4, m: 4, default: 12 } },
      ]}
    >

    </Grid>
  );
}


function App() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [toolsContent, setToolsContent] = useState<React.ReactNode>(() => <DashboardMainInfo />);
  const appLayout = useRef<AppLayoutProps.Ref>(null);

  const handleToolsContentChange = (content: React.ReactNode) => {
    setToolsOpen(true);
    setToolsContent(content);
    appLayout.current?.focusToolsClose();
  };


  return (
    <div className="App">
  <HelpPanelProvider value={handleToolsContentChange}>
      <AppLayout
        ref={appLayout}
        content={
          <ContentLayout header={<DashboardHeader actions={<Button variant="primary">Launch instance</Button>} />}>
            <Content />
          </ContentLayout>
        }
        breadcrumbs={<Breadcrumbs items={[{ text: 'Dashboard', href: '#/' }]} />}
        navigation={<DashboardSideNavigation />}
        tools={toolsContent}
        toolsOpen={toolsOpen}
        onToolsChange={({ detail }) => setToolsOpen(detail.open)}
        ariaLabels={appLayoutAriaLabels}
        notifications={<Notifications />}
      />
    </HelpPanelProvider>
    </div>
  );
}

export default App;
