# WebShape.SetImageData

读取图片，并将其展示在WebShape对象上。

## 语法

express.SetImageData(Path, X, Y, Width, Height)

express   一个代表 WebShape 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Path | 必选 | String | 图片路径 |
| X | 必选 | Number | 图片展示的横坐标 |
| Y | 必选 | Number | 图片展示的纵坐标 |
| Width | 必选 | Number | 图片展示的宽 |
| Height | 必选 | Number | 图片展示的高 |

## 示例

```javascript
//以下示例将c://tmp.png的图片读取为边长为100的正方形，并显示在WebShape的坐标（100，100）处
Application.ActiveWorkbook.Sheets.Item(1).Shapes.Item(1).WebShape.SetImageData("c://tmp.png", 100, 100, 100, 100)
```
