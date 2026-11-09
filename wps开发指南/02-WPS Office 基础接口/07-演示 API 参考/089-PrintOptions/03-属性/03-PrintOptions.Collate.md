# PrintOptions.Collate

决定是否在打印指定演示文稿的完整副本之后才打印其下一个副本的第一页。可读/写。



## 语法

express.**Collate**

express   一个代表 **PrintOptions** 对象的变量。

## 类型

MsoTriState

## 说明


指定 **[PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/PrintOut)** 方法的 **Collate** 参数值将设置该属性的值。

 **Collate** 属性的值可以是下列 MsoTriState 常量之一：

| 常量 | 说明 |
| ------------ | ------------- |
| **msoFalse**  | 在没有打印指定演示文稿的完整副本时打印其下一个副本的第一页。 |
| **msoTrue** | 默认值。在打印指定演示文稿的完整副本之后才打印其下一个副本的第一页。 |



## 示例


```JavaScript
/*本示例将活动演示文稿逐份打印三份。*/
function test() {
    let printOptions = ActivePresentation.PrintOptions
    printOptions.NumberOfCopies = 3
    printOptions.Collate = msoTrue
    printOptions.Parent.PrintOut()
}
```


```JavaScript
/*本示例显示是否在打印第一篇演示文稿的完整副本之后才打印其下一个副本的第一页。*/
function test() {
    let printOptions = Presentations.Item(1).PrintOptions
    alert(printOptions.Collate == msoTrue)
}
```
