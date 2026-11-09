# View.Draft

如果窗口中的所有文本以具有最少格式信息的相同的 sans-serif 字体显示以加速显示，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Draft**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例以草稿字体显示第一个窗口的内容。*/
function test() {
    let view = Windows.Item(1).View
    view.Draft = true
}
```


```JavaScript
/*本示例切换活动窗口的草稿字体选项。*/
function test() {
    ActiveDocument.ActiveWindow.View.Draft = !ActiveDocument.ActiveWindow.View.Draft
}
```
