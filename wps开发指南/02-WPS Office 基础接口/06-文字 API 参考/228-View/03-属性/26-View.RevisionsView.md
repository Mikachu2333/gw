# View.RevisionsView

设置或返回一个代表全局选项的 **WdRevisionsView** 常量，该选项用于指定 WPS 是显示文档的原始版本还是应用了修订和格式更改的版本。可读写。




## 语法

express.**RevisionsView**

express   一个代表 **View** 对象的变量。

## 类型

WdRevisionsView

## 示例


```JavaScript
/*本示例在显示文档的原始版本和最终版本之间切换。本示例假定活动窗口中的文档包含由一个或多个审阅者所做的修订，并且修订显示于气球中。*/
function ToggleRevView(){
    if(ActiveWindow.View.RevisionsMode == wdBalloonRevisions){
        if(ActiveWindow.View.RevisionsView == wdRevisionsViewFinal){
            ActiveWindow.View.RevisionsView = wdRevisionsViewOriginal
        }
        else{
            ActiveWindow.View.RevisionsView = wdRevisionsViewFinal
        }
    }
}
```
