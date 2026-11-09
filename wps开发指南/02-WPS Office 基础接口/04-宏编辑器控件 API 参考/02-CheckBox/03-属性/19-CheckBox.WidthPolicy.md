# CheckBox.WidthPolicy

获取或设置指定对象的宽度策略。

## 语法

express.WidthPolicy

express   一个代表 CheckBox 对象的变量。

## 说明

获取或设置指定对象的宽度策略，可设置为以下值：

| 设置        | 值 | 属性   |
| --------- | - | ---- |
| Expanding | 1 | 可变宽度 |
| Fixed     | 2 | 固定宽度 |


## 示例

```javascript
/*将CheckBox1的宽度设置为固定*/
function func1()
{
    UserForm1.CheckBox1.WidthPolicy = 2
}
```
