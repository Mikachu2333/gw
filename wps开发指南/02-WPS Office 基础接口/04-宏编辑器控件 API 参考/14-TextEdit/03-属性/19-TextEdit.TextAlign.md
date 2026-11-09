# TextEdit.TextAlign

该属性用于指定对象中文本的对齐方式。

## 语法

express.TextAlign

express   一个代表 TextEdit 对象的变量。

## 说明

该属性用于指定对象中文本的对齐方式，可设置为以下值：

| 设置     | 值 | 描述           |
| ------ | - | ------------ |
| Left   | 1 | 文本数字和日期都左对齐  |
| Center | 2 | 文本数字和日期都居中对齐 |
| Right  | 3 | 文本数字和日期都右对齐  |


## 示例

```javascript
/*将TextEdit1中的文本设置为居中对齐*/
function func1()
{
    UserForm1.TextEdit1.TextAlign = 2
}
```
