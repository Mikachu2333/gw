# Options.AutoCreateNewDrawings

如果为 **True** ，则 WPS 在绘图画布上画出新创建的图形。 **Boolean** 类型，可读写。



## 语法

express.**AutoCreateNewDrawings**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


 **AutoCreateNewDrawings** 属性只能影响从 WPS 内部添加的图形。如果图形是通过 JavaScript 代码添加的，则此选项设置为 **True** 或 **False** 都没有关系，因为它们是按照代码的指定添加的。



## 示例


```JavaScript
/*本示例设置 WPS 直接在文档中添加新创建的图形，而不通过绘图画布。*/
function test() {
    Options.AutoCreateNewDrawings = false
}
```


```JavaScript
/*本示例判断如果 WPS 能直接在文档中添加新创建的图形，则显示消息。*/
function test() {
    if (!Options.AutoCreateNewDrawings) {
        alert("WPS 能直接在文档中添加新创建的图形")
    }
}
```
