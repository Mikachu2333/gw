# WPS加载项集成业务系统

---

 通过使用wpsjsrpcsdk.js提供的接口，开发者可以很容易的构筑一个web页面；用户通过点击web前端页面上的按钮，让WPS加载项执行一系列操作  

## wpsjsrpcsdk.js提供的能力

 wpsjsrpcsdk.js用于wpsjs加载项，web端前端页面的编写，目前提供三种模式的支持：

* **单进程模式**：用户窗口下仅启动一个wps客户端，用户在web端进行的操作都会反映到该wps客户端下
* **多进程模式**：用户窗口下可以启动多个wps客户端，通过使用创建的WpsClient对象调用wpsjsrpcsdk.js提供的接口，可以将操作发送到该对象对应的wps客户端上，不同的客户端可以执行不同的操作，互不影响
* **多用户模式**（目前仅windows）：多个用户同时登陆一个服务器时，每个用户可以通过web端在自己的窗口下独立地操作wps客户端，不同用户的操作互不影响，支持单进程模式和多进程模式

## wpsjsrpcsdk.js开放的接口

### 管理加载项

---

 web开发人员可以通过下面的接口来管理加载项

| 接口                       | 说明                   |
| ------------------------ | -------------------- |
| WpsAddonMgr.getAllConfig | 获取publish.xml的内容     |
| WpsAddonMgr.verifyStatus | 检查ribbon.xml文件内容是否有效 |
| WpsAddonMgr.enable       | 启用加载项                |
| WpsAddonMgr.disable      | 禁用加载项                |

  
### 单进程模式 

---

 web开发人员可以通过下面的接口，以单进程模式来唤起wps客户端并跟加载项进行交互，

| 接口                        | 说明                     |
| ------------------------- | ---------------------- |
| WpsInvoke.InvokeAsHttp    | 以http协议启动wps客户端        |
| WpsInvoke.InvokeAsHttps   | 以https协议启动wps客户端       |
| WpsInvoke.RegWebNotify    | 注册一个前端页面接收WPS传来消息的方法   |
| WpsInvoke.CreateXHR       | 创建一个xhr对象              |
| WpsInvoke.IsClientRunning | 判断当前客户端是否在运行           |
| WpsInvoke.ClientType      | 指定加载项类型，wps / et / wpp |

### 多进程模式 

----
  
web开发人员可以通过下面的接口，以多进程模式来唤起wps客户端并跟加载项进行交互  

| 接口                             | 说明                     |
| ------------------------------ | ---------------------- |
| WpsClient                      | 构造函数，用来创建一个WpsClient对象 |
| wpsClient.InvokeAsHttp         | 以http启动wps客户端          |
| wpsClient.InvokeAsHttps        | 以https启动wps客户端         |
| wpsClient.onMessage            | 消息注册函数的回调函数            |
| wpsClient.StartWpsInSilentMode | 以静默模式启动wps客户端          |
| wpsClient.ShowToFront          | 显示wps客户端到最前面           |
| wpsClient.CloseSilentClient    | 关闭未显示出来的静默启动的wps客户端    |
| wpsClient.IsClientRunning      | 判断当前客户端是否在运行           |
| wpsClient.jsPluginsXml         | 指定加载项路径                |

  
### 多用户模式 

---

 web开发人员可以通过下面的接口，启用多用户模式

| 接口                | 说明      |
| ----------------- | ------- |
| EnableMultiUser() | 启用多用户模式 |

  
## wpsjsrpcsdk.js的使用

### 管理加载项

---

 开发者可以通过我们注册到window上的一个对象WpsAddonMgr，来管理WPS加载项，包括安装、卸载、检查加载项可用性以及获取加载项配置的功能 

 注册到WpsAddonMgr对象上的接口有以下四个，开发者可以参考下面的示例代码复制和参数说明 

 通过WpsAddonMgr，可以调用的接口包括： 

* **WpsAddonMgr.getAllConfig**

> 通过该接口可以获得publish.xml的内容，查看加载项配置，包含一个参数
> 
> **代码示例：** 
> 
> ```php
> function installWpsAddin(callBack){
>    WpsAddonMgr.getAllConfig(function(e){
>        if(!e.response||e.response.indexOf("null")>=0){//本地没有加载项，直接安装
>            if(curList.length>0){
>                installWpsAddinOne(callBack);
>            } 
>        }else{//本地有加载项，先卸载原有加载项，然后再安装
>            localList=JSON.parse(e.response)
>            unInstallWpsAddinOne(callBack)
>        }
>    })
> }
> ```
> 
> **参数说明：** 
> 
> | 参数名      | 数据类型     | 描述         | 必选（默认值） |
> | -------- | -------- | ---------- | ------- |
> | callback | function | 执行成功后的回调函数 | 否（null） |
> 
>  

* **WpsAddonMgr** **.** **verifyStatus**

> 通过该接口可以获得加载项ribbon.xml的内容，通过格式检查可以判断该加载项是否有效，包含两个参数 

> **代码示例：** 
> 
> ```javascript
> var element = {
>    "name": "WpsOAAssist",
>    "addonType": "wps",
>    "online": "true",
>    "url": "http://127.0.0.1:3888/plugin/wps/"
> }
> WpsAddonMgr.verifyStatus(element, function(result) {
>    console.log(result.msg)
> })
> ```
> 
> **参数说明：** 
> 
> | 参数名      | 数据类型     | 描述             | 必选（默认值） |
> | -------- | -------- | -------------- | ------- |
> | element  | object   | JSON对象，包含加载项信息 | 是       |
> | callback | function | 执行成功后的回调函数     | 否（null） |

>  

* **WpsAddonMgr.** **enable**

> 通过该接口可以安装指定的加载项 

> **代码示例：** 
> 
> ```javascript
> var element = {
>    "name": "WpsOAAssist",
>    "addonType": "wps",
>    "online": "true",
>    "url": "http://127.0.0.1:3888/plugin/wps/"
> }
> WpsAddonMgr.enable(element, function (result) {
>    if (result.status) {
>        console.log(result.msg)
>    } else {
>        console.log("安装成功")
>    }
> })
> ```
> 
> **参数说明：** 
> 
> | 参数名      | 数据类型     | 描述             | 必选（默认值） |
> | -------- | -------- | -------------- | ------- |
> | element  | object   | JSON对象，包含加载项信息 | 是       |
> | callback | function | 执行成功后的回调函数     | 否（null） |

* **WpsAddo** **nMgr.** **disable**

> 通过该接口可以卸载指定的加载项 

> **代码示例：** 
> 
> ```javascript
> var element = {
>    "name": "WpsOAAssist",
>    "addonType": "wps",
>    "online": "true",
>    "url": "http://127.0.0.1:3888/plugin/wps/"
> }
> WpsAddonMgr.disable(element, function (result) {
>    if (result.status) {
>        console.log(result.msg)
>    } else {
>        console.log("卸载成功")
>    }
> })
> ```
> 
> **参数说明：** 
> 
> | 参数名      | 数据类型     | 描述             | 必选（默认值） |
> | -------- | -------- | -------------- | ------- |
> | element  | object   | JSON对象，包含加载项信息 | 是       |
> | callback | function | 执行成功后的回调函数     | 否（null） |

##  单进程模式

---

 开发者可以通过我们注册到window上的一个对象WpsInvoke，来使用WPS加载项的单进程模式，该对象包含了我们注册进去的，web页面可以调用的接口

 注册到WpsInvoke对象上的接口有以下六个，开发者可以参考下面的示例代码复制和参数说明

 通过WpsInvoke，可以调用的接口包括：

* **WpsInvoke.InvokeAsHttp**

> 该接口通过http协议发送请求，包含八个参数 

> **代码示例：**
> 
> ```php
> function openOfficeFile(param) {
>    var invokeParam = {
>        flag: "openOfficeFile",
>        filepath: param
>    }
>    WpsInvoke.InvokeAsHttp(
>        projInfo.type,
>        projInfo.name,
>        "openOfficeFileFromSystemDemo",
>        JSON.stringify(invokeParam),
>        callbackFunc)
> }
> ```
> 
> **参数说明：**
> 
> | 参数名          | 数据类型     | 描述                   | 必选（默认值）  |
> | ------------ | -------- | -------------------- | -------- |
> | clientType   | string   | 加载项类型                | 是        |
> | name         | string   | 加载项名称                | 是        |
> | func         | string   | 要调用的wps加载项中的函数名      | 是        |
> | param        | json     | func调用的函数所需要的参数      | 是        |
> | callback     | function | 接口执行成功后的回调函数         | 否（null）  |
> | showToFront  | bool     | 是否将wps客户端显示到前面来      | 否（true）  |
> | jsPluginsXml | string   | 指定jsplugins.xml文件的地址 | 否（null）  |
> | silentMode   | bool     | 是否静默启动               | 否（false） |

> 

* **WpsInvoke.InvokeAsHttps**

> 该接口通过http协议发送请求，包含八个参数 
> 
> **代码示例：** 
> 
> ```php
> function openOfficeFile(param) {
>    var invokeParam = {
>        flag: "openOfficeFile",
>        filepath: param
>    }
>    WpsInvoke.InvokeAsHttps(
>        projInfo.type,
>        projInfo.name,
>        "openOfficeFileFromSystemDemo",
>        JSON.stringify(invokeParam),
>        callbackFunc)
> }
> ```
> 
> **参数说明：** 
> 
> | 参数名          | 数据类型     | 描述                   | 必选（默认值）  |
> | ------------ | -------- | -------------------- | -------- |
> | clientType   | string   | 加载项类型                | 是        |
> | name         | string   | 加载项名称                | 是        |
> | func         | string   | 要调用的wps加载项中的函数名      | 是        |
> | param        | json     | func调用的函数所需要的参数      | 是        |
> | callback     | function | 接口执行成功后的回调函数         | 否（null）  |
> | showToFront  | bool     | 是否将wps客户端显示到前面来      | 否（true）  |
> | jsPluginsXml | string   | 指定jsplugins.xml文件的地址 | 否（null）  |
> | silentMode   | bool     | 是否静默启动               | 否（false） |

* **WpsInvoke.RegWebNotify**

> 该接口发送注册请求，用于接收wps客户端发回来的消息，包含三个参数

> **代码示例：**
> 
> ```javascript
> WpsInvoke.RegWebNotify(WpsInvoke.ClientType.wps, pluginName, function (messageText) {
>    var span = document.getElementById("webnotifyspan")
>    span.innerHTML = "(次数：" + ++WebNotifycount + ")：" + messageText;
> })
> ```
> 
> **参数说明：** 
> 
> | 参数名        | 数据类型     | 描述         | 必选（默认值） |
> | ---------- | -------- | ---------- | ------- |
> | clientType | string   | 加载项名称      | 是       |
> | name       | string   | 加载项类型      | 是       |
> | callback   | function | 收到消息后的回调函数 | 否（null） |
> 
>  

* **WpsInvoke.CreateXHR**

> 该接口返回一个可用于进行数据传输的http对象，无参数 
> 
> **代码示例：** 
> 
> ```csharp
> /*创建一个http请求对象*/
> var httpObj = WpsInvoke.CreateXHR()
> ```

* **WpsInvoke.IsClientRunning**

> 该接口用于查看wps客户端是否在运行，包含两个参数 
> 
> **代码示例：** 
> 
> ```javascript
> WpsInvoke.IsClientRunning(WpsInvoke.ClientType.wps, function (status) {
>    if (status.response == "Client is running.")
>        alert("任务发送失败，WPS 正在执行其他任务，请前往WPS完成当前任务")
>    else
>        alert("WPS 客户端被关闭了!")
> })
> ```
> 
> **参数说明：** 
> 
> | 参数名        | 数据类型     | 描述         | 必选（默认值） |
> | ---------- | -------- | ---------- | ------- |
> | clientType | string   | 加载项类型      | 是       |
> | callback   | function | 执行成功后的回调函数 | 否（null） |

* **WpsInvoke.ClientType**

> 该接口用于获取加载项类型，返回值为对应的加载项类型，无参数 
> 
> **代码示例：** 
> 
> ```javascript
> WpsInvoke.ClientType.wps
> WpsInvoke.ClientType.wpp
> WpsInvoke.ClientType.et
> ```

##  多进程模式

---

 要使用多进程模式，先要通过我们注册到window上的WpsClient方法，构造一个wpsclient对象，然后通过该对象调用WpsClient里面的接口

 首先，通过WpsClient创建一个对象

**代码示例：**

```csharp
var wpsClient = new WpsClient(WpsInvoke.ClientType.wps);
```

通过上面的代码，可以创建一个wpsClient对象，该对象可以调用WpsClient里面的接口，需要传递加载项类型作为必填参数

 使用创建的wpsClient对象，我们可以调用的接口包括：

* **wpsClient.InvokeAsHttp**

> 该接口通过http协议发送请求，包含五个参数 
> 
> **代码示例：** 
> 
> ```csharp
> var invokeParam = {
>    Index: 'OpenFile',
>    AppType: projInfo.type,
>    filepath: url,
>    params: {
>        date: "2020/02/20"
>    }
> }
> wpsClient.InvokeAsHttp(
>    projInfo.name,
>    "InvokeFromSystemDemo",
>    JSON.stringify(invokeParam),
>    openFileCallbackFunc,
>    false)
> ```

> **参数说明：** 
> 
> | 参数名         | 数据类型     | 描述              | 必选（默认值） |
> | ----------- | -------- | --------------- | ------- |
> | name        | string   | 加载项名称           | 是       |
> | func        | string   | 要调用的wps加载项中的函数名 | 是       |
> | param       | string   | func调用的函数所需要的参数 | 是       |
> | callback    | function | 接口执行成功后的回调函数    | 否（null） |
> | showToFront | bool     | 是否将wps客户端显示到前面来 | 否（true） |

* **wpsClient.InvokeAsHttps**

> 该接口通过https协议发送请求，包含五个参数 
> 
> **代码示例：** 
> 
> ```csharp
> var invokeParam = {
>    Index: 'OpenFile',
>    AppType: projInfo.type,
>    filepath: url,
>    params: {
>        date: "2020/02/20"
>    }
> }
> wpsClient.InvokeAsHttps(
>    projInfo.name,
>    "InvokeFromSystemDemo",
>    JSON.stringify(invokeParam),
>    openFileCallbackFunc,
>    false)
> ```
> 
> **参数说明：** 
> 
> | 参数名         | 数据类型     | 描述                        | 必选（默认值） |
> | ----------- | -------- | ------------------------- | ------- |
> | name        | string   | 加载项名称                     | 是       |
> | func        | string   | 要调用的wps加载项中的函数名           | 是       |
> | param       | string   | func调用的函数所需要的参数，是一个json对象 | 是       |
> | callback    | function | 接口执行成功后的回调函数              | 否（null） |
> | showToFront | bool     | 是否将wps客户端显示到前面来           | 否（true） |

* **wpsClient.onMessage**

> 通过该接口指定收到客户端消息之后的回调函数，无参数 
> 
> **代码示例：** 
> 
> ```javascript
> wpsClient.onMessage = function (messageText) {
>    ++WebNotifycount; var spanDiv = document.getElementById("webnotifyCount" + eleId);
>    spanDiv.innerText = "(次数：" + WebNotifycount + ")："; 
>    var span = document.getElementById("webnotifyspan" + eleId);
>    span.innerHTML = messageText;
> } 
> ```

* **wpsClient.StartWpsInSilentMode**

> 通过该接口静默启动多进程客户端，包含两个参数 
> 
> **代码示例：** 
> 
> ```lua
> wpsClient.StartWpsInSilentMode(projInfo.name, function () {
>    var invokeParam = {
>        Index: 'OpenFile',
>        AppType: projInfo.type,
>        filepath: url,
>        data: {
>            date: "2020/02/20"
>        }
>    }
>    wpsClient.InvokeAsHttp(
>        projInfo.name,
>        "InvokeFromSystemDemo",
>        JSON.stringify(invokeParam),
>        openFileCallbackFunc,
>        false)
> })
> ```
> 
> **参数说明：** 
> 
> | 参数名      | 数据类型     | 描述           | 必选（默认值） |
> | -------- | -------- | ------------ | ------- |
> | name     | string   | 加载项名称        | 是       |
> | callback | function | 接口执行成功后的回调函数 | 否（null） |

* **wpsClient.ShowToFront**

> 通过该接口将客户端显示到最前面，包含两个参数 
> 
> **代码示例：** 
> 
> ```javascript
> wpsClient.ShowToFront(projInfo.name, function () {
>    setProgress(0) 
>    var dlg = document.getElementById("message");
>    dlg.style.display = 'none'; 
>    document.body.style.pointerEvents = "auto"
> });
> ```
> 
> **参数说明：** 
> 
> | 参数名      | 数据类型     | 描述           | 必选（默认值） |
> | -------- | -------- | ------------ | ------- |
> | name     | string   | 加载项名称        | 是       |
> | callback | function | 接口执行成功后的回调函数 | 否（null） |

* **wpsClient.CloseSilentClient**

> 通过该接口可以关闭未显示出来的启动的静默启动客户端，包含两个参数 
> 
> **代码示例：**
> 
> ```javascript
> wpsClient.CloseSilentClient(projInfo.name, function () { 
>    setProgress(0) 
>    var dlg = document.getElementById("message");
>    dlg.style.display = 'none'; 
>    document.body.style.pointerEvents = "auto" 
> });
> ```
> 
> **参数说明：** 
> 
> | 参数名      | 数据类型     | 描述           | 必选（默认值） |
> | -------- | -------- | ------------ | ------- |
> | name     | string   | 加载项名称        | 是       |
> | callback | function | 接口执行成功后的回调函数 | 否（null） |

* **wpsClient.IsClientRunning**

> 通过该接口可以判断启动的客户端是否已关闭，包含一个参数 
> 
> **代码示例：**
> 
> ```lua
> wpsClient.IsClientRunning(function (status) {
>    if (status.response == "Client is running.")
>        alert("任务发送失败，WPS 正在执行其他任务，请前往WPS完成当前任务")
>    else
>        alert("WPS 客户端被关闭了!")
> })
> ```
> 
> **参数说明：** 
> 
> | 参数名      | 数据类型     | 描述           | 必选（默认值） |
> | -------- | -------- | ------------ | ------- |
> | callback | function | 接口执行成功后的回调函数 | 否（null） |

* **wpsClient.jsPluginsXml**

> 通过该接口可以指定jsplugins.xml文件的地址，让客户端加载jsplugins.xml里的加载项，无参数 
> 
> **代** **码** **示** **例** **：** 
> 
> ```ini
> wpsClient.jsPluginsXml = "http://127.0.0.1:8080/jsplugins.xml"
> ```

##  多用户模式

---

 目前多用户模式仅支持windows，且至少需要客户端达到企业版20210525版本

 多用户模式默认处于关闭状态，如果有场景需要用的多用户，开发者可以在编写前端代码时调用接口一次，即可开启多用户模式

```scss
EnableMultiUser();
```

 开启多用户模式后，参考上面描述的方式，书写单进程或多进程代码即可，无需进行其他操作，多用户场景下即可自动支持

  
##  返回值处理

---

 wpsjsrpcsdk.js返回给web前端的数据格式为JSON

 分为两种格式：

 当wps加载项成功执行了业务系统发送的操作时

```yaml
{
    status: 0, 
    response: responseStr
}
```

 返回值的status == 0，加载项的操作的返回值为responseStr

 当wps加载项没有成功执行业务系统发送的操作时

```yaml
{
    status: 1 / 2 / 3 / 4, 
    message: errorMessage
}
```

 返回值的status != 0，返回的错误信息为errorMessage

 因此，可以根据返回值的status，判断操作是否执行成功，然后进行处理

**代码示例：**

```lua
function clientCallbackFunc(result) {
    if (result.status !== 0) {
        if (result.message == "Failed to send message to WPS.") {
            wpsClient.IsClientRunning(function (status) {
                if (status.response == "Client is running.")
                    alert("任务发送失败，WPS 正在执行其他任务，请前往WPS完成当前任务")
                else
                    alert("WPS 客户端被关闭了!")
            })
        } else {
            alert(result.message)
        }
    } else {
        alert(result.response)
    }
}
```
