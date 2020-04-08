import * as React from 'react';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { Label } from 'office-ui-fabric-react/lib/Label';
import BookSearch from './book-search';
import Progress from './progress';

const App = ({ title, isOfficeInitialized }) => {
  if (!isOfficeInitialized) {
    return (
      <Progress
        title={title}
        logo="assets/logo-filled.png"
        message="Please sideload your addin to see app body."
      />
    );
  }

  return (
    <div>
      <Pivot aria-label="Add-in Navigation">
        <PivotItem
          headerText="Search"
          headerButtonProps={{
            'data-order': 1,
            'data-title': 'Search',
          }}
        >
          <BookSearch />
        </PivotItem>
        <PivotItem
          headerText="Library"
          headerButtonProps={{
            'data-order': 2,
            'data-title': 'Library',
          }}
        >
          <Label>Library</Label>
        </PivotItem>
      </Pivot>
    </div>
  );
};

export default App;
