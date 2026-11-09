# DefaultWebOptions.LoadPictures

在 ET 中打开某个文档时，如果加载图像，则该值为 **True** ，通常这些图像和文档并不是在 ET 中创建的。如果未加载图像，则该值为 **False** 。默认值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**LoadPictures**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使得在 ET 中打开文档时要加载图像。*/
function test() {
    Application.DefaultWebOptions.LoadPictures = true
}
```


```JavaScript
/*此示例显示在 ET 中打开文档时是否要加载图像。*/
function test() {
    alert(Application.DefaultWebOptions.LoadPictures)
}
```
