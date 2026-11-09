# Watermark.AddImageWatermark

添加图片水印。

## 语法

express.**AddImageWatermark**

express   一个代表 **Watermark** 对象的变量。

## 参数说明

| 参数 | 类型 | 必需 | 说明 |
|-----|------|------|------|
| ImagePath | string | 是 | 本地图片文件绝对路径 |
| PageRange | string | 否 | 页码范围，如 `"1-5"`；省略则全部页面 |
| Rotation | number | 否 | 旋转角度（度） |
| Opacity | number | 否 | 不透明度 (0.0–1.0) |
| Scale | number | 否 | 缩放比例 |
| HorizontalAlignment | number | 否 | 水平对齐：`0`=左，`1`=中，`2`=右 |
| VerticalAlignment | number | 否 | 垂直对齐：`0`=上，`1`=中，`2`=下 |
| HorizontalOffset | number | 否 | 水平偏移量 |
| VerticalOffset | number | 否 | 垂直偏移量 |
| Unit | number | 否 | 单位：`0`=点，`1`=英寸，`2`=毫米，`3`=厘米 |

## 返回值

无

## 示例

```JavaScript
var watermark = app.ActiveDocument.Watermark;
watermark.AddImageWatermark("D:\\logo.png");
```
