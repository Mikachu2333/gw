# Options.PictureEditor

返回或设置用于编辑图片的应用程序的名称。 **String** 类型，可读写。



## 语法

express.**PictureEditor**

express   一个代表 **Options** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置用于编辑图片的应用程序。*/
function test() {
    Options.PictureEditor = "WPS"
}
```


```JavaScript
/*本示例显示用于编辑图片的应用程序的名称。*/
function test() {
    alert(Options.PictureEditor)
}
```
