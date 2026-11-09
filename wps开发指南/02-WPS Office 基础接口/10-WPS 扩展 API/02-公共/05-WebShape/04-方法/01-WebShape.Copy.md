# WebShape.Copy

复制当前WebShape对象至剪切板。

## 语法

express.Copy()

express   一个代表 WebShape 对象的变量。

## 示例

```javascript
//以下示例复制Sheet中第一个WebShape并粘贴
function test(){
	let webShape = Application.ActiveWorkbook.Sheets.Item(1).Shapes.Item(1).WebShape;
	webShape.Copy();
	Application.ActiveWorkbook.ActiveSheet.Paste();
}
```
