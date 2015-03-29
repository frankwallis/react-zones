# react-zones #

use angular 2 zones to automatically re-render your reactjs app

### Usage

var rezone = require('react-zones');
rezone.bootstrap(<App/>, document.body);

You will also need to include zones.js at the top of your index.html:

```
<script src="node_modules/zone.js/zone.js" type="text/javascript"></script>
<script src="node_modules/zone.js/long-stack-trace-zone.js" type="text/javascript"></script>
```

### Overview

react-zone will automatically re-render your application after any execution
react-zone is currently experimental

### Investigate

- Component mixin to create component-scoped zones
- Throttling/Debounce
- Integrate with setState
