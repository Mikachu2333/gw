# Workbook.ConflictResolution

返回或设置更新共享工作簿时解决冲突的方式。 **[XlSaveConflictResolution](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSaveConflictResolution)** 类型，可读写。



## 语法

express.**ConflictResolution**

express   一个代表 **Workbook** 对象的变量。

## 类型

XlSaveConflictResolution

## 说明


| **XlSaveConflictResolution** 可为以下 **XlSaveConflictResolution** 常量之一。 |
| -------------------------------------------------------------------- |
| **xlLocalSessionChanges** 总接受本地用户所做的修改。                              |
| **xlOtherSessionChanges** 总取消本地用户所做的修改。                              |
| **xlUserResolution** 弹出对话框请求用户解决冲突。                                  |



## 示例


```JavaScript
/*本示例使共享工作簿有冲突时总是接受本地用户所做的修改。*/
function test() {
    ActiveWorkbook.ConflictResolution = xlLocalSessionChanges
}
```


```JavaScript
/*本示例演示当活动工作簿ConflictResolution属性为：xlUserResolution时，提示用户并将其设置为：xlOtherSessionChanges。*/
function test() {
    if (ActiveWorkbook.ConflictResolution == xlUserResolution) {
        alert("ConflictResolution当前为：xlUserResolution。关闭提示后设置为：xlOtherSessionChanges")
        ActiveWorkbook.ConflictResolution = xlOtherSessionChanges
    }
}
```
