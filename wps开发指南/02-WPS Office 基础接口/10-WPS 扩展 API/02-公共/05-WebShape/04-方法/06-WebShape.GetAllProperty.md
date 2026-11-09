# WebShape.GetAllProperty

获取当前WebShape对象的所有属性，返回JSON格式的字符串

## 语法

express.GetAllProperty()

express   一个代表 WebShape 对象的变量。

## 返回值

String


## 示例

```javascript
Application.ActiveWorkbook.Sheets.Item(1).Shapes.Item(1).WebShape.GetAllProperty()
```
