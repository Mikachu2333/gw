# View.ShowOtherAuthors

如果应在文档中显示其他作者，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**ShowOtherAuthors**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 说明


默认情况下，使用 WPS 时，其他作者正在进行编辑或者已经从文档的某一部分隔离。在进行共同创作时使用 **ShowOtherAuthors** 属性可切换显示其他作者。



## 示例


```JavaScript
/*本示例显示活动文档的活动窗口上是否展示其他作者。*/
function test() {
    alert(ActiveDocument.ActiveWindow.View.ShowOtherAuthors)
}
```


```JavaScript
/*本示例隐藏第一个窗口的活动窗格中其他作者。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    view.ShowOtherAuthors = false
}
```
