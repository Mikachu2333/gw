# Workbook.ExclusiveAccess

指定当前用户对共享清单中的工作簿进行独占访问。



## 语法

express.**ExclusiveAccess()**

express   一个代表 **Workbook** 对象的变量。

## 返回值

Boolean

## 说明


 **ExclusiveAccess** 方法保存对指定工作簿的任何更改，并要求其他打开该工作簿的用户将所作改变保存到另外的文件。

如果指定工作簿不是以共享清单形式打开，则本方法无效。若要判断工作簿是否以共享清单模式打开，请对其 **[MultiUserEditing](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/MultiUserEditing)** 属性进行检查。



## 示例


```JavaScript
/*本示例检查活动工作簿是否以共享清单方式打开，如果是，则本示例设置当前用户以独占方式访问工作簿。*/
function test() {
    if (ActiveWorkbook.MultiUserEditing) {
        ActiveWorkbook.ExclusiveAccess()
    }
}
```


```JavaScript
/*本示例演示判断活动工作簿是否是共享工作簿，ExclusiveAccess方法是否执行成功。*/
function test() {
    if (ActiveWorkbook.MultiUserEditing) {
        if (ActiveWorkbook.ExclusiveAccess()) {
            alert("ExclusiveAccess方法执行成功。")
        } else {
            alert("ExclusiveAccess方法执行失败。")
        }
    }
}
```
