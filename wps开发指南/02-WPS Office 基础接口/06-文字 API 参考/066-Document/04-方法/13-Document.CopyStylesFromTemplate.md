# Document.CopyStylesFromTemplate

将指定模板中的样式复制到某篇文档。



## 语法

express.**CopyStylesFromTemplate(Template)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Template | 必选 | string | 模板文件名。 |

## 返回值

void

## 说明


在将某个模板的样式复制到文档时，文档中同名的样式将重新定义为与模板中描述的样式一致。模板的特有样式将复制到文档，文档特有的样式则保持不变。



## 示例


```JavaScript
/*本示例将活动文档的模板的样式复制到文档。*/
function test() {
    ActiveDocument.CopyStylesFromTemplate(ActiveDocument.AttachedTemplate.FullName)
}
```


```JavaScript
/*本示例将模板“Normal.dotm”的样式复制到第一个文档。*/
function test() {
    Documents.Item(1).CopyStylesFromTemplate("D:\\示例\\Normal.dotm")
}
```
