import * as React from 'react';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { Label } from 'office-ui-fabric-react/lib/Label';
import BookSearch from './book-search';
import Progress from './Progress';

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listItems: [],
    };
  }

  componentDidMount() {
    this.setState({
      listItems: [
        {
          icon: 'Ribbon',
          primaryText: 'Achieve more with Office integration',
        },
        {
          icon: 'Unlock',
          primaryText: 'Unlock features and functionality',
        },
        {
          icon: 'Design',
          primaryText: 'Create and visualize like a pro',
        },
      ],
    });
  }

  click = async () => {
    return Word.run(async (context) => {
      /**
       * Insert your Word code here
       */

      // insert a paragraph at the end of the document.
      const paragraph = context.document.body.insertParagraph(
        'Hello World',
        Word.InsertLocation.end,
      );

      // change the paragraph color to blue.
      paragraph.font.color = 'blue';

      await context.sync();
    });
  };

  render() {
    const { title, isOfficeInitialized } = this.props;

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
  }
}
