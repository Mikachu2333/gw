# Field.Kind

返回 **Field** 对象的链接类型。只读 **WdFieldKind** 类型。



## 语法

express.**Kind**

express   一个代表 **Field** 对象的变量。

## 类型

WdFieldKind

## 示例


```JavaScript
/*本示例更新活动文档中的所有热链接域。*/
function test() {
    let fields = ActiveDocument.Fields
    for (let i = 1; i <= fields.Count; i++) {
        if (fields.Item(i).Kind == wdFieldKindWarm) {
            fields.Item(i).Update()
        }
    }
}
```


```JavaScript
/*本示例显示所选内容中第三个域的链接的类型是否为wdFieldKindHot。*/
function test() {
    alert(Selection.Fields.Item(3).Kind == wdFieldKindHot)
}
```
