# WebShape.SetProperty

设置WebShape属性的键值对。

## 语法

express.SetProperty(Key, Value)

express   一个代表 WebShape 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Key | 必选 | String | 属性的键 |
| Value | 可选 | String | 属性的值 |

## 示例

```javascript
Application.ActiveWorkbook.Sheets.Item(1).Shapes.Item(1).WebShape.SetProperty("wps", "wps")
```
