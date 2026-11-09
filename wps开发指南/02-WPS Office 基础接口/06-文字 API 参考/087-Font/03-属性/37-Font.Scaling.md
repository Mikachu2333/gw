# Font.Scaling

返回或设置应用于字体的缩放百分比。 **Long** 类型，可读写。



## 语法

express.**Scaling**

express   一个代表 **Font** 对象的变量。

## 类型

number（int4 精度）

## 说明


本属性以当前字体大小的百分比水平拉长或压缩文字（缩放范围从 1 到 600）。



## 示例


```JavaScript
/*本示例将活动文档中的文字水平拉长到原大小的 110%。*/
function test() {
    ActiveDocument.Content.Font.Scaling = 110
}
```


```JavaScript
/*本示例将第一个文档中第一段的文字压缩到原大小的 90%。*/
function test() {
    let font = Documents.Item(1).Paragraphs.Item(1).Range.Font
    font.Scaling = 90
    font.Bold = msoFalse
}
```
