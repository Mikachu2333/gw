# TabStop.CustomTab

如果指定的制表位为自定义制表位，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**CustomTab**

express   一个代表 **TabStop** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例对活动文档首段的所有制表位进行查找，并将所找到的自定义制表位设置为左对齐。*/
function test() {
    let tabStops = ActiveDocument.Paragraphs.Item(1).TabStops
    for (let i = 1; i <= tabStops.Count; i++) {
        if (tabStops.Item(i).CustomTab) {
            tabStops.Item(i).Alignment = wdAlignTabLeft
        }
    }
}
```


```JavaScript
/*本示例显示选中的第一个段落的第二个制表位是否为自定义制表位。*/
function test() {
    alert(Application.Selection.Paragraphs.Item(1).TabStops.Item(2).CustomTab)
}
```
