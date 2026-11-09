# WebShape.DeleteProperty

删除WebShape对象中对象属性的值。

## 语法

express.DeleteProperty(Key)

express   一个代表 WebShape 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Key | 必选 | String | 属性的键。 |

## 示例

```javascript
//以下示例删除WebShape中键为wps的属性
function test(){
	let webShape = Application.ActiveWorkbook.Sheets.Item(1).Shapes.Item(1).WebShape;
	webShape.DeleteProperty("wps");
}
```
