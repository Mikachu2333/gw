# Workbook.WebOptions

返回一个 **[WebOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WebOptions/obj)** 集合，该集合中包含以网页格式保存文档或打开网页时 ET 所使用的工作簿级别属性。只读。



## 语法

express.**WebOptions**

express   一个代表 **Workbook** 对象的变量。

## 类型

WebOptions

## 示例


```JavaScript
/*本示例指定将第一个工作簿中的项目保存到网页中时，使用级联样式表和 Western 文档编码。*/
function test() {
    let objWO = Workbooks.Item(1).WebOptions
    objWO.RelyOnCSS = true
    objWO.Encoding = msoEncodingWestern
}
```


```JavaScript
/*本示例演示活动工作簿另存为网页时设置为生成图像，且允许使用PNG。*/
function test() {
    let objWO = ActiveWorkbook.WebOptions
    objWO.RelyOnVML = false
    objWO.AllowPNG = true
}
```
