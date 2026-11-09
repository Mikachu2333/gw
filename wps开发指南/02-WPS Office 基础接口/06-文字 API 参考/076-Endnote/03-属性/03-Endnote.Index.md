# Endnote.Index

返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **Endnote** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示所选内容中第一个尾注的索引。*/
function test() {
    if (Application.Selection.Endnotes.Count > 0) {
        alert(Application.Selection.Endnotes.Item(1).Index)
    }
}
```


```JavaScript
/*本示例将活动文档上所有尾注的索引添加到数组 arr 中，然后显示。*/
function test() {
    let endnotes = Application.ActiveDocument.Endnotes
    let arr = []
    for (let i = 1; i <= endnotes.Count; i++) {
        arr.push(endnotes.Item(i).Index)
    }
    alert(arr.toString())
}
```
