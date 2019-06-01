
// 监听tap事件，解决 a标签 不能跳转页面问题  
mui('body').on('tap','a',function(){document.location.href=this.href;});  