# Presentation.SectionProperties

返回一个 **SectionProperties** 对象。只读。



## 语法

express.**SectionProperties**

express   一个代表 **Presentation** 对象的变量。

## 类型

SectionProperties

## 示例


```JavaScript
/*本示例在活动演示文稿指定索引位置添加新节。*/
function test() {
    ActivePresentation.SectionProperties.AddSection(1, "test")
}
```


```JavaScript
/*本示例显示第一篇演示文稿中第一个节的名称。*/
function test() {
    alert(Presentations.Item(1).SectionProperties.Name(1))
}
```
