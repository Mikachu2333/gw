# PageSetup.GutterPos

返回或设置文档中的装订线位于哪一侧。 **WdGutterStyle** 类型，可读写。



## 语法

express.**GutterPos**

express   一个代表 **PageSetup** 对象的变量。

## 类型

WdGutterStyle

## 示例


```JavaScript
/*本示例设置装订线位于文档的右侧。*/
function test() {
    ActiveDocument.PageSetup.GutterPos = wdGutterPosRight
}
```


```JavaScript
/*本示例显示第一个文档装订线的位置。*/
function test() {
    switch (Documents.Item(1).PageSetup.GutterPos){
        case wdGutterPosLeft:
            alert("装订线位于文档左侧")
            break
        case wdGutterPosTop:
            alert("装订线位于文档顶部")
            break
        case wdGutterPosRight:
            alert("装订线位于文档右侧")
            break
    }
}
```
