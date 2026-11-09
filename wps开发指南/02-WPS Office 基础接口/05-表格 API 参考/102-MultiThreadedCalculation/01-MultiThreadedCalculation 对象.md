# MultiThreadedCalculation 对象

返回或设置并发计算模式。


## 示例


```JavaScript
/*本示例将并发计算模式的线程模式设置为xlThreadModeManual，并将一部分进程的线程总数设置为5。*/
function test() {
    Application.MultiThreadedCalculation.ThreadMode = xlThreadModeManual
    Application.MultiThreadedCalculation.ThreadCount = 5
}
```


```JavaScript
/*本示例判断如果启用并发计算模式，则显示一部分进程的线程总数。*/
function test() {
    if (Application.MultiThreadedCalculation.Enabled) {
        alert(Application.MultiThreadedCalculation.ThreadCount)
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/MultiThreadedCalculation/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/MultiThreadedCalculation/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Enabled](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/MultiThreadedCalculation/member/Enabled) | 使用 **Enabled** 属性可以在运行时启用或禁用 **MultiThreadedCalculation** 对象。可读/写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/MultiThreadedCalculation/member/Parent) | 返回指定对象的父对象。只读。 |
| [ThreadCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/MultiThreadedCalculation/member/ThreadCount) | 获取进程的线程总数，这些线程是指定的 **MultiThreadedCalculation** 对象的一部分。 |
| [ThreadMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/MultiThreadedCalculation/member/ThreadMode) | 返回或设置指定的 **MultiThreadedCalculation** 对象的线程模式。可读/写 **XlThreadMode** 类型。 |