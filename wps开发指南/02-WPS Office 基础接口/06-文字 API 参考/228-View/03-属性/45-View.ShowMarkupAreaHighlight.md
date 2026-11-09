# View.ShowMarkupAreaHighlight

返回或设置 **Boolean** 值，该值表示显示修订和注释气球的标记区域是否带底纹。可读/写。



## 语法

express.**ShowMarkupAreaHighlight**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置活动窗口中修订和注释气球的标记区域不携带底纹。*/
function test() {
    ActiveWindow.View.ShowMarkupAreaHighlight = false
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格的修订和注释气球的标记区域的底纹是否可见。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ShowMarkupAreaHighlight)
}
```
