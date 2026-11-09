# Options.PictureWrapType

设置或返回一个 **WdWrapTypeMerged** 类型的值，该值表示 WPS 在图片周围环绕文字的方式。可读写。



## 语法

express.**PictureWrapType**

express   一个代表 **Options** 对象的变量。

## 类型

WdWrapTypeMerged

## 说明


这是默认的选项设置并对所有插入的图片有效，除非为图片单独定义图片环绕。



## 示例


```JavaScript
/*本示例将 WPS 设置为以嵌入方式在文本中插入并粘贴所有图片（如果尚未指定嵌入格式）。*/
function test() {
    if (Options.PictureWrapType != wdWrapMergeInline) {
        Options.PictureWrapType = wdWrapMergeInline
    }
}
```


```JavaScript
/*本示例显示 WPS 在图片周围环绕文字的方式是否为wdWrapMergeBehind。*/
function test() {
    alert(Options.PictureWrapType == wdWrapMergeBehind)
}
```
