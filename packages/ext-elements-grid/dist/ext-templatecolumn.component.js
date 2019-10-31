import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtTemplatecolumn =
/*#__PURE__*/
function (_Ext_grid_column_Temp) {
  _inheritsLoose(ExtTemplatecolumn, _Ext_grid_column_Temp);

  function ExtTemplatecolumn() {
    var _this;

    _this = _Ext_grid_column_Temp.call(this, [], []) || this;
    _this.xtype = 'templatecolumn';
    return _this;
  }

  return ExtTemplatecolumn;
}(Ext_grid_column_Template);

export { ExtTemplatecolumn as default };
window.customElements.define('ext-templatecolumn', HTMLParsedElement.withParsedCallback(ExtTemplatecolumn));