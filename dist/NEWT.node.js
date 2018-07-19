!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("NEWT",[],t):"object"==typeof exports?exports.NEWT=t():e.NEWT=t()}(global,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=25)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=n,this.z=r}return r(e,[{key:"toArray",value:function(){return[this.x,this.y,this.z]}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[1,0,0],[0,1,0],[0,0,1]];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.columns=t.length,this.rows=t[0].length,this.values=t}return r(e,[{key:"toWebGL",value:function(){return new Float32Array([].concat.apply([],this.values))}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(0)),a=u(n(1)),i=u(n(18));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(t){var n=t.position,r=void 0===n?new o.default(1,1,1):n,a=t.rotation,i=void 0===a?new o.default(0,0,0):a,u=t.scale,l=void 0===u?new o.default(1,1,1):u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.position=r,this.rotation=i,this.scale=l,this.calculateMatrix(r,i,l)}return r(e,[{key:"calculateMatrix",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.position,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.rotation,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.scale,r=this.translationMatrix(e.x,e.y,e.z),o=this.rotationMatrix(t.x),u=this.scalingMatrix(n.x,n.y,n.z),l=new a.default;l=i.default.multiply(l,r),l=i.default.multiply(l,o),l=i.default.multiply(l,u),this.matrix=l}},{key:"translationMatrix",value:function(e,t,n){return new a.default([[1,0,0],[0,1,0],[e,t,n]])}},{key:"rotationMatrix",value:function(e){var t=Math.cos(e),n=Math.sin(e);return new a.default([[t,-n,0],[n,t,0],[0,0,1]])}},{key:"scalingMatrix",value:function(e,t,n){return new a.default([[e,0,0],[0,t,0],[0,0,n]])}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(21)),o=a(n(20));function a(e){return e&&e.__esModule?e:{default:e}}var i={flatVertex:r.default,flatFragment:o.default};t.default=function e(t){t.context;var n=t.diffuse,r=void 0===n?null:n,o=t.shaderType,a=void 0===o?null:o,u=t.vertexColorArray,l=void 0===u?null:u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var s=new NEWT.Shader({context:ctx,source:i[a+"Vertex"],type:"VERTEX_SHADER"}),f=new NEWT.Shader({context:ctx,source:i[a+"Fragment"],type:"FRAGMENT_SHADER"}),c=new NEWT.ShaderProgram({context:ctx,shaders:[s.shader,f.shader]});this.diffuse=r,this.fragmentShader=f,this.shaderProgram=c.program,this.vertexColorArray=l,this.vertexShader=s,this.shaderType=a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e*Math.PI/180}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return 180*e/Math.PI}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=n,this.z=r,this.w=o}return r(e,[{key:"toArray",value:function(){return[this.x,this.y,this.z,this.w]}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=n}return r(e,[{key:"toArray",value:function(){return[this.x,this.y]}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0);(r=a)&&r.__esModule;var i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,1,0,-1,-1,0,1,-1,0];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.vertices=t}return o(e,[{key:"A",value:function(){return this.vertices.slice(0,3)}},{key:"B",value:function(){return this.vertices.slice(3,6)}},{key:"C",value:function(){return this.vertices.slice(6,9)}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t){var n=t.canvas,r=void 0===n?null:n,o=t.color,a=void 0===o?null:o,i=t.font,u=void 0===i?null:i,l=t.position,s=void 0===l?null:l,f=t.text,c=void 0===f?null:f;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=r,this.color=a,this.font=u,this.position=s,this.text=c}return r(e,[{key:"draw",value:function(){canvas.context2D.font=this.font,canvas.context2D.fillStyle="rgba("+this.color.x+", "+this.color.y+", "+this.color.z+", "+this.color.w+")",canvas.context2D.fillText(this.text,this.position.x,this.position.y)}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(t){var n=t.context,r=void 0===n?null:n,o=t.shaders,a=void 0===o?null:o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var i=r.createProgram();a.forEach(function(e){r.attachShader(i,e)}),r.linkProgram(i),r.getProgramParameter(i,r.LINK_STATUS)?(r.validateProgram(i),r.getProgramParameter(i,r.VALIDATE_STATUS)?(this.shaders=a,this.program=i):console.error("ERROR validating shader program",r.getProgramInfoLog(i))):console.error("ERROR linking shader program",r.getProgramInfoLog(i))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(t){var n=t.context,r=void 0===n?null:n,o=t.source,a=void 0===o?null:o,i=t.type,u=void 0===i?null:i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var l=r.createShader(r[u]);r.shaderSource(l,a),r.compileShader(l),r.getShaderParameter(l,r.COMPILE_STATUS)?(this.source=a,this.shader=l):console.error("Could not compile "+u,r.getShaderInfoLog(l))}},function(e,t,n){"use strict";for(var r=[],o=0;o<256;++o)r[o]=(o+256).toString(16).substr(1);e.exports=function(e,t){var n=t||0,o=r;return[o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]]].join("")}},function(e,t){e.exports=require("crypto")},function(e,t,n){"use strict";var r=n(13);e.exports=function(){return r.randomBytes(16)}},function(e,t,n){"use strict";var r=n(14),o=n(12);e.exports=function(e,t,n){var a=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var u=0;u<16;++u)t[a+u]=i[u];return t||o(i)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=n(15),a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cameras=[],this.lights=[],this.objects=[]}return r(e,[{key:"add",value:function(e){e.uuid=o(),this.objects.push(e)}},{key:"remove",value:function(e){return this.objects.filter(function(t){return t.uuid!==e})}},{key:"destroyObjects",value:function(){this.objects=[]}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t){var n=t.scene,r=void 0===n?[]:n,o=t.context,a=void 0===o?null:o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scene=r,this.context=a}return r(e,[{key:"prepareArrayBuffer",value:function(e){var t=new NEWT.ArrayBuffer(e.material.shaderProgram,this.getArrayBufferAttributes(e));return t.createAndBind(this.context),t.attachBufferDataToAttributes(this.context),this.context.useProgram(t.program),t}},{key:"getArrayBufferAttributes",value:function(e){var t=[];return null!==e.geometry&&t.push({data:e.geometry,elements:3,name:"vertexPosition",normalize:"FALSE",type:"FLOAT"}),"flat"===e.material.shaderType&&(t.push({data:e.material.diffuse?e.material.diffuse.toArray():new NEWT.Color(1,1,1,1).toArray(),elements:4,name:"diffuseColor",normalize:"FALSE",type:"FLOAT"}),t.push({data:e.material.vertexColorArray||new NEWT.Color(1,1,1,1).toArray(),elements:4,name:"vertexColor",normalize:"FALSE",type:"FLOAT"})),t}},{key:"getArrayBufferUniforms",value:function(e){e.transform.calculateMatrix();var t=[];return t.push({data:e.transform.matrix.toWebGL(),elements:3,name:"matrix",normalize:"FALSE",type:"FLOAT"}),t}},{key:"setUniforms",value:function(e,t){var n=this;this.getArrayBufferUniforms(e).forEach(function(e){var r=n.context.getUniformLocation(t.program,e.name);n.context.uniformMatrix3fv(r,!1,e.data)})}},{key:"render",value:function(){var e=this;canvas.clearCanvas(),this.scene.objects.forEach(function(t){e.renderObject(t)})}},{key:"renderObject",value:function(e){var t=this.prepareArrayBuffer(e);this.setUniforms(e,t),this.context.drawArrays(this.context.TRIANGLES,0,t.elements)}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r};t.default={multiply:function(e,t){if(e.columns!==t.rows)throw new Error("You can only multiply matrices with compatible dimensions");for(var n=[[]],r=0;r<e.rows;r++){n[r]=[];for(var o=0;o<t.columns;o++){for(var i=0,u=0;u<e.columns;u++)i+=t.values[u][o]*e.values[r][u];n[r][o]=i}}return new a.default(n)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(3)),o=a(n(2));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function e(t){var n=t.geometry,a=void 0===n?[]:n,i=t.material,u=void 0===i?new r.default("flat"):i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.geometry=a,this.material=u,this.transform=new o.default({})}},function(e,t,n){"use strict";n.r(t),t.default="\n\n    precision mediump float;\n\n    varying vec4 fragColor;\n\n    void main()\n    {\n      gl_FragColor = fragColor;\n    }\n\n"},function(e,t,n){"use strict";n.r(t),t.default="\n\n  precision mediump float;\n\n  uniform mat3 matrix;\n\n  attribute vec3 vertexPosition;\n  attribute vec4 diffuseColor;\n  attribute vec4 vertexColor;\n\n  varying vec4 fragColor;\n\n  void main()\n  {\n    gl_Position = vec4(vec3(matrix * vertexPosition).xy, 1, 1);\n\n    fragColor = diffuseColor * vertexColor;\n  }\n\n"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.attributes=n,this.buffer=null,this.interlacedArray=this.getInterlacedArray(n),this.program=t,this.elements=Math.max.apply(Math,o(n.map(function(e){return e.data.length/e.elements}))),this.stride=n.reduce(function(e,t){return e+t.elements},0)}return r(e,[{key:"getInterlacedArray",value:function(e){var t=[];e.forEach(function(e,n){for(t[n]=[],a=0;a<e.data.length;a+=e.elements)t[n].push(e.data.slice(a,a+e.elements))});for(var n=[],r=function(){var r=[];e.forEach(function(e,n){var i=t[n].length,u=i<=a?a%i:a;r.push.apply(r,o(t[n][u]))}),n.push.apply(n,r)},a=0;a<t[0].length;a++)r();return n}},{key:"createAndBind",value:function(e){var t=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,new Float32Array(this.interlacedArray),e.STATIC_DRAW),this.buffer=t}},{key:"attachBufferDataToAttributes",value:function(e){var t=this;this.attributes.forEach(function(n,r){var o=e.getAttribLocation(t.program,n.name),a=t.attributes.reduce(function(e,t,n){return n<r?e+t.elements:e},0);e.vertexAttribPointer(o,n.elements,e[n.type],e[n.normalize],t.stride*Float32Array.BYTES_PER_ELEMENT,a*Float32Array.BYTES_PER_ELEMENT),e.enableVertexAttribArray(o)})}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.r=t,this.g=n,this.b=r,this.a=o}return r(e,[{key:"toArray",value:function(){return[this.r,this.g,this.b,this.a]}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t){var n=t.color,r=void 0===n?new Vector4(1,1,1,1):n,o=t.element,a=void 0===o?null:o;t.height,t.width;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),null!==a){var i=document.getElementById(a),u=i.getContext("webgl");try{this.canvas=i,this.color=r,this.context=u,this.element=i,this.create2DContext(i),this.setElementDimensions(i,i.offsetHeight,i.offsetWidth),this.setContextViewport(i,u),this.clearCanvas(u,r)}catch(e){console.log("Could Not Initialize WebGL"),console.error(e)}}else console.log("Please pass a canvas element to initialize")}return r(e,[{key:"setElementDimensions",value:function(e,t,n){e.setAttribute("width",n),e.setAttribute("height",t)}},{key:"setContextViewport",value:function(e,t){t.viewport(0,0,e.offsetWidth,e.offsetHeight)}},{key:"clearCanvas",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.context,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.color;e.clearColor(t.x,t.y,t.z,t.w),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)}},{key:"create2DContext",value:function(e){var t=e.cloneNode(!0);this.setElementDimensions(t,e.offsetHeight,e.offsetWidth),t.setAttribute("id",e.id+"2D"),t.style.position="absolute",t.style.left=e.offsetLeft+"px",t.style.top=e.offsetTop+"px",e.parentNode.insertBefore(t,e.nextSibling),this.canvas2D=t,this.context2D=t.getContext("2d")}}]),e}();t.default=o},function(e,t,n){"use strict";var r=w(n(24)),o=w(n(23)),a=w(n(22)),i=w(n(3)),u=w(n(1)),l=w(n(19)),s=w(n(17)),f=w(n(16)),c=w(n(11)),d=w(n(10)),v=w(n(9)),h=w(n(2)),y=w(n(8)),p=w(n(7)),m=w(n(0)),g=w(n(6)),b=w(n(5)),x=w(n(4));function w(e){return e&&e.__esModule?e:{default:e}}var _={Canvas:r.default,Color:o.default,ArrayBuffer:a.default,Material:i.default,Matrix:u.default,Mesh:l.default,Renderer:s.default,Scene:f.default,Shader:c.default,ShaderProgram:d.default,Text2D:v.default,Transform:h.default,Triangle:y.default,Vector2:p.default,Vector3:m.default,Vector4:g.default,degToRad:b.default,radToDeg:x.default};void 0!==e&&void 0!==e.exports?e.exports=_:window.NEWT=_}])});