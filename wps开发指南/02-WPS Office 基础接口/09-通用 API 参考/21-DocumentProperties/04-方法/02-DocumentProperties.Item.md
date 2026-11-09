# DocumentProperties.Item

获取 **DocumentProperties** 集合中的一个 **DocumentProperty** 对象。只读。



## 语法

express.**Item(Index)**

express   一个代表 **DocumentProperties** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的文档属性的名称或索引号。 |

## 返回值

DocumentProperty

## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档中第一个自定义文档属性的名称。*/
function test() {
    alert(ActiveDocument.CustomDocumentProperties.Item(1).Name)
}
```


```JavaScript
/*本示例运行于文字组件，在光标处插入第一个文档上名为“KSOProductBuildVer”的自定义属性的值。*/
function test() {
    Selection.TypeText(Documents.Item(1).CustomDocumentProperties.Item("KSOProductBuildVer").Value)
}
```
