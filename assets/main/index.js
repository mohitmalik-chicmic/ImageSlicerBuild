System.register("chunks:///_virtual/bheem.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,n,i,a,c,o,u,s;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,c=e._decorator,o=e.SpriteFrame,u=e.Sprite,s=e.Component}],execute:function(){var p,l,h,f,m;a._RF.push({},"1d3e9xuX9FOY4EQ3YzahCuE","bheem",void 0);var y=c.ccclass,b=c.property;e("bheem",(p=y("bheem"),l=b({type:o}),p((m=t((f=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a))||this,n(t,"character",m,i(t)),t}r(t,e);var a=t.prototype;return a.start=function(){},a.changeImage=function(e,t){this.node.getComponent(u).spriteFrame=this.character},a.update=function(e){},t}(s)).prototype,"character",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=f))||h));a._RF.pop()}}}));

System.register("chunks:///_virtual/GamePlay.ts",["./rollupPluginModLoBabelHelpers.js","cc","./photoSlice2.ts"],(function(e){"use strict";var t,i,l,n,r,a,s,o,c,u,p,m,f,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,l=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,s=e.ImageAsset,o=e.Prefab,c=e.CCInteger,u=e.instantiate,p=e.Vec3,m=e.UITransform,f=e.Component},function(e){h=e.photoSlice2}],execute:function(){var g,b,y,d,z,P,S,C,v,w,A,R,G;r._RF.push({},"fcf2fMZHQJA17ZOoAX4VlDg","GamePlay",void 0);var I=a.ccclass,k=a.property;e("GamePlay",(g=I("GamePlay"),b=k({type:s}),y=k({type:o}),d=k({type:o}),z=k({type:c}),P=k({type:c}),g((v=t((C=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,l(t,"imageAssert",v,n(t)),l(t,"slicePrefab",w,n(t)),l(t,"imageGlow",A,n(t)),l(t,"spilt",R,n(t)),l(t,"sliceNumber",G,n(t)),t.imgCallback=null,t.smallSlice=null,t.selectedImage=null,t.puzzleResult=!1,t.imageComplete=function(e,i){t.puzzleResult=e,t.imgCallback(t.puzzleResult,i)},t}i(t,e);var r=t.prototype;return r.start=function(){},r.setImageforSlice=function(e,t){this.imgCallback=t;for(var i=new Array,l=0;l<this.spilt;l++){this.smallSlice=u(this.slicePrefab),this.smallSlice.getComponent(h).setSlice(this.spilt,l,e,this.imageComplete),this.smallSlice.setPosition(new p(0,l*this.smallSlice.getComponent(m).height,0)),this.node.addChild(this.smallSlice);var n=this.smallSlice.getPosition(),r=this.fgetRandom(i,0,this.spilt);if(null!=i[r]){for(var a=0;a<this.spilt;a++)if(null==i[a]){r=a,i[a]=1;break}}else i[r]=1;n.y=e.height/2-e.height/this.spilt-r*(5+e.height/this.spilt),this.smallSlice.setPosition(n)}},r.fgetRandom=function(e,t,i){return Math.floor(Math.random()*(i-t)+t)},r.update=function(e){},t}(f)).prototype,"imageAssert",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(C.prototype,"slicePrefab",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=t(C.prototype,"imageGlow",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=t(C.prototype,"spilt",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),G=t(C.prototype,"sliceNumber",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),S=C))||S));r._RF.pop()}}}));

System.register("chunks:///_virtual/glowing.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,r,i,o,a,c,l,s;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,r=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){o=t.cclegacy,a=t._decorator,c=t.Node,l=t.Sprite,s=t.Component}],execute:function(){var p,u,g,f,y;o._RF.push({},"6bc1c3bymFI/bbYnwX17wFt","glowing",void 0);var m=a.ccclass,b=a.property;t("glowing",(p=m("glowing"),u=b({type:c}),p((y=e((f=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o))||this,r(e,"getMask",y,i(e)),e.blink=function(t){e.getMask.getComponent(l).spriteFrame=t,e.node.getChildByName("Item_cat").getComponent(l).spriteFrame=t},e}n(e,t);var o=e.prototype;return o.start=function(){},o.update=function(){},e}(s)).prototype,"getMask",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=f))||g));o._RF.pop()}}}));

System.register("chunks:///_virtual/imageLoad.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,i,o,a,r,c,l,s,p,u,g,d;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){a=e.cclegacy,r=e._decorator,c=e.Prefab,l=e.Node,s=e.instantiate,p=e.SpriteFrame,u=e.Sprite,g=e.UITransform,d=e.Component}],execute:function(){var m,h,f,y,C,b,v;a._RF.push({},"43e55gS43lM0YtdEuFTp19e","imageLoad",void 0);var w=r.ccclass,N=r.property;e("imageLoad",(m=w("imageLoad"),h=N({type:c}),f=N({type:l}),m((b=t((C=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return t=e.call.apply(e,[this].concat(a))||this,i(t,"image",b,o(t)),i(t,"contentNode",v,o(t)),t._flag=!1,t._image=null,t.selectedCallback=null,t.sliceImages=[],t}n(t,e);var a=t.prototype;return a.start=function(){},a.show=function(e,t){var n=this;this.selectedCallback=t,this.sliceImages=e,e.forEach((function(e,t){var i=s(n.image),o=p.createWithImage(e);i.getComponent(u).spriteFrame=o,i.name=""+t;n.contentNode.getComponent(g).width,i.getComponent(g).width;i.getComponent(g).height=n.contentNode.getComponent(g).width/2,i.getComponent(g).width=n.contentNode.getComponent(g).width/2,i.on(l.EventType.TOUCH_END,n.getSelected,n),n.contentNode.addChild(i)}))},a.getSelected=function(e){var t=this.sliceImages[e.target.name];this.selectedCallback(this._image,t)},a.update=function(e){},t}(d)).prototype,"image",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(C.prototype,"contentNode",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=C))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GamePlay.ts","./MainScene.ts","./bheem.ts","./glowing.ts","./imageLoad.ts","./photoSlice2.ts","./resourceLoader.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MainScene.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,t,c,r;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,c=e._decorator,r=e.Component}],execute:function(){var o;t._RF.push({},"6f817NNE/FDY7vqBPPQk3ef","MainScene",void 0);var i=c.ccclass;c.property,e("MainScene",i("MainScene")(o=function(e){function t(){return e.apply(this,arguments)||this}return n(t,e),t.prototype.update=function(e){},t}(r))||o);t._RF.pop()}}}));

System.register("chunks:///_virtual/photoSlice2.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i,o,n,s,h,r,c,a,g;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,o=t._decorator,n=t.SpriteFrame,s=t.math,h=t.Node,r=t.Sprite,c=t.UITransform,a=t.Vec3,g=t.Component}],execute:function(){var l;i._RF.push({},"b3504SXUeFLRIHVzTDwN6jM","photoSlice2",void 0);var p=o.ccclass;o.property,t("photoSlice2",p("photoSlice2")(l=function(t){function i(){for(var e,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))||this).MouseposX=0,e.MouseposY=0,e.imageSprite=null,e.rect=null,e.flag=!0,e.puzzleResult=!1,e.GnumOfSlice=0,e.imageCallback=null,e}e(i,t);var o=i.prototype;return o.start=function(){},o.setSlice=function(t,e,i,o){this.GnumOfSlice=t,this.imageCallback=o;var c=n.createWithImage(i);(this.flag=!0)&&(this.imageSprite=c,this.flag=!1);var a=s.rect(0,e*(c.height/t),c.width,c.height/t);this.node.on(h.EventType.TOUCH_START,this.touchStart,this,!0),this.node.on(h.EventType.TOUCH_MOVE,this.onTouchMove,this,!0),this.node.on(h.EventType.TOUCH_END,this.checkOrder2,this,!0),c.setRect(a),this.node.getComponent(r).spriteFrame=c,this.node.name=""+e},o.touchStart=function(t){this.rect=this.node.parent.getComponent(c).convertToNodeSpaceAR(new a(t.getUILocation().x,t.getUILocation().y,0));var e=this.node.getPosition();this.rect.x=this.rect.x-e.x,this.rect.y=this.rect.y-e.y},o.onTouchMove=function(t){this.rect.x<0&&this.rect.y<0||this.rect.x>=0&&this.rect.y<0?t.target.position=this.node.parent.getComponent(c).convertToNodeSpaceAR(new a(t.getUILocation().x-this.rect.x,t.getUILocation().y-this.rect.y,0)):this.rect.x<0&&this.rect.y>0?t.target.position=this.node.parent.getComponent(c).convertToNodeSpaceAR(new a(t.getUILocation().x-this.rect.x,t.getUILocation().y+this.rect.y,0)):t.target.position=this.node.parent.getComponent(c).convertToNodeSpaceAR(new a(t.getUILocation().x-this.rect.x,t.getUILocation().y-this.rect.y,0))},o.checkOrder2=function(t){var e=this.node.name;if("0"==e||e==""+(this.GnumOfSlice-1))if("0"==e){var i=(g=this.node.parent.getChildByName("1")).getPosition(),o=this.node.getPosition();(d=a.distance(o,i))<this.imageSprite.height/this.GnumOfSlice+10&&(o.y-=d-this.imageSprite.height/this.GnumOfSlice,o.x=0,i.x=0,g.setPosition(i),this.node.setPosition(o))}else{var n=(r=this.node.parent.getChildByName(""+(this.GnumOfSlice-2))).getPosition(),s=this.node.getPosition();if((u=a.distance(s,n))<this.imageSprite.height/this.GnumOfSlice+10)(i=r.getPosition()).x=0,(o=this.node.getPosition()).x=0,o.y+=u-this.imageSprite.height/this.GnumOfSlice,this.node.setPosition(o),r.setPosition(i)}else{var h=(parseInt(e)-1).toString(),r=this.node.parent.getChildByName(""+h),c=(parseInt(e)+1).toString(),g=this.node.parent.getChildByName(""+c),l=r.getPosition(),p=g.getPosition(),u=(s=this.node.getPosition(),a.distance(l,s)),d=a.distance(s,p);if(u<this.imageSprite.height/this.GnumOfSlice+10){var m=r.getPosition();m.x=0;var S=this.node.getPosition();S.x=0,S.y+=u-this.imageSprite.height/this.GnumOfSlice,this.node.setPosition(S),r.setPosition(m)}else if(d<this.imageSprite.height/this.GnumOfSlice+10){i=g.getPosition();(o=this.node.getPosition()).y-=d-this.imageSprite.height/this.GnumOfSlice,o.x=0,i.x=0,g.setPosition(i),this.node.setPosition(o)}}this.checkPuzzle()},o.checkPuzzle=function(){for(var t=this.node.parent.getChildByName("0").getPosition(),e=1,i=1;i<this.GnumOfSlice;i++){var o=this.node.parent.getChildByName(""+i),n=a.distance(o.getPosition(),t);n+2>=i*(this.imageSprite.height/this.GnumOfSlice)&&n-2<=i*(this.imageSprite.height/this.GnumOfSlice)||(e=0)}if(e){console.log("Puzzle solved");var s=Math.floor(this.GnumOfSlice/2);console.log(s);var h=this.node.parent.getChildByName(""+s);this.puzzleResult=!0,this.imageCallback(this.puzzleResult,h.getPosition())}},o.update=function(t){},i}(g))||l);i._RF.pop()}}}));

System.register("chunks:///_virtual/resourceLoader.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GamePlay.ts","./glowing.ts","./imageLoad.ts"],(function(e){"use strict";var t,i,o,r,n,a,l,c,s,d,u,g,m,p,h,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,o=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){n=e.cclegacy,a=e._decorator,l=e.Prefab,c=e.instantiate,s=e.SpriteFrame,d=e.UITransform,u=e.resources,g=e.ImageAsset,m=e.Component},function(e){p=e.GamePlay},function(e){h=e.glowing},function(e){f=e.imageLoad}],execute:function(){var w,y,I,b,S,v,C,G,N;n._RF.push({},"86341eSp01NFrskQUGySOGZ","resourceLoader",void 0);var L=a.ccclass,P=a.property;e("resourceLoader",(w=L("resourceLoader"),y=P({type:l}),I=P({type:l}),b=P({type:l}),w((C=t((v=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return t=e.call.apply(e,[this].concat(n))||this,o(t,"scrollView",C,r(t)),o(t,"imageSlicePrefab",G,r(t)),o(t,"imageGlow",N,r(t)),t.img=null,t.scrollViewNode=null,t.ImageSlide=null,t.result=!1,t.setSelectedImage=function(e,i){t.scrollViewNode.active=!1,t.ImageSlide=c(t.imageSlicePrefab),t.ImageSlide.getComponent(p).setImageforSlice(i,t.addGlow),t.img=s.createWithImage(i),t.node.addChild(t.ImageSlide)},t.addGlow=function(e,i){t.ImageSlide.active=!1;var o=c(t.imageGlow);o.getComponent(h).blink(t.img);var r=o.getChildByName("Item_cat"),n=o.getChildByName("Mask");console.log("Resource loader add Glow"),t.node.addChild(o),o.setPosition(0,i.y,0);var a=t.img._rect;r.getComponent(d).height=a.height,r.getComponent(d).width=a.width,n.getComponent(d).height=a.height,n.getComponent(d).width=a.width},t}i(t,e);var n=t.prototype;return n.start=function(){var e=this;this.scrollViewNode=c(this.scrollView),u.loadDir("Images",g,(function(t,i){t?console.log("ERROR IN LOADING"):(e.scrollViewNode.getComponent(f).show(i,e.setSelectedImage),e.node.addChild(e.scrollViewNode))}))},n.update=function(e){},t}(m)).prototype,"scrollView",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=t(v.prototype,"imageSlicePrefab",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=t(v.prototype,"imageGlow",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=v))||S));n._RF.pop()}}}));

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