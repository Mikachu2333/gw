# Options.AddBiDirectionalMarksWhenSavingTextFile

如果 WPS 在将文档保存为文本文件时添加双向控制字符，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AddBiDirectionalMarksWhenSavingTextFile**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


如果保存文本文件时带有双向控制符，则可保留从右向左和从左向右的属性，以及中性字符的顺序。



## 示例


```JavaScript
/*本示例设置 WPS 在将文档保存为文本文件时添加双向控制字符。*/
function test() {
    Options.AddBiDirectionalMarksWhenSavingTextFile = true
}
```


```JavaScript
/*本示例判断 WPS 在将文档保存为文本文件时是否添加双向控制字符，并通知用户。*/
function test() {
    if (Application.Options.AddBiDirectionalMarksWhenSavingTextFile) {
        alert("WPS 在将文档保存为文本文件时添加双向控制字符")
    } else {
        alert("WPS 在将文档保存为文本文件时未添加双向控制字符")
    }
}
```
