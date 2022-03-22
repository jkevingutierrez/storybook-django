import React from 'react';

import { Pattern } from '../../../../../../src/react';

import './customers-header.html';

export default { component: Pattern, title: 'Customers / Header' };

export const header = () => (
  <Pattern
    filename={__filename}
    request={{ path: 'test' }}
    search_query="Potato"
  />
);
