# WebShape.GetProperty

获取WebShape对象对应键的属性。

## 语法

express.GetProperty(Key)

express   一个代表 WebShape 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Key | 必选 | String | 属性的键。 |

## 示例

```javascript
Application.ActiveWorkbook.Sheets.Item(1).Shapes.Item(1).WebShape.GetProperty("wps")
```
