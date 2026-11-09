# PageSetup.SectionDirection

返回或设置指定节的阅读顺序和对齐方式。 **WdSectionDirection** 类型，可读写。



## 语法

express.**SectionDirection**

express   一个代表 **PageSetup** 对象的变量。

## 类型

WdSectionDirection

## 示例


```JavaScript
/*本示例将活动文档的第一节的方向设置为从右向左。*/
function test() {
    ActiveDocument.Sections.Item(1).PageSetup.SectionDirection = wdSectionDirectionRtl
}
```


```JavaScript
/*本示例显示所选内容第一节的阅读顺序和对齐方式。*/
function test() {
    switch (Selection.Sections.Item(1).PageSetup.SectionDirection) {
        case wdSectionDirectionLtr:
            alert("用左对齐方式和从左到右的阅读顺序显示节。")
            break
        case wdSectionDirectionRtl:
            alert("用右对齐方式和从右到左的阅读顺序显示节。")
            break
    }
}
```
