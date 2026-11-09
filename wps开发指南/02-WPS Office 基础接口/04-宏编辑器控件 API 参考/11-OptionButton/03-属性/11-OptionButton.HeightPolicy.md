# OptionButton.HeightPolicy

获取或设置指定对像的高度策略。

## 语法

express.HeightPolicy

express   一个代表 OptionButton 对象的变量。

## 说明

获取或设置指定对像的高度策略，可设置为以下值：

| 设置        | 值 | 描述   |
| --------- | - | ---- |
| Expanding | 1 | 可变高度 |
| Fixed     | 2 | 固定高度 |


## 示例

```javascript
/*将OptionButton1的高度设置为固定*/
function func1()
{
    UserForm1.OptionButton1.HeightPolicy = 2
}
```
