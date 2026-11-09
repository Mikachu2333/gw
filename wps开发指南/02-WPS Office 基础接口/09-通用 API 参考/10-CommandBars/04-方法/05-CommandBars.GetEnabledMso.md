# CommandBars.GetEnabledMso

如果启用了 **idMso** 参数标识的控件，则返回 **True** 。



## 语法

express.**GetEnabledMso(idMso)**

express   一个代表 **CommandBars** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| idMso | 必选 | string | 控件的标识符。 |

## 返回值

Boolean

## 示例


```JavaScript
/*本示例运行于各组件，显示是否启用“粗体”按钮。*/
function test() {
    alert(Application.CommandBars.GetEnabledMso("Bold"))
}
```


```JavaScript
/*本示例运行于表格组件，判断如果活动工作簿启用“复制”按钮，则通知用户。*/
function test() {
    if (ActiveWorkbook.CommandBars.GetEnabledMso("Copy")) {
        alert("已启用“复制”按钮")
    }
}
```
