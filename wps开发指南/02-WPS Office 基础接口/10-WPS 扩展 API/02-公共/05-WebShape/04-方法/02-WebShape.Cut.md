# WebShape.Cut

剪切当前WebShape对象至剪切板。

## 语法

express.Cut()

express   一个代表 WebShape 对象的变量。

## 示例

```javascript
//以下示例剪切Sheet中第一个WebShape并粘贴
function test(){
	let webShape = Application.ActiveWorkbook.Sheets.Item(1).Shapes.Item(1).WebShape;
	webShape.Cut();
	Application.ActiveWorkbook.ActiveSheet.Paste();
}
```
