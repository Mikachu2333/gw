# WebShape.Visible

返回或设置当前WebShape对象的可见性。可读写。

## 语法

express.Visible

express   一个代表 WebShape 对象的变量。

## 说明

应注意在jsapi返回时，-1代表真，0代表假。


## 示例

```javascript
//以下示例隐藏WebShape对象
function test(){
	Application.ActiveWorkbook.Sheets.Item(1).Shapes.Item(1).WebShape.Visible = 0;
}
```
