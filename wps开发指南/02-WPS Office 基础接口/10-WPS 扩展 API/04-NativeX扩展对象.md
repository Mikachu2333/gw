#  NativeX扩展对象

---

**1.背景：**  

 NativeX是提供给第三方开发者用native代码来扩展JS接口的技术方案。JSAPI提供的接口个数有限，当碰到不满足需求的情况下，第三方开发者可以用native代码(c++/ruby/python等)来扩展JS接口，加载第三方NativeX模块后，实现在JSAPI中使用自己扩展的接口。例如第三方开发者可以利用发布的SDK，将复杂的算法（如加密，解密算法）实现并生成dll或者so，提供给NativeX对象加载在JSAPI中使用。

###  2.使用SDK生成dll

 NativeX对象中有三种调用方式Get,Set和Execute，在SDK中注册属性和函数名，指定回调函数，参数个数和参数类型，示例代码如下。

![](https://cloudcdn.qwps.cn/open/_img/9be7a5a7f4.png)

 JSWpsRootObject为根对象，如果想返回NativeX子对象，创建JSWpsSubObject\_1类，同样是继承父类NativeXObjectBase，在根对象处理返回值时，将NativeX子对象的指针返回即可。

![](https://cloudcdn.qwps.cn/open/_img/9c41ae5e20.png) 

###  3.注册工具

 使用NativeX扩展对象之前，需要使用ksomisc工具将dll路径注册到文件中。

![](https://cloudcdn.qwps.cn/open/_img/faf95c0747.png) 

 调用ksomisc程序，-regnativex参数设置dll路径，\-unregnativex参数反注册，\-i参数设置是否为进程内调用。在%AppData%\\kingsoft\\wps\\jsaddons\\binary\\目录下生成WPSNativeX.conf文件，WPSNativeX.conf文件中包含了此dll中是否曾经发生过崩溃信息，dll路径信息，是否进程内调用信息。

![](https://cloudcdn.qwps.cn/open/_img/6520ea6de8.png) 

  
###  4.JSAPI中调用Nativex对象：

 使用根对象下的CreateObject方法创建NativeX对象，参数为利用SDK生成dll的名字。可以先将使用代码片段写入到加载项的按钮中，也可以直接在JS调试器中单步调用。NativeX扩展对象支持创建子对象，支持创建多实例，支持创建多对象。

![](https://cloudcdn.qwps.cn/open/_img/383f3fa135.png)
