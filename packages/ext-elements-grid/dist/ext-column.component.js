import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtColumn =
/*#__PURE__*/
function (_Ext_grid_column_Temp) {
  _inheritsLoose(ExtColumn, _Ext_grid_column_Temp);

  function ExtColumn() {
    var _this;

    _this = _Ext_grid_column_Temp.call(this, [], []) || this;
    _this.xtype = 'column';
    return _this;
  }

  return ExtColumn;
}(Ext_grid_column_Template);

export { ExtColumn as default };
window.customElements.define('ext-column', HTMLParsedElement.withParsedCallback(ExtColumn));