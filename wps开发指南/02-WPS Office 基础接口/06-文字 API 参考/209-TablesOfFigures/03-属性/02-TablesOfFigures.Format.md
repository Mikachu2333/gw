# TablesOfFigures.Format

返回或设置指定文档中图表目录的格式设置。 **WdTofFormat** 类型，可读写。



## 语法

express.**Format**

express   一个代表 **TablesOfFigures** 对象的变量。

## 类型

WdTofFormat

## 示例


```JavaScript
/*本示例对活动文档中的图表目录应用“古典”格式。*/
function test() {
    ActiveDocument.TablesOfFigures.Format = wdTOFClassic
}
```


```JavaScript
/*本示例判断活动文档中的图表目录是否为居中格式，并通知用户。*/
function test() {
    if (ActiveDocument.TablesOfFigures.Format == wdTOFCentered) {
        alert('图表目录为居中格式')
    } else {
        alert('图表目录为其他格式')
    }
}
```
