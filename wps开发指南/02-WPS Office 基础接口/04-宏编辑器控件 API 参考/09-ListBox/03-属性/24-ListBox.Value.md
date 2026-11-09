# ListBox.Value

确定或指定列表框中的哪个值或选项被选中。

## 语法

express.Value

express   一个代表 ListBox 对象的变量。

## 说明

确定或指定列表框中的哪个值或选项被选中， 当列表框的 **[MultiSelect](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-control-api/ListBox/member/MultiSelect)** 属性为 **fmMultiSelectMulti** 或 **fmMultiSelectExtended** 时，该属性始终为空。


## 示例

```javascript
/*将ListBox1控件中的选项指定为test test*/
function func1()
{
    UserForm1.ListBox1.Value = "test test"
}
```
