# Application.IsSandboxed

如果指定的工作簿在受保护的视图窗口打开，则返回 **True** 。只读。



## 语法

express.**IsSandboxed**

express   一个代表 **Application** 对象的变量。

## 类型

**Boolean** 

## 说明


使用 **IsSandboxed** 属性可确定工作簿是否已在 **“受保护的视图”** 窗口中打开。



## 示例


```JavaScript
/*本示例显示活动工作簿是否已在“受保护的视图”窗口中打开。*/
function test() {
    alert(ActiveWorkbook.Application.IsSandboxed)
}
```


```JavaScript
/*本示例判断活动工作簿是否已在“受保护的视图”窗口中打开，并通知用户。*/
function test() {
    if (ActiveWorkbook.Application.IsSandboxed) {
        alert("活动工作簿已在“受保护的视图”窗口中打开")
    } else {
        alert("活动工作簿未在“受保护的视图”窗口中打开")
    }
}
```
