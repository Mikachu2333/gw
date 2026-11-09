# Application.ShowQuickAnalysis

控制选择时是否显示快速分析上下文用户界面。True表示将显示“快速分析”按钮。Boolean 类型，可读写。



## 语法

express.**ShowQuickAnalysis**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在选择时隐藏“快速分析”按钮。*/
function test() {
    Application.ShowQuickAnalysis = false
}
```


```JavaScript
/*本示例演示 ShowQuickAnalysis 属性的数据类型，并将 ShowQuickAnalysis 属性的值设置为true。*/
function test() {
    alert("ShowQuickAnalysis属性的数据类型为：" + typeof Application.ShowQuickAnalysis)
    Application.ShowQuickAnalysis = true
}
```
