# SectionProperties.FirstSlide

返回指定节中第一张幻灯片的索引，如果该节为空，则返回 -1。



## 语法

express.**FirstSlide(sectionIndex)**

express   一个代表 **SectionProperties** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| sectionIndex | 必选 | number（int 精度） | 节的索引。 |

## 返回值

Integer

## 示例


```JavaScript
/*本示例显示活动演示文稿第一个节中第一张幻灯片的索引。*/
function test() {
    let index = ActivePresentation.SectionProperties.FirstSlide(1)
    alert(index)
}
```


```JavaScript
/*本示例判断第一篇演示文稿中第一节是否为空，如果为空，则通知用户；如果不为空，则显示第一节中第一张幻灯片的索引。*/
function test() {
    let properties = Presentations.Item(1).SectionProperties
    if (properties.Count > 0) {
        if (properties.FirstSlide(1) == -1) {
            alert("第一节为空")
        } else {
            alert(properties.FirstSlide(1))
        }
    } else {
        alert("演示文稿中未包含节")
    }
}
```
