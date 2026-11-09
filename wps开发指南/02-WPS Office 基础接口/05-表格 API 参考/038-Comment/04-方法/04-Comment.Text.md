# Comment.Text

设置批注文本。



## 语法

express.**Text(Text, Start, Overwrite)**

express   一个代表 **Comment** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Text | 可选 | any | 要添加的文本。 |
| Start | 可选 | any | 所添加文本的起始位置（字符数）。如果省略此参数，则删除批注中的所有现有文字。 |
| Overwrite | 可选 | any | 如果为 True，则覆盖现有文本。默认值是 False（插入文本）。 |

## 返回值

String

## 示例


```JavaScript
/*本示例将 A2 单元格的批注文本设置为"这是一个批注"。*/
function test() {
    Application.Range("A2").Comment.Text("这是一个批注")
}
```


```JavaScript
/*本示例在 A4 单元格的批注内容中第三个字符开始插入“hello”，并显示结果。*/
function test() {
    alert(Application.Range("A4").Comment.Text("hello", 3))
}
```
