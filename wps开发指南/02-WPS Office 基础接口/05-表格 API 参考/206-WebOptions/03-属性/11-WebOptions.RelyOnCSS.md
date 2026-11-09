# WebOptions.RelyOnCSS

如果在 Web 浏览器中查看保存的文档时，字体格式使用的是级联样式表 (CSS)，则为 **True** 。ET 会创建一个级联样式表文件，然后依据 **OrganizeInFolder** 属性的值，将该文件保存到指定文件夹或与网页相同的文件夹中。如果使用了 HTML \<FONT\> 标记和级联样式表，则为 **False** 。默认值是 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**RelyOnCSS**

express   一个代表 **WebOptions** 对象的变量。

## 类型

boolean

## 说明


如果 Web 浏览器支持级联样式表，则应将此属性设置为 **True** ，这样，就可以为该网页上提供更精确的布局和格式控制，网页也会更接近原来的文档（如同在 ET 中显示一样）。



## 示例


```JavaScript
/*本示例指定将活动工作簿中的项目保存到网页中时，使用级联样式表。*/
function test() {
    ActiveWorkbook.WebOptions.RelyOnCSS = true
}
```


```JavaScript
/*本示例显示第一张工作簿中的项目保存到网页中时是否使用级联样式表。*/
function test() {
    alert(Workbooks.Item(1).WebOptions.RelyOnCSS)
}
```
