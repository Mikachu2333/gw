# Label.BorderStyle

指定控件边框的显示方式。

## 语法

express.BorderStyle

express   一个代表 Label 对象的变量。

## 说明

指定控件边框的显示方式，可设置为以下值

| 设置     | 值 | 描述    |
| ------ | - | ----- |
| None   | 0 | 无边框   |
| Single | 1 | 边框为实线 |


## 示例

```javascript
/*将Label1的边框显示方式设置为实线*/
function func1()
{
    UserForm1.Label1.BorderStyle = 1
}
```
