# WebShape.Delete

删除当前WebShape对象。

## 语法

express.Delete()

express   一个代表 WebShape 对象的变量。

## 示例

```javascript
//以下示例删除Sheet中第一个WebShape
function test(){
	let webShape = Application.ActiveWorkbook.Sheets.Item(1).Shapes.Item(1).WebShape;
	webShape.Delete();
}
```
