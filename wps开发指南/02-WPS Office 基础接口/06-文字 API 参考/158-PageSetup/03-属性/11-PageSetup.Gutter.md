# PageSetup.Gutter

返回或设置文档或节的每一页的额外页边距的大小（以磅为单位），以备装订需要。 **Single** 类型，可读写。



## 语法

express.**Gutter**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（float 精度）

## 说明


如果将 **[MirrorMargins](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/MirrorMargins)** 属性设置为 **msoTrue** ，则 **Gutter** 属性会将额外页边距添至内边距。否则，将额外页边距添至左边距。



## 示例


```JavaScript
/*本示例将活动文档的内边距增加 1 英寸（72 磅）。*/
function test() {
    ActiveDocument.PageSetup.MirrorMargins = msoTrue
    ActiveDocument.PageSetup.Gutter = 72
}
```


```JavaScript
/*本示例显示第一个文档内边距大小。*/
function test() {
    alert(`${Documents.Item(1).PageSetup.Gutter} 磅`)
}
```
