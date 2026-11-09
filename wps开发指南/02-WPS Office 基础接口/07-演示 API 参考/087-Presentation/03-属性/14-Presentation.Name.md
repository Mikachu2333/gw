# Presentation.Name

演示文稿的名称包括文件扩展名（对于已注册的文件类型），但不包括其路径。不能使用该属性来设置名称。如果需要更改名称，请使用 **[SaveAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/SaveAs)** 方法将演示文稿另存为其他名称。 **String** 类型，只读。



## 语法

express.**Name**

express   一个代表 **Presentation** 对象的变量。

## 类型

string

## 说明


如果包含对象的集合的 **Item** 方法采用 **Variant** 参数，则将对象名称与 **Item** 方法结合使用，以返回对对象的引用。例如，如果形状的 **Name** 属性值为 Rectangle 2，.Shapes("Rectangle 2") 则返回对该形状的引用。



## 示例


```JavaScript
/*本示例显示活动演示文稿名称。*/
function test() {
    alert(ActivePresentation.Name)
}
```


```JavaScript
/*本示例显示第三篇演示文稿名称。*/
function test() {
    alert(Presentations.Item(3).Name)
}
```
