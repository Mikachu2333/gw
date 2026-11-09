# ListBox.Selected

设置或获取列表框的选中项

## 语法

express.Selected(Row, Select)

express   一个代表 ListBox 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Row | 必选 | Number | 要设置或获取的项的行号，从0开始 |
| Select | 可选 | Bool | 设置该行是否被选中 |

## 说明

当不传入Select时，该方法返回列表框Row行的内容是否被选中；传入Select时，该方法设置列表框Row行的选中状态为Select。

当列表框的 **[MultiSelect](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-control-api/ListBox/member/MultiSelect)** 属性设置为 **fmMultiSelectSingle**时，通过 **Selected** 方法设置某行的选中状态为 **true** 时会取消其他行的选中状态；为 **fmMultiSelectMulti** 或 **fmMultiSelectExtended** 时，**Selected** 方法仅改变Row行的选中状态，不影响其他行。


## 示例

```javascript
function func1()
{
    /*设置ListBox1控件的第一行为选中*/
    UserForm1.ListBox1.Selected(0, true);

    /*获取ListBox1控件第二行的选中状态*/
    let str = UserForm1.ListBox1.Selected(0);
}
```
