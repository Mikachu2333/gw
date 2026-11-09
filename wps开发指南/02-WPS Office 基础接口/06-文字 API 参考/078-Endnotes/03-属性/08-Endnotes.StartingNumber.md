# Endnotes.StartingNumber

返回或设置注释编号的起始值。可读/写 **Long** 类型。



## 语法

express.**StartingNumber**

express   一个代表 **Endnotes** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例创建一篇新文档，将尾注的起始编号设置为 10，然后在插入点添加一个尾注。*/
function test() {
    let document = Application.Documents.Add()
    document.Endnotes.StartingNumber = 10
    document.Endnotes.Add(Selection.Range, null, "Text for a footnote")
}
```


```JavaScript
/*本示例显示所选内容中尾注的起始编号。*/
function test() {
    alert(Selection.Endnotes.StartingNumber)
}
```
