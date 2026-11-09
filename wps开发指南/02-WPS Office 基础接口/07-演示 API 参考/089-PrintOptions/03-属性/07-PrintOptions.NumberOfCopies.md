# PrintOptions.NumberOfCopies

返回或设置要打印的演示文稿份数。可读/写。



## 语法

express.**NumberOfCopies**

express   一个代表 **PrintOptions** 对象的变量。

## 类型

number（int 精度）

## 说明


指定 **[PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/PrintOut)** 方法的 **Copies** 参数将设置此属性的值。默认值为 1。



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
/*本示例显示要打印的第一篇演示文稿份数。*/
function test() {
    let printOptions = Presentations.Item(1).PrintOptions
    alert(printOptions.NumberOfCopies)
}
```
