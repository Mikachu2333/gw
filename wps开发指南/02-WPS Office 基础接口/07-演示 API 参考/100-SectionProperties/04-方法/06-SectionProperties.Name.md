# SectionProperties.Name

以 **String** 类型返回指定节的名称。



## 语法

express.**Name(sectionIndex)**

express   一个代表 **SectionProperties** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| sectionIndex | 必选 | number（int 精度） | 节在 **SectionProperties** 集合中的索引。 |

## 返回值

String

## 示例


```JavaScript
/*本示例显示第一篇演示文稿中第一个节的名称。*/
function test() {
    alert(Presentations.Item(1).SectionProperties.Name(1))
}
```


```JavaScript
/*本示例在活动演示文稿第一个节的位置添加一个新节，并显示新节的名称。*/
function test() {
    let properties = ActivePresentation.SectionProperties
    properties.AddSection(1, "test")
    alert(properties.Name(1))
}
```
