# Watermark.AddTextWatermark

添加文字水印。

## 语法

express.**AddTextWatermark**

express   一个代表 **Watermark** 对象的变量。

## 参数说明

| 参数 | 类型 | 必需 | 说明 |
|-----|------|------|------|
| Text | string | 是 | 水印文字 |
| PageRange | string | 否 | 页码范围，如 "1-5"，省略则全部页面 |
| Rotation | number | 否 | 旋转角度，默认 0 |
| FontName | string | 否 | 字体名称，默认 "宋体" |
| FontSize | number | 否 | 字体大小（磅） |
| FontColor | number | 否 | 字体颜色，BGR 格式整数（注意：非 RGB，字节顺序为蓝-绿-红），如纯红色 = `0x000000FF`，纯蓝色 = `0x00FF0000` |
| FontBold | boolean | 否 | 是否粗体 |
| FontItalic | boolean | 否 | 是否斜体 |
| FontUnderline | boolean | 否 | 是否下划线 |
| Opacity | number | 否 | 不透明度 (0.0-1.0) |
| Scale | number | 否 | 缩放比例 |
| HorizontalAlignment | number | 否 | 水平对齐：0=左，1=中，2=右 |
| VerticalAlignment | number | 否 | 垂直对齐：0=上，1=中，2=下 |
| HorizontalOffset | number | 否 | 水平偏移量 |
| VerticalOffset | number | 否 | 垂直偏移量 |
| Unit | number | 否 | 单位：0=点，1=英寸，2=毫米，3=厘米 |

## 返回值

无

## 示例

```JavaScript
var watermark = app.ActiveDocument.Watermark;
watermark.AddTextWatermark("机密文件");

watermark.AddTextWatermark("内部资料", "1-10", 45, "黑体", 48,
    0x000000FF, true, false, false, 0.5, 1.0, 1, 1, 0, 0, 2);
```
