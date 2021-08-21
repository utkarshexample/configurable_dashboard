import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
// THEN to get HTML5 drag&drop
import 'gridstack/dist/h5/gridstack-dd-native';
// OR to get legacy jquery-ui drag&drop (support Mobile touch devices, h5 does not yet)
import 'gridstack/dist/jq/gridstack-dd-jqueryui';
// OR nothing to get static grids (API driven, no user drag&drop)



var options = { // put in gridstack options here
    disableOneColumnMode: true, // for jfiddle small window size
    float: false
  };
  var grid = GridStack.init(options);
  
  var count = 0;
  var items = [
      {x: 0, y: 0, w: 2, h: 2},
      {x: 2, y: 0, w: 2},
    {x: 3, y: 1, h: 2},
    {x: 0, y: 2, w: 2},
  ];
  
  addNewWidget = function () {
    var node = items[count] || {
      x: Math.round(12 * Math.random()),
      y: Math.round(5 * Math.random()),
      w: Math.round(1 + 3 * Math.random()),
      h: Math.round(1 + 3 * Math.random())
    };
    node.content = String(count++);
    grid.addWidget(node);
    return false;
  };
  
  addNewWidget();
  addNewWidget();