# Frame.BorderStyle

指定控件边框的显示方式。

## 语法

express.BorderStyle

express   一个代表 Frame 对象的变量。

## 说明

指定控件边框的显示方式，可设置为以下值：

| 设置     | 值 | 描述   |
| ------ | - | ---- |
| None   | 0 | 无边框  |
| Single | 1 | 实现边框 |


## 示例

```javascript
/*将Frame1的边框显示方式设置为实线*/
function func1()
{
    UserForm1.Frame1.BorderStyle = 1
}
```
