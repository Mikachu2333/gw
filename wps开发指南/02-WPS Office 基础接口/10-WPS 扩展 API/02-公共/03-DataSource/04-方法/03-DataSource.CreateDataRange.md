# DataSource.CreateDataRange

为选定的单元格创建DataRange对象。

## 语法

express.CreateDataRange(Range)

express   一个代表 DataSource 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 可选 | Variant | 代表单元格的字符串或者Range对象。 |

## 返回值

Object

## 说明

参数Range可以为代表单元格的字符串或者Range对象，当为空或字符串时，会弹出对话框输入单元格地址。形如“sheet1!$a$1”的字符串表示sheet1中A1单元格。返回值为DataRange。


## 示例

```javascript
//下列示例为Sheet1中的A1单元格创建DataRange对象
Application.ActiveWorkbook.Sheets.Item(1).Shapes.Item(1).WebShape.DataSource.CreateDataRange("sheet1!$a$1")
```
