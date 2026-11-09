# PageSetup.DifferentFirstPageHeaderFooter

如果第一页使用了不同的页眉或页脚，则为 **msoTrue** 。该属性值可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。 **Long** 类型，可读写。



## 语法

express.**DifferentFirstPageHeaderFooter**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例检查活动文档的每一节，查找第一页是否有不同的页眉和页脚，如果有，则显示一条消息。*/
function test() {
    let section = ActiveDocument.Sections
    for (let i = 1; i <= section.Count; i++) {
        if (section.Item(i).PageSetup.DifferentFirstPageHeaderFooter == msoTrue) {
            alert(`Section ${i} has different first page headers&footers.`)
        }
    }
}
```


```JavaScript
/*本示例显示所选内容的第一节的第一页和其他页是否有不同的页眉和页脚。*/
function test() {
    switch (Selection.Sections.Item(1).PageSetup.DifferentFirstPageHeaderFooter){
        case msoTrue:
            alert("第一页和其他页的页眉和页脚不同")
            break
        case msoFalse:
            alert("第一页和其他页的页眉和页脚相同")
            break
    }
}
```
