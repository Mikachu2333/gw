# PageSetup.SuppressEndnotes

如果在下一个没有隐藏尾注的节的末尾打印尾注，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**SuppressEndnotes**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（int4 精度）

## 说明


在该节的尾注之前打印隐藏的尾注。仅当 **Location** 属性设为 **wdEndOfSection** 时，该属性才有效。



## 示例


```JavaScript
/*本示例隐藏活动文档中第一节的尾注。*/
function test() {
    if (ActiveDocument.Endnotes.Location == wdEndOfSection) {
        ActiveDocument.Sections.Item(1).PageSetup.SuppressEndnotes = msoTrue
    }
}
```


```JavaScript
/*本示例显示是否隐藏活动文档中第一节的尾注。*/
function test() {
    alert(ActiveDocument.Sections.Item(1).PageSetup.SuppressEndnotes == msoTrue)
}
```
