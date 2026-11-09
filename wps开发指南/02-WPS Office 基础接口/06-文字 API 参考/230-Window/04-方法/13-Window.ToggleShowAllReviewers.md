# Window.ToggleShowAllReviewers

显示或隐藏包含备注和修订的文档中的所有备注。




## 语法

express.**ToggleShowAllReviewers()**

express   一个代表 **Window** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*以下示例显示活动文档中的所有备注。本示例假设文档中存在备注。*/
function test()
{
Application.ActiveWindow.ToggleShowAllReviewers()
}
```
