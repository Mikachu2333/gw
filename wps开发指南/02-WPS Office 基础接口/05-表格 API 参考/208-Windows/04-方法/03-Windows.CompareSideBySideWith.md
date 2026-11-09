# Windows.CompareSideBySideWith

以并排模式打开两个窗口。返回一个 **Boolean** 值。



## 语法

express.**CompareSideBySideWith(WindowName)**

express   一个代表 **Windows** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| WindowName | 必选 | any | 窗口的名称。 |

## 返回值

Boolean

## 说明


不能将 **CompareSideBySideWith** 方法用于 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象或 **[ActiveWorkbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ActiveWorkbook)** 属性。



## 示例


```JavaScript
/*此示例以并排模式打开当前所在工作簿和考勤表两个窗口。*/
function test() {
    Windows.CompareSideBySideWith("考勤表.xlsx")
}
```


```JavaScript
/*此示例以并排模式打开当前所在工作簿和成绩簿两个窗口，并判断执行成功通知用户。*/
function test() {
    if (Windows.CompareSideBySideWith("成绩簿.xlsx")) {
        alert("成功用并排模式打开当前工作簿和成绩簿两个窗口")
    }
}
```
