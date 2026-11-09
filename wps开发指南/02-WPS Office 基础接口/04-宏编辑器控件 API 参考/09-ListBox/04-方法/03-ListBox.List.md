# ListBox.List

设置或获取ListBox控件中的某一项

## 语法

express.List(Row, Column, Str)

express   一个代表 ListBox 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Row | 必选 | Number | 要设置或获取的项的行号，从0开始 |
| Column | 必选 | Number | 要设置或获取的项的列号，从0开始 |
| Str | 可选 | String | 设置项的文本内容 |

## 说明

当不传入Str时，该方法返回列表框Row行、Column列位置的项的内容；传入Str时，该方法设置列表框Row行、Column列位置的项的内容为Str，此时没有返回值。


## 示例

```javascript
function func1()
{
    /*将"第一行 第一列"设置为ListBox1控件列表框中第一行第一列的项的内容*/
    UserForm1.ListBox1.List(0, 0, "第一行 第一列");

    /*获取ListBox1控件列表框中第一行第一列的项的内容*/
    let str = UserForm1.ListBox1.List(0, 0);
}
```
