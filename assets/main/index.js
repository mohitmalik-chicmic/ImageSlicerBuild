System.register("chunks:///_virtual/audio.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var r,e,i,o,n,u,a,c;return{setters:[function(t){r=t.applyDecoratedDescriptor,e=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){n=t.cclegacy,u=t._decorator,a=t.AudioSource,c=t.Component}],execute:function(){var s,l,p,d,f;n._RF.push({},"6a8f4CjsTtOUapWzILt+BgW","audio",void 0);var y=u.ccclass,h=u.property;t("Audio",(s=y("Audio"),l=h(a),s((f=r((d=function(t){function r(){for(var r,e=arguments.length,n=new Array(e),u=0;u<e;u++)n[u]=arguments[u];return r=t.call.apply(t,[this].concat(n))||this,i(r,"_audioSource",f,o(r)),r}e(r,t);var n=r.prototype;return n.start=function(){},n.Audiostart=function(){this._audioSource.play()},n.update=function(t){},r}(c)).prototype,"_audioSource",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=d))||p));n._RF.pop()}}}));

System.register("chunks:///_virtual/circularLoader.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,i,c,a,n,o,l,s,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,c=e.assertThisInitialized},function(e){a=e.cclegacy,n=e._decorator,o=e.Label,l=e.Node,s=e.Animation,u=e.Component}],execute:function(){var p,L,h,d,f,b,m;e("LoaderType",void 0),a._RF.push({},"32bfcN/Z/ROt5TOTgRQDUWE","circularLoader",void 0);var v,g=n.ccclass,y=n.property;!function(e){e.FULL_SCREEN="Full_Screen",e.ONLY_MESSAGE="ONLY_MESSAGE"}(v||(v=e("LoaderType",{})));e("CircularLoader",(p=g("CircularLoader"),L=y(o),h=y(l),p((b=t((f=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return t=e.call.apply(e,[this].concat(a))||this,i(t,"message",b,c(t)),i(t,"circle",m,c(t)),t.callbackFromParent=function(){},t}r(t,e);var a=t.prototype;return a.start=function(){},a.onLoad=function(){},a.showLoader=function(e,t){switch(void 0===e&&(e=v.FULL_SCREEN),e){case v.FULL_SCREEN:this.circle.active=!0;break;case v.ONLY_MESSAGE:this.circle.active=!1}this.node.active=!0,this.message.string=t,this.circle.active&&this.circle.getComponent(s).play()},a.stopLoader=function(e){this.node.active=!1,this.circle.getComponent(s).stop(),this.callbackFromParent=e,this.callbackFromParent&&this.callbackFromParent()},t}(u)).prototype,"message",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=t(f.prototype,"circle",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=f))||d));a._RF.pop()}}}));

System.register("chunks:///_virtual/cutSlice.ts",["./rollupPluginModLoBabelHelpers.js","cc","./singleTon.ts","./soundManager.ts","./sliceDrag.ts"],(function(t){"use strict";var e,i,n,s,c,l,a,o,r,u;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t._decorator,s=t.SpriteFrame,c=t.math,l=t.Sprite,a=t.Component},function(t){o=t.SingletonClass},function(t){r=t.SoundManager},function(t){u=t.photoSlice2}],execute:function(){var h;i._RF.push({},"d23dc7bH+VLjomWHz8VlnQZ","cutSlice",void 0);var g=n.ccclass;t("cutSlice",g("cutSlice")(h=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).imageSprite=null,e.NegativePoint=0,e.GnumOfSlice=0,e.imageCallback=null,e.rect=null,e.selectImgPos=null,e.pos=null,e.soundsObj=null,e.soundManager=null,e}e(i,t);var n=i.prototype;return n.start=function(){this.soundsObj=o.getInstance(),this.soundManager=r.getInstance()},n.setSlice=function(t,e,i,n){this.GnumOfSlice=t,this.imageCallback=n;var a=s.createWithImage(i);this.imageSprite=a,this.NegativePoint=a.height/2-a.height/this.GnumOfSlice-(this.GnumOfSlice-1)*(a.height/this.GnumOfSlice)+a.height/this.GnumOfSlice/2;var o=c.rect(0,e*(a.height/t),a.width,a.height/t);a.setRect(o),this.node.getComponent(l).spriteFrame=a,this.node.name=""+e,this.node.getComponent(u).registerTouchEvents(this.imageSprite,this.GnumOfSlice,this.imageCallback)},i}(a))||h);i._RF.pop()}}}));

System.register("chunks:///_virtual/glowing.ts",["./rollupPluginModLoBabelHelpers.js","cc","./singleTon.ts","./soundManager.ts"],(function(n){"use strict";var e,t,o,i,r,a,s,u,l,c,g,p;return{setters:[function(n){e=n.applyDecoratedDescriptor,t=n.inheritsLoose,o=n.initializerDefineProperty,i=n.assertThisInitialized},function(n){r=n.cclegacy,a=n._decorator,s=n.Node,u=n.Sprite,l=n.AudioSource,c=n.Component},function(n){g=n.SingletonClass},function(n){p=n.SoundManager}],execute:function(){var d,f,y,b,m;r._RF.push({},"6bc1c3bymFI/bbYnwX17wFt","glowing",void 0);var h=a.ccclass,w=a.property;n("glowing",(d=h("glowing"),f=w({type:s}),d((m=e((b=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e=n.call.apply(n,[this].concat(r))||this,o(e,"getMask",m,i(e)),e.audio=null,e.soundsObj=null,e.soundManager=null,e.blink=function(n){e.getMask.getComponent(u).spriteFrame=n,e.node.getChildByName("imageSprite").getComponent(u).spriteFrame=n,e.soundsObj=g.getInstance(),e.audio=e.node.getComponent(l).clip},e}t(e,n);var r=e.prototype;return r.start=function(){this.soundManager=p.getInstance()},r.update=function(){},e}(c)).prototype,"getMask",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=b))||y));r._RF.pop()}}}));

System.register("chunks:///_virtual/imageSlice.ts",["./rollupPluginModLoBabelHelpers.js","cc","./soundManager.ts","./cutSlice.ts","./singleTon.ts"],(function(e){"use strict";var t,i,l,n,a,s,r,o,c,h,u,f,m,p,g;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,l=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){a=e.cclegacy,s=e._decorator,r=e.Prefab,o=e.CCInteger,c=e.instantiate,h=e.Vec3,u=e.UITransform,f=e.Component},function(e){m=e.SoundManager},function(e){p=e.cutSlice},function(e){g=e.SingletonClass}],execute:function(){var d,C,b,y,S,v,P,I,M;a._RF.push({},"fcf2fMZHQJA17ZOoAX4VlDg","imageSlice",void 0);var z=s.ccclass,w=s.property;e("GamePlay",(d=z("GamePlay"),C=w({type:r}),b=w({type:r}),y=w({type:o}),d((P=t((v=function(e){function t(){for(var t,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return t=e.call.apply(e,[this].concat(a))||this,l(t,"frame",P,n(t)),l(t,"slicePrefab",I,n(t)),l(t,"spilt",M,n(t)),t.frameCh=null,t.smallSlice=null,t.imgCallback=null,t.selectedImage=null,t.puzzleResult=!1,t.soundsObj=null,t.soundManager=null,t.imageComplete=function(e){e&&(t.frameCh.removeAllChildren(),t.imgCallback())},t}i(t,e);var a=t.prototype;return a.onLoad=function(){var e=c(this.frame);this.node.addChild(e)},a.start=function(){this.soundsObj=g.getInstance(),this.soundManager=m.getInstance()},a.setImageforSlice=function(e,t,i){t>=11&&(this.spilt=8),this.imgCallback=i;var l=new Array,n=this.node.getChildByName("imageFrame");this.frameCh=n.getChildByName("frameChild"),this.frameCh.removeAllChildren();for(var a=0;a<this.spilt;a++){this.smallSlice=c(this.slicePrefab),this.smallSlice.getComponent(p).setSlice(this.spilt,a,e,this.imageComplete),this.smallSlice.setPosition(new h(0,a*this.smallSlice.getComponent(u).height,0)),this.frameCh.addChild(this.smallSlice);var s=this.smallSlice.getPosition(),r=this.fgetRandom(0,this.spilt);if(this.smallSlice.setSiblingIndex(r),null!=l[r]){for(var o=0;o<this.spilt;o++)if(null==l[o]){r=o,l[o]=1;break}}else l[r]=1;s.y=e.height/2-e.height/this.spilt-r*(e.height/this.spilt),s.y+=e.height/this.spilt/2,this.smallSlice.setPosition(s)}},a.fgetRandom=function(e,t){return Math.floor(Math.random()*(t-e)+e)},a.update=function(e){},t}(f)).prototype,"frame",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=t(v.prototype,"slicePrefab",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=t(v.prototype,"spilt",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),S=v))||S));a._RF.pop()}}}));

System.register("chunks:///_virtual/loadImages.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,r,o,s,a;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,r=e._decorator,o=e.resources,s=e.ImageAsset,a=e.Component}],execute:function(){var i,c;n._RF.push({},"5d562yRQM9MUIhBjWGE6v0o","loadImages",void 0);var u=r.ccclass;r.property,e("loadImages",u("loadImages")(((c=function(e){function n(){var t;return(t=e.call(this)||this).index=0,t.imageArray=[],o.loadDir("images",s,(function(e,n){e?console.log("ERROR IN LOADING"):t.imageArray=n})),t}return t(n,e),n.getInstance=function(){return n._instance},n.prototype.getImage=function(){return this.imageArray[this.index]},n}(a))._instance=new c,i=c))||i);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./audio.ts","./circularLoader.ts","./cutSlice.ts","./glowing.ts","./imageSlice.ts","./loadImages.ts","./main.ts","./resourceUtils.ts","./soundManager.ts","./settingMenu.ts","./singleTon.ts","./sliceDrag.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/main.ts",["./rollupPluginModLoBabelHelpers.js","cc","./imageSlice.ts","./glowing.ts","./soundManager.ts","./singleTon.ts","./resourceUtils.ts","./loadImages.ts"],(function(e){"use strict";var t,n,i,a,o,s,r,l,u,d,c,g,m,h,f,S,I,p,y,b;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,r=e.Prefab,l=e.Node,u=e.instantiate,d=e.Sprite,c=e.UITransform,g=e.AudioSource,m=e.SpriteFrame,h=e.Component},function(e){f=e.GamePlay},function(e){S=e.glowing},function(e){I=e.SoundManager},function(e){p=e.SingletonClass},function(e){y=e.ResourceUtils},function(e){b=e.loadImages}],execute:function(){var C,w,M,B,v,A,G,N,k,P,F,x,j,z,O;o._RF.push({},"86341eSp01NFrskQUGySOGZ","main",void 0);var E=s.ccclass,L=s.property;e("resourceLoader",(C=E("resourceLoader"),w=L({type:r}),M=L({type:r}),B=L({type:r}),v=L({type:r}),A=L(l),G=L(l),C((P=t((k=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return t=e.call.apply(e,[this].concat(o))||this,i(t,"imageSlicer",P,a(t)),i(t,"endPrefab",F,a(t)),i(t,"glowPrefab",x,a(t)),i(t,"settingMenu",j,a(t)),i(t,"musicAudioSource",z,a(t)),i(t,"soundAudioSource",O,a(t)),t.inc=0,t.glowInstantiate=null,t.startGame=null,t.ImageSlide=null,t.end=null,t.nextButton=null,t.img=null,t.result=!1,t.soundsObj=null,t.soundManager=null,t.imageI=null,t.prevImage=function(){t.soundManager.CanPlayMusic=!1,t.soundsObj.boolSound||t.soundManager.playSoundEffect(y.getInstance().getMusicFile("sound"),!1),t.ImageSlide.destroy(),t.startGame.active=!0,t.inc=0},t.resetImage=function(){t.soundsObj.boolSound||t.soundManager.playSoundEffect(y.getInstance().getMusicFile("sound"),!1),t.result&&t.glowInstantiate.destroy(),t.ImageSlide.getComponent(f).setImageforSlice(t.imageI.imageArray[t.inc],t.inc,t.addGlow)},t.nextImage=function(){(t.soundsObj.boolSound||t.soundManager.playSoundEffect(y.getInstance().getMusicFile("sound"),!1),t.imageI.index++,t.inc<t.imageI.imageArray.length-1)?(++t.inc,t.ImageSlide.destroy(),t.addSlider()):(t.inc=0,t.ImageSlide.destroy(),t.end=u(t.endPrefab),t.node.addChild(t.end),t.end.getChildByName("Button").on("click",t.resetGame,a(t)))},t.addGlow=function(){t.result=!0,t.nextButton.getComponent(d).grayscale=!1,t.glowInstantiate=u(t.glowPrefab),t.glowInstantiate.getComponent(S).blink(t.img);var e=t.glowInstantiate.getChildByName("imageSprite"),n=t.glowInstantiate.getChildByName("Mask");t.ImageSlide.addChild(t.glowInstantiate);var i=t.img.rect;e.getComponent(c).height=i.height,e.getComponent(c).width=i.width,n.getComponent(c).height=i.height,n.getComponent(c).width=i.width},t}n(t,e);var o=t.prototype;return o.start=function(){this.imageI=b.getInstance(),this.initAudioSource(),this.soundsObj=p.getInstance(),this.soundManager=I.getInstance(),y.getInstance().loadMusicFiles()},o.initAudioSource=function(){I.getInstance().init(this.musicAudioSource.getComponent(g)),I.getInstance().initSoundEffectAS(this.soundAudioSource.getComponent(g))},o.handleStartButtonClick=function(){this.soundsObj.boolSound||this.soundManager.playSoundEffect(y.getInstance().getMusicFile("sound"),!1),this.startGame=this.node.getChildByName("StartGame"),this.startGame.active=!1,this.addSlider()},o.addSlider=function(){this.result=!1,this.startGame.active=!1,this.ImageSlide=u(this.imageSlicer),this.node.addChild(this.ImageSlide),this.controlButtons(),this.setSelectedImage()},o.setSelectedImage=function(){this.img=m.createWithImage(this.imageI.imageArray[this.inc]),this.ImageSlide.getComponent(f).setImageforSlice(this.imageI.imageArray[this.inc],this.inc,this.addGlow)},o.controlButtons=function(){this.nextButton=this.ImageSlide.getChildByName("nextImage");var e=this.ImageSlide.getChildByName("resetImage"),t=this.ImageSlide.getChildByName("prevImage"),n=this.ImageSlide.getChildByName("settings");t.on("click",this.prevImage,this),e.on("click",this.resetImage,this),this.nextButton.on("click",this.nextImage,this),n.on("click",this.settingMenuAdd,this)},o.settingMenuAdd=function(){this.soundsObj.boolSound||this.soundManager.playSoundEffect(y.getInstance().getMusicFile("sound"),!1);var e=u(this.settingMenu);this.node.addChild(e)},o.restart=function(){this.handleStartButtonClick()},o.resetGame=function(){this.node.getChildByName("endscene").destroy(),this.node.getChildByName("StartGame").active=!0},o.update=function(){},t}(h)).prototype,"imageSlicer",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=t(k.prototype,"endPrefab",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=t(k.prototype,"glowPrefab",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=t(k.prototype,"settingMenu",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(k.prototype,"musicAudioSource",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=t(k.prototype,"soundAudioSource",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=k))||N));o._RF.pop()}}}));

System.register("chunks:///_virtual/resourceUtils.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,s,i,t,c,o;return{setters:[function(e){n=e.inheritsLoose},function(e){s=e.cclegacy,i=e._decorator,t=e.resources,c=e.error,o=e.Component}],execute:function(){var r,u;s._RF.push({},"e0c1asVSgxKnoKZCFRfEs4t","resourceUtils",void 0);var l=i.ccclass;e("ResourceUtils",l("ResourceUtils")(((u=function(e){function s(){for(var n,s=arguments.length,i=new Array(s),t=0;t<s;t++)i[t]=arguments[t];return(n=e.call.apply(e,[this].concat(i))||this)._musicFiles=[],n._gameResource={},n}n(s,e);var i=s.prototype;return i.start=function(){},s.getInstance=function(){return s._instance||(s._instance=new s),s._instance},i.loadMusicFiles=function(){var e=this;return new Promise((function(n,s){e._musicFiles.length>0?n(e._musicFiles):t.loadDir("audio",(function(i,t){i?(console.log("ERROR"),s(i),c("load audio files :"+i)):(console.log("LOADED: ",t),e._musicFiles=t),n(e._musicFiles)}))}))},i.getMusicFile=function(e){if(this._musicFiles)return this._musicFiles.find((function(n){return n.name==e}))||null},s}(o))._instance=void 0,r=u))||r);s._RF.pop()}}}));

System.register("chunks:///_virtual/settingMenu.ts",["./rollupPluginModLoBabelHelpers.js","cc","./singleTon.ts","./soundManager.ts","./resourceUtils.ts"],(function(n){"use strict";var t,o,s,i,u,e,a,r,c,l,d,h;return{setters:[function(n){t=n.applyDecoratedDescriptor,o=n.inheritsLoose,s=n.initializerDefineProperty,i=n.assertThisInitialized},function(n){u=n.cclegacy,e=n._decorator,a=n.Sprite,r=n.SpriteFrame,c=n.Component},function(n){l=n.SingletonClass},function(n){d=n.SoundManager},function(n){h=n.ResourceUtils}],execute:function(){var f,p,g,b,M,S,O,y,B,m,j;u._RF.push({},"ec805QOf5BJD4ZG67ndnfSq","settingMenu",void 0);var F=e.ccclass,C=e.property;n("SetiningMenu",(f=F("SetiningMenu"),p=C({type:a}),g=C({type:a}),b=C({type:r}),M=C({type:r}),f((y=t((O=function(n){function t(){for(var t,o=arguments.length,u=new Array(o),e=0;e<o;e++)u[e]=arguments[e];return t=n.call.apply(n,[this].concat(u))||this,s(t,"musicButoon",y,i(t)),s(t,"SoundButoon",B,i(t)),s(t,"ButtonOn",m,i(t)),s(t,"ButtonOff",j,i(t)),t.soundsObj=null,t.soundManager=null,t}o(t,n);var u=t.prototype;return u.start=function(){this.soundsObj=l.getInstance(),this.soundManager=d.getInstance(),this.soundsObj.boolSound||(this.SoundButoon.spriteFrame=this.ButtonOn),this.soundsObj.boolMusic||(this.musicButoon.spriteFrame=this.ButtonOn)},u.handleStartButtonClick=function(){this.soundsObj.boolSound||this.soundManager.playSoundEffect(h.getInstance().getMusicFile("sound"),!1),this.soundsObj.boolSound?(this.soundManager.CanPlaySound=this.soundsObj.boolSound,this.soundsObj.offsound(),this.SoundButoon.spriteFrame=this.ButtonOn,this.soundManager.playSoundEffect(h.getInstance().getMusicFile("sound"),!1)):(this.soundManager.CanPlaySound=!1,this.soundsObj.onSound(),this.SoundButoon.spriteFrame=this.ButtonOff,this.soundManager.stopSoundEffect())},u.handleStartButtonClick2=function(){this.soundsObj.boolMusic&&(this.soundManager.CanPlayMusic=!1),this.soundsObj.boolMusic?(this.soundManager.CanPlayMusic=this.soundsObj.boolMusic,this.soundsObj.offMusic(),this.musicButoon.spriteFrame=this.ButtonOn,this.soundManager.playMusicClip(h.getInstance().getMusicFile("Music"),!0)):(this.soundManager.CanPlayMusic=!1,this.soundsObj.onMusic(),this.musicButoon.spriteFrame=this.ButtonOff,this.soundManager.stopMusic())},u.close=function(){this.soundsObj.boolSound||this.soundManager.playSoundEffect(h.getInstance().getMusicFile("sound"),!1),this.node.parent.active=!1},u.update=function(n){},t}(c)).prototype,"musicButoon",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=t(O.prototype,"SoundButoon",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=t(O.prototype,"ButtonOn",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=t(O.prototype,"ButtonOff",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=O))||S));u._RF.pop()}}}));

System.register("chunks:///_virtual/singleTon.ts",["cc"],(function(n){"use strict";var o;return{setters:[function(n){o=n.cclegacy}],execute:function(){o._RF.push({},"7ab67ZhnhFDBpSfrSkQut86","singleTon",void 0);var t=n("SingletonClass",function(){function n(){this.boolMusic=!0,this.boolSound=!1}n.getInstance=function(){return n._instance};var o=n.prototype;return o.onSound=function(){this.boolSound=!0},o.offsound=function(){this.boolSound=!1},o.onMusic=function(){this.boolMusic=!0},o.offMusic=function(){this.boolMusic=!1},n}());t._instance=new t,o._RF.pop()}}}));

System.register("chunks:///_virtual/sliceDrag.ts",["./rollupPluginModLoBabelHelpers.js","cc","./singleTon.ts","./resourceUtils.ts","./soundManager.ts"],(function(t){"use strict";var e,i,o,n,s,a,h,c,r,l,g;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,o=t._decorator,n=t.Node,s=t.UITransform,a=t.Vec3,h=t.tween,c=t.Component},function(t){r=t.SingletonClass},function(t){l=t.ResourceUtils},function(t){g=t.SoundManager}],execute:function(){var u;i._RF.push({},"b3504SXUeFLRIHVzTDwN6jM","sliceDrag",void 0);var d=o.ccclass;t("photoSlice2",d("photoSlice2")(u=function(t){function i(){for(var e,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))||this).imageSprite=null,e.rect=null,e.selectImgPos=null,e.pos=null,e.GnumOfSlice=0,e.NegativePoint=0,e.imageCallback=null,e.soundsObj=null,e.soundManager=null,e}e(i,t);var o=i.prototype;return o.start=function(){this.soundsObj=r.getInstance(),this.soundManager=g.getInstance()},o.registerTouchEvents=function(t,e,i){this.imageCallback=i,this.GnumOfSlice=e,this.imageSprite=t,this.node.on(n.EventType.TOUCH_START,this.touchStart,this,!0),this.node.on(n.EventType.TOUCH_MOVE,this.onTouchMove,this,!0),this.node.on(n.EventType.TOUCH_END,this.checkOrder2,this,!0),this.node.on(n.EventType.TOUCH_CANCEL,this.checkOrder2,this,!0)},o.touchStart=function(t){this.rect=this.node.parent.getComponent(s).convertToNodeSpaceAR(new a(t.getUILocation().x,t.getUILocation().y,0)),this.pos=this.node.getPosition(),this.rect.x=this.rect.x-this.pos.x,this.rect.y=this.rect.y-this.pos.y,this.selectImgPos=this.node.getPosition()},o.onTouchMove=function(t){this.rect.x<0&&this.rect.y<0||this.rect.x>=0&&this.rect.y<0?t.target.position=this.node.parent.getComponent(s).convertToNodeSpaceAR(new a(t.getUILocation().x-this.rect.x,t.getUILocation().y-this.rect.y,0)):this.rect.x<0&&this.rect.y>0?t.target.position=this.node.parent.getComponent(s).convertToNodeSpaceAR(new a(t.getUILocation().x-this.rect.x,t.getUILocation().y+this.rect.y,0)):t.target.position=this.node.parent.getComponent(s).convertToNodeSpaceAR(new a(t.getUILocation().x-this.rect.x,t.getUILocation().y-this.rect.y,0));var e=this.node.getPosition();e.z=0,this.node.setPosition(e),e.x=0,this.node.setPosition(e);var i=0,o=null,n=parseInt(this.node.name),h=this.node.getPosition();this.node.getChildByName("outerStroke").active=!0;for(var c=0;c<this.GnumOfSlice;c++){var r=this.node.parent.getChildByName(""+c);r.name!=this.node.name&&(r.getChildByName("highLighter").active=!1,r.getChildByName("outerStroke").active=!1)}for(c=0;c<this.GnumOfSlice;c++){var l=this.node.parent.getChildByName(""+c);if(n!=c){var g=a.distance(l.getPosition(),h);g<this.imageSprite.height/this.GnumOfSlice&&(0==i&&(i=g,o=l),i>g&&(i=g,o=l))}}null!=o&&(o.getChildByName("highLighter").active=!0,o.getChildByName("outerStroke").active=!0)},o.checkOrder2=function(t){for(var e=this,i=0;i<this.GnumOfSlice;i++){var o=this.node.parent.getChildByName(""+i);o.getChildByName("highLighter").active=!1,o.getChildByName("outerStroke").active=!1}var n=this.node.getPosition();this.node.setPosition(n);var s=parseInt(this.node.name);n.y>=this.imageSprite.height/2-this.imageSprite.height/this.GnumOfSlice?this.node.setPosition(this.selectImgPos):n.y<this.NegativePoint&&(console.log("work"),this.node.setPosition(this.selectImgPos));for(var c=0,r=!1,g=null,u=0;u<this.GnumOfSlice;u++){var d=this.node.parent.getChildByName(""+u);if(s!=u){var p=a.distance(d.getPosition(),n);p<this.imageSprite.height/this.GnumOfSlice&&(r=!0,0==c&&(c=p,g=d),c>p&&(c=p,g=d))}}if(r){var m=g.getPosition(),y=m;this.node.setPosition(y),m.y=this.selectImgPos.y,m.z=0,this.selectImgPos.y<m.y?h(g).to(.07,{position:new a(m.x,-m.y,m.z)}).call((function(){e.soundsObj.boolSound||e.soundManager.playSoundEffect(l.getInstance().getMusicFile("swap"),!1),e.checkPuzzle()})).start():h(g).to(.07,{position:new a(m.x,m.y,m.z)}).call((function(){e.soundsObj.boolSound||e.soundManager.playSoundEffect(l.getInstance().getMusicFile("swap"),!1),e.checkPuzzle()})).start()}},o.checkPuzzle=function(){var t,e,i=null==(t=this.node.parent)?void 0:t.getChildByName("0"),o=null==(e=this.node.parent)?void 0:e.getChildByName("1");if(i&&o){var n=i.getPosition(),s=0;if(i.getPosition().y>o.getPosition().y){s=1;for(var h=1;h<this.GnumOfSlice;h++){var c=this.node.parent.getChildByName(""+h),r=a.distance(c.getPosition(),n);r+10>=h*(this.imageSprite.height/this.GnumOfSlice)&&r-10<=h*(this.imageSprite.height/this.GnumOfSlice)||(s=0)}}s&&(console.log("Image complete"),this.soundsObj.boolSound||this.soundManager.playSoundEffect(l.getInstance().getMusicFile("Sky-Puzzle"),!1),this.imageCallback(!0))}},o.update=function(t){},i}(c))||u);i._RF.pop()}}}));

System.register("chunks:///_virtual/soundManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){"use strict";var t,u;return{setters:[function(o){t=o.createClass},function(o){u=o.cclegacy}],execute:function(){u._RF.push({},"123031AeZNL2ou/M72qWtLs","soundManager",void 0),o("SoundManager",function(){function o(){this._audioSource=null,this._SoundEffectAudioSource=null,this.canPlayMusic=!0,this.canPlaySound=!0}o.getInstance=function(){return o._instance||(o._instance=new o),o._instance};var u=o.prototype;return u.init=function(o){this._audioSource=o},u.initSoundEffectAS=function(o){this._SoundEffectAudioSource=o},u.playOneShotSoundEffect=function(o){this.canPlayMusic&&(o?this._audioSource.playOneShot(o,1):console.log(o,"Invalid audio clip format"))},u.playSoundEffect=function(o,t){void 0===t&&(t=!1),this.canPlaySound&&(o?(this.stopSoundEffect(),this._SoundEffectAudioSource.clip=o,this._SoundEffectAudioSource.loop=t,this._SoundEffectAudioSource.play()):console.log(o,"Invalid audio clip format"))},u.stopSoundEffect=function(){this._SoundEffectAudioSource.stop()},u.playMusic=function(o){this.canPlayMusic&&(this._audioSource.loop=o,this._audioSource.playing||this._audioSource.play())},u.playMusicClip=function(o,t){this.canPlayMusic&&(o?(this.stopMusic(),this._audioSource.clip=o,this._audioSource.loop=t,this._audioSource.play()):console.log(o,"Invalid audio clip format"))},u.stopMusic=function(){this._audioSource.stop()},u.setMusicVolume=function(o){o=Math.round(10*o)/10,this._audioSource.volume=o,localStorage.setItem("MusicVolume",o.toString())},u.setEffectsVolume=function(o){o=Math.round(10*o)/10,this._SoundEffectAudioSource.volume=o,localStorage.setItem("EffectVolume",o.toString())},u.setVolumePrefFromLocal=function(){var o=localStorage.getItem("MusicVolume"),t=localStorage.getItem("EffectVolume"),u=localStorage.getItem("CanPlayMusic"),e=localStorage.getItem("CanPlayEffects");o&&(this.setMusicVolume(parseFloat(o)),console.log("MusicVolume: ",parseFloat(o))),t&&(this.setEffectsVolume(parseFloat(t)),console.log("EffectVolume: ",parseFloat(t))),u&&(this.CanPlayMusic="true"===u,console.log("CanPlayMusic: ",this.CanPlayMusic)),e&&(this.CanPlaySound="true"===e,console.log("CanPlayEffects: ",this.CanPlaySound))},t(o,[{key:"MusicVolume",get:function(){return this._audioSource.volume}},{key:"EffectsVolume",get:function(){return this._SoundEffectAudioSource.volume}},{key:"CanPlayMusic",get:function(){return this.canPlayMusic},set:function(o){o?this._audioSource.play():this._audioSource.pause(),localStorage.setItem("CanPlayMusic",o.toString()),this.canPlayMusic=o}},{key:"CanPlaySound",get:function(){return this.canPlaySound},set:function(o){o?this._SoundEffectAudioSource.play():this._SoundEffectAudioSource.stop(),localStorage.setItem("CanPlayEffects",o.toString()),this.canPlaySound=o}},{key:"CanPlayWinSound",get:function(){return this.canPlaySound}}]),o}())._instance=null,u._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});