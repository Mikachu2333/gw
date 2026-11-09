# Background.AddBackgroundColor

添加纯色背景。

## 语法

express.**AddBackgroundColor**

express   一个代表 **Background** 对象的变量。

## 参数说明

| 参数 | 类型 | 必需 | 说明 |
|-----|------|------|------|
| Color | number | 是 | 背景颜色，`0x00BBGGRR` 格式整数（注意：非 RGB，字节顺序为蓝-绿-红），如纯红色 = `0x000000FF`，纯蓝色 = `0x00FF0000`，白色 = `0x00FFFFFF` |
| PageRange | string | 否 | 页码范围，如 `"1-5"`；省略则应用于全部页面 |
| Rotation | number | 否 | 旋转角度（度），默认 0 |
| Opacity | number | 否 | 不透明度 (0.0–1.0) |
| Scale | number | 否 | 缩放比例 |
| HorizontalAlignment | number | 否 | 水平对齐：`0`=左，`1`=中，`2`=右 |
| VerticalAlignment | number | 否 | 垂直对齐：`0`=上，`1`=中，`2`=下 |
| HorizontalOffset | number | 否 | 水平偏移量 |
| VerticalOffset | number | 否 | 垂直偏移量 |
| Unit | number | 否 | 偏移单位：`0`=点，`1`=英寸，`2`=毫米，`3`=厘米 |


## 返回值

无

## 示例

```JavaScript
var bg = app.ActiveDocument.Background;
bg.AddBackgroundColor(0xFFFFFF); // 白色背景
```
