# ScrollBar.Orientation

指定该控件是垂直定向还是水平定向。

## 语法

express.Orientation

express   一个代表 ScrollBar 对象的变量。

## 说明

指定该控件是垂直定向还是水平定向，可以设置为以下值：

| 设置         | 值   | 描述                 |
| ---------- | --- | ------------------ |
| Auto       | \-1 | 根据控件的尺寸自动确定方向（默认）。 |
| Vertical   | 0   | 控件垂直呈现。            |
| Horizontal | 1   | 控件水平呈现。            |


## 示例

```javascript
/*将ScrollBar1垂直呈现*/
function func1()
{
    UserForm1.ScrollBar1.Orientation = 0
}
```
