# Options.RevisionsBalloonPrintOrientation

返回或设置一个 **WdRevisionsBalloonPrintOrientation** 常量，该常量表示打印时修订和批注气球的方向。可读写。



## 语法

express.**RevisionsBalloonPrintOrientation**

express   一个代表 **Options** 对象的变量。

## 类型

WdRevisionsBalloonPrintOrientation

## 示例


```JavaScript
/*本示例以横向格式打印带有批注的文档，修订和批注气球在页面的一侧，文本在另一侧。*/
function test() {
    Options.RevisionsBalloonPrintOrientation = wdBalloonPrintOrientationForceLandscape
}
```


```JavaScript
/*本示例显示打印时修订和批注气球的方向。*/
function test() {
    switch (Options.RevisionsBalloonPrintOrientation) {
        case wdBalloonPrintOrientationAuto:
            alert("WPS 自动选择适当的方向，以使显示比例系数最接近 100%")
            break
        case wdBalloonPrintOrientationForceLandscape:
            alert("WPS 强制以横向模式打印所有节，而不管原始方向如何，并在与文档文本相反的一侧打印修订和批注球")
            break
        case wdBalloonPrintOrientationPreserve:
            alert("WPS 保留未加批注的原始文档的方向")
            break
    }
}
```
