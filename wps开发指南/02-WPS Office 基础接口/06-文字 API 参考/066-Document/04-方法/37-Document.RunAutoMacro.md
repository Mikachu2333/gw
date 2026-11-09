# Document.RunAutoMacro

运行存储于指定文档的自动宏。如果没有自动宏，则不做任何操作。



## 语法

express.**RunAutoMacro(Which)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Which | 必选 | WdAutoMacros | 要运行的自动宏。 |

## 返回值

void

## 说明


使用 **Run** 方法来运行任何宏。



## 示例


```JavaScript
/*本示例运行活动文档中的 AutoOpen 宏。*/
function test() {
    ActiveDocument.RunAutoMacro(wdAutoOpen)
}
```


```JavaScript
/*本示例判断如果第一个文档的名称为“example.docm”，则运行存储在该文档中的自动宏。*/
function test() {
    if (Documents.Item(1).Name == "example.docm") {
        Documents.Item(1).RunAutoMacro(wdAutoNew)
    }
}
```
